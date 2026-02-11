interface MarkdownProps {
  content: string;
}

function parseInline(text: string): string {
  return text
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

export default function Markdown({ content }: MarkdownProps) {
  const lines = content.split('\n');
  const html: string[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let inList = false;
  let listItems: string[] = [];
  let listType: 'ul' | 'ol' = 'ul';
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeader: string[] = [];

  function flushList() {
    if (inList && listItems.length > 0) {
      const items = listItems.map((item) => `<li>${parseInline(item)}</li>`).join('');
      html.push(`<${listType}>${items}</${listType}>`);
      listItems = [];
      inList = false;
    }
  }

  function flushTable() {
    if (inTable && tableHeader.length > 0) {
      const headerHtml = tableHeader.map((h) => `<th>${parseInline(h.trim())}</th>`).join('');
      const rowsHtml = tableRows
        .map((row) => `<tr>${row.map((cell) => `<td>${parseInline(cell.trim())}</td>`).join('')}</tr>`)
        .join('');
      html.push(`<table><thead><tr>${headerHtml}</tr></thead><tbody>${rowsHtml}</tbody></table>`);
      tableHeader = [];
      tableRows = [];
      inTable = false;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        html.push(`<pre><code>${codeContent.join('\n')}</code></pre>`);
        codeContent = [];
        inCodeBlock = false;
      } else {
        flushList();
        flushTable();
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      continue;
    }

    // Table detection
    if (line.startsWith('|') && line.endsWith('|')) {
      const cells = line.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      // Check if it's a separator row
      if (cells.every((c) => /^[\s-:]+$/.test(c))) {
        continue; // Skip separator
      }
      if (!inTable) {
        flushList();
        inTable = true;
        tableHeader = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Headings
    if (line.startsWith('## ')) {
      flushList();
      html.push(`<h2>${parseInline(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith('### ')) {
      flushList();
      html.push(`<h3>${parseInline(line.slice(4))}</h3>`);
      continue;
    }

    // Horizontal rule
    if (line.match(/^---+$/)) {
      flushList();
      html.push('<hr />');
      continue;
    }

    // Unordered list
    if (line.match(/^- /)) {
      if (!inList || listType !== 'ul') {
        flushList();
        inList = true;
        listType = 'ul';
      }
      listItems.push(line.slice(2));
      continue;
    }

    // Ordered list
    const olMatch = line.match(/^\d+\.\s/);
    if (olMatch) {
      if (!inList || listType !== 'ol') {
        flushList();
        inList = true;
        listType = 'ol';
      }
      listItems.push(line.slice(olMatch[0].length));
      continue;
    }

    // If we were in a list but hit a non-list line, flush
    if (inList) {
      flushList();
    }

    // Empty line
    if (line.trim() === '') {
      continue;
    }

    // Paragraph
    html.push(`<p>${parseInline(line)}</p>`);
  }

  flushList();
  flushTable();

  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: html.join('') }} />
  );
}

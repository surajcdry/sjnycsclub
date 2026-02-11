interface SectionHeaderProps {
  title: string;
  description?: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center animate-fade-up">
      <h1 className="text-5xl font-bold tracking-tight text-foreground">{title}</h1>
      {description && (
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
      <div className="mt-6 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-sky to-accent" />
    </div>
  );
}

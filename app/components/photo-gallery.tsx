"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface PhotoGalleryProps {
    photos: string[];
    eventTitle: string;
}

export default function PhotoGallery({ photos, eventTitle }: PhotoGalleryProps) {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!selectedPhoto) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedPhoto(null);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKey);
        };
    }, [selectedPhoto]);

    const overlay = selectedPhoto ? (
        <div
            onClick={() => setSelectedPhoto(null)}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "zoom-out",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                backdropFilter: "blur(8px)",
            }}
        >
            <Image
                src={selectedPhoto}
                alt={eventTitle}
                width={1400}
                height={900}
                style={{
                    maxHeight: "90vh",
                    maxWidth: "92vw",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "12px",
                }}
                priority
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    ) : null;

    return (
        <>
            <div className="grid grid-cols-2 gap-3">
                {photos.map((photo, i) => (
                    <button
                        key={i}
                        onClick={() => setSelectedPhoto(photo)}
                        className="overflow-hidden rounded-xl cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-sky/50 focus:ring-offset-2 focus:ring-offset-background"
                    >
                        <Image
                            src={photo}
                            alt={`${eventTitle} photo ${i + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </button>
                ))}
            </div>

            {mounted && overlay && createPortal(overlay, document.body)}
        </>
    );
}

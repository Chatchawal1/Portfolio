"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/types";
import { X, Expand, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isImageFullscreen, setIsImageFullscreen] = useState(false);

    const images = project?.images?.length
        ? project.images
        : project?.image
        ? [project.image]
        : [];

    // รีเซ็ตเมื่อเปลี่ยน project
    useEffect(() => {
        setActiveIndex(0);
        setIsImageFullscreen(false);
    }, [project]);

    const goNext = () => setActiveIndex((i) => (i + 1) % images.length);
    const goPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

    // ปิดด้วย ESC + เลื่อนรูปด้วยลูกศรซ้าย-ขวา
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (isImageFullscreen) setIsImageFullscreen(false);
                else onClose();
            }
            if (images.length > 1) {
                if (e.key === "ArrowRight") goNext();
                if (e.key === "ArrowLeft") goPrev();
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose, isImageFullscreen, images.length]);

    if (!project) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                {/* Modal Box */}
                <div
                    className="relative w-full max-w-2xl rounded-3xl border border-orange-500/30 bg-black/90 backdrop-blur-md overflow-hidden shadow-[0_0_40px_rgba(249,115,22,.3)]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* ปุ่มปิด */}
                    <button
                        onClick={onClose}
                        aria-label="ปิดหน้าต่าง"
                        className="absolute top-4 right-4 z-10 p-1 rounded-full bg-black/50 text-white hover:text-orange-400 transition-colors"
                    >
                        <X size={20} />
                    </button>

                    {/* Gallery */}
                    {images.length > 0 && (
                        <div className="relative aspect-video w-full cursor-zoom-in group">
                            <div
                                className="absolute inset-0"
                                onClick={() => setIsImageFullscreen(true)}
                            >
                                <Image
                                    src={images[activeIndex]}
                                    alt={`${project.title} - ${activeIndex + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width:768px)100vw,672px"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                                    <Expand
                                        size={28}
                                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>

                            {/* ปุ่มเลื่อนซ้าย-ขวา (แสดงเมื่อมีมากกว่า 1 รูป) */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goPrev();
                                        }}
                                        aria-label="รูปก่อนหน้า"
                                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:text-orange-400 transition-colors"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goNext();
                                        }}
                                        aria-label="รูปถัดไป"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:text-orange-400 transition-colors"
                                    >
                                        <ChevronRight size={20} />
                                    </button>

                                    {/* Dots indicator */}
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                        {images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveIndex(i);
                                                }}
                                                aria-label={`ไปที่รูปที่ ${i + 1}`}
                                                className={`h-1.5 rounded-full transition-all ${
                                                    i === activeIndex
                                                        ? "w-4 bg-orange-400"
                                                        : "w-1.5 bg-white/40"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* เนื้อหา */}
                    <div className="p-6 space-y-4">
                        <h2 className="text-2xl font-bold text-white">{project.title}</h2>

                        <p className="text-foreground/80 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    className="bg-orange-500/15 text-orange-300 border border-orange-500/40"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-2">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-400 transition-colors"
                                >
                                    Demo
                                </a>
                            )}
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-xl border border-orange-500/50 text-orange-300 font-medium hover:border-orange-400 hover:text-orange-200 transition-colors"
                                >
                                    Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Image Viewer */}
            {isImageFullscreen && images.length > 0 && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
                    onClick={() => setIsImageFullscreen(false)}
                >
                    <button
                        onClick={() => setIsImageFullscreen(false)}
                        aria-label="ปิดรูปภาพเต็มจอ"
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:text-orange-400 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goPrev();
                                }}
                                aria-label="รูปก่อนหน้า"
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:text-orange-400 transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goNext();
                                }}
                                aria-label="รูปถัดไป"
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:text-orange-400 transition-colors"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}

                    <div
                        className="relative w-full h-full max-w-5xl max-h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[activeIndex]}
                            alt={`${project.title} - ${activeIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
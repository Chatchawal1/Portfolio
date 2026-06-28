"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/types";
import { X } from "lucide-react";
import { useEffect } from "react";

interface Props {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
    // ปิดด้วย ESC
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    if (!project) return null;

    return (
        // Backdrop
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
                    className="absolute top-4 right-4 z-10 p-1 rounded-full bg-black/50 text-white hover:text-orange-400 transition-colors"
                >
                    <X size={20} />
                </button>

                {/* รูปใหญ่ */}
                {project.image && (
                    <div className="relative aspect-video w-full">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width:768px)100vw,672px"
                        />
                    </div>
                )}

                {/* เนื้อหา */}
                <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>

                    <p className="text-foreground/80 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tags */}
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

                    {/* Links */}
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
            </div >
        </div >
    );
}
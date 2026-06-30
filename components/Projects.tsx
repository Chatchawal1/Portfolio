"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { projects } from "@/lib/data";
import { Project } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectModal from "./ui/ProjectModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section
      id="work"
      title="performance"
      className="mt-10 w-full"
      titleClassName="text-center text-3xl sm:text-4xl lg:text-5xl mb-8"
    >
      <div className="w-full min-w-0 overflow-hidden">
        <Swiper
          effect="coverflow"
          centeredSlides
          grabCursor
          slidesPerView="auto"
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 40,
            depth: 120,
            modifier: 1.5,
            scale: 0.92,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="py-10"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!w-[min(100%,320px)] sm:!w-[min(100%,400px)] lg:!w-[min(100%,460px)] xl:!w-[min(100%,520px)]"
            >
              <Card
                onClick={() => setSelected(project)}
                className="
                  group cursor-pointer
                  min-h-[420px]
                  overflow-hidden rounded-3xl
                  border border-orange-500/30
                  bg-black/30 backdrop-blur-md
                  transition-all duration-300
                  hover:border-orange-400
                  hover:shadow-[0_0_30px_rgba(249,115,22,.35)]
                  "
              >
                {project.image && project.image.startsWith("/") && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:768px)100vw,50vw"
                    />
                  </div>
                )}

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-foreground/80">{project.description}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
"use client";

import Image from "next/image";
import Section from "./Section";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <Section id="work">
      <div className="w-full min-w-0 overflow-hidden">
        <Swiper
          effect="coverflow"
          centeredSlides
          grabCursor
          slidesPerView="auto"
          pagination={{
            clickable: true,
          }}
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
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-orange-500/30
                bg-black/30
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-orange-400
                hover:shadow-[0_0_30px_rgba(249,115,22,.35)]
              "
            >
              {project.image && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                    sizes="(max-width:768px)100vw,50vw"
                  />
                </div>
              )}

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-foreground/80">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-orange-500/15 text-orange-300 border border-orange-500/40"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-5 flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-yellow-300 transition-colors font-medium"
                    >
                      Demo
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-yellow-300 transition-colors font-medium"
                    >
                      Code
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
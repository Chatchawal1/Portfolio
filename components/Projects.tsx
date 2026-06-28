"use client";

import Image from "next/image";
import Section from "./Section";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <Section id="work" title="ผลงาน">
      <Swiper
        effect="coverflow"
        centeredSlides
        grabCursor
        slidesPerView={"auto"}
        loop
        navigation
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 220,
          modifier: 2,
          scale: 0.82,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="py-10"
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="!w-[340px] sm:!w-[420px] lg:!w-[500px]"
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
    </Section>
  );
}
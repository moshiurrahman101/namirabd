// components/services-carousel.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Catering",
    description: "Exquisite culinary experiences for all occasions",
    image: "/images/catering.jpg",
    link: "/catering"
  },
  {
    title: "Restaurant",
    description: "Fine dining with authentic flavors",
    image: "/images/restaurant.jpg",
    link: "/restaurant"
  },
  {
    title: "Event Management",
    description: "Memorable events executed flawlessly",
    image: "/images/events.jpg",
    link: "/event-management"
  },
  {
    title: "Party Center",
    description: "Perfect venues for unforgettable celebrations",
    image: "/images/party-center.jpg",
    link: "/party-center"
  },
  {
    title: "Prime Namira Accessories",
    description: "Premium event supplies and decor",
    image: "/images/accessories.jpg",
    link: "/accessories"
  },
  {
    title: "Namira Corporation",
    description: "Comprehensive business solutions",
    image: "/images/corporation.jpg",
    link: "/corporation"
  },
];

export function ServicesCarousel() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Our Premium Services
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="rounded-lg object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                        {service.description}
                      </p>
                      <Button asChild variant="outline">
                        <Link href={service.link}>
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-4 justify-center mt-8">
            <CarouselPrevious className="static translate-x-0 translate-y-0">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="static translate-x-0 translate-y-0">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
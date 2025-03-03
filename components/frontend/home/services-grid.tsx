// components/services-grid.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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

export function ServicesGrid() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across all aspects of hospitality and event management
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="group relative h-full border rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-60">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 h-[60px]">
                    {service.description}
                  </p>
                  <Button asChild variant="link" className="px-0 text-primary">
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
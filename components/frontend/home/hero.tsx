// components/hero.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Namira BD Services"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-red/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex items-center">
        <div className="max-w-4xl space-y-8 text-white px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 text-primary">
              Since 2010 • Trusted Nationwide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Experience Excellence with
              <span className="block mt-2 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                Namira BD
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-gray-200 font-light"
          >
            Your Complete Solution for Luxury Catering, Premier Dining & 
            Unforgettable Events
          </motion.p>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:grid md:grid lg:grid-cols-2 md:grid-cols-3 gap-4 mt-12"
          >
            {[
              "Catering Services",
              "Fine Dining Restaurant",
              "Event Management",
              "Party Venues",
              "Premium Accessories",
              "Corporate Solutions"
            ].map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg"
              >
                <div className="h-2 w-2 bg-accent rounded-full" />
                <span className="text-sm md:text-base">{service}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col lg:flex-row md:flex-row gap-4 mt-12"
          >
            <Link href="/services">
            <Button size="lg" className="text-lg px-8 py-6">
              Explore Services
            </Button>
            </Link>
            <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-black border-white text-white hover:bg-white/10 hover:text-white"
            >
              Contact Now
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
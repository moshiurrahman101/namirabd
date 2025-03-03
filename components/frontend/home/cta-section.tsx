"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";

// components/cta-section.tsx
export function CTASection() {
    return (
      <section className="w-full py-12 md:py-24 bg-primary">
        <div className="container text-center text-white px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Event?</h2>
          <p className="text-lg mb-8">Book your consultation with our experts today</p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg" className="px-8" asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-white text-white bg-transparent" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }
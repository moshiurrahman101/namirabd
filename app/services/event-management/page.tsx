"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EventManagementPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Event Management Service with Namira BD
      </motion.h1>

      {/* Hero Image */}
      <motion.div
        className="w-full rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/event-management/hero.jpg"
          alt="Namira BD Event Management"
          width={1200}
          height={500}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Why Choose Us */}
      <div className="mt-12 space-y-8">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/event-management/luxury-events.jpg"
            alt="Luxury Event Planning"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              Premium Event Planning & Execution
            </h2>
            <p className="text-gray-600 mt-2">
              From intimate gatherings to grand celebrations, we handle
              everything with precision and creativity, ensuring a flawless
              experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/event-management/venue-decor.jpg"
            alt="Exclusive Venue Decor"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              Stunning Venues & Decor
            </h2>
            <p className="text-gray-600 mt-2">
              We transform ordinary spaces into breathtaking venues, ensuring
              your event is a memorable one.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/event-management/catering.jpg"
            alt="Exclusive Catering Services"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              Exclusive Catering Services
            </h2>
            <p className="text-gray-600 mt-2">
              Our catering team ensures a diverse menu tailored to your event’s
              theme, offering both traditional and international cuisine.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Event Categories */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-primary">
          Types of Events We Manage
        </h2>
        <p className="text-gray-600 mt-2">
          No matter the occasion, we make it extraordinary.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Weddings & Receptions", img: "/images/event-management/wedding.jpg" },
            { title: "Corporate Events & Conferences", img: "/images/event-management/corporate.jpg" },
            { title: "Private Parties & Birthdays", img: "/images/event-management/private-party.jpg" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg shadow-lg bg-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-lg font-medium mt-3">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-primary">
          Let’s Make Your Event Unforgettable!
        </h2>
        <p className="text-gray-600 mt-2">
          Contact us to bring your vision to life with seamless execution and
          impeccable service.
        </p>

        <div className="mt-6 space-y-2">
          <p className="text-lg font-medium">📍 Cs Plot -70, VIP Road, Mohakhali, Dhaka</p>
          <p className="text-lg font-medium">📞 01511-110242</p>
          <p className="text-lg font-medium">✉️ namira.bd.manager@gmail.com</p>
        </div>

        <Link href="/booking">
          <motion.button
            className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Event Now
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

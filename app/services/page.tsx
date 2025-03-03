"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Catering Services",
    description: "Exquisite culinary experiences for weddings, corporate events, and private parties.",
    image: "/images/catering.jpg",
    link: "/catering",
  },
  {
    title: "Restaurant",
    description: "A premium dining experience with authentic flavors and top-quality ingredients.",
    image: "/images/restaurant.jpg",
    link: "/restaurant",
  },
  {
    title: "Event Management",
    description: "Expert planning and seamless execution for unforgettable events.",
    image: "/images/events.jpg",
    link: "/event-management",
  },
  {
    title: "Party Venues",
    description: "Elegant and spacious venues tailored for grand celebrations.",
    image: "/images/party-center.jpg",
    link: "/party-venues",
  },
  {
    title: "Premium Accessories",
    description: "High-quality event supplies and décor to enhance your special moments.",
    image: "/images/accessories.jpg",
    link: "/premium-accessories",
  },
  {
    title: "Corporate Solutions",
    description: "Comprehensive business and corporate event services for professionals.",
    image: "/images/corporation.jpg",
    link: "/corporate-solutions",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-6">
      {/* Page Heading */}
      <motion.h1 
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Premium Services
      </motion.h1>

      <motion.p 
        className="text-gray-600 text-center mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Explore our exclusive services designed to make your events memorable and your dining experience extraordinary.
      </motion.p>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden group relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Service Image */}
            <div className="relative w-full h-56">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform group-hover:scale-105 duration-300"
              />
            </div>

            {/* Service Info */}
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-gray-500 mt-2">{service.description}</p>

              <Link href={service.link} className="mt-4 inline-block bg-primary text-white px-5 py-2 rounded-full shadow-md transition-all hover:bg-primary/90">
                Learn More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

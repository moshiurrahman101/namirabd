"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RestaurantPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience Luxury Dining at Namira BD Restaurant
      </motion.h1>

      {/* Hero Image */}
      <motion.div
        className="w-full rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/restaurant/hero.jpg"
          alt="Namira BD Restaurant"
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
            src="/images/restaurant/fine-dining.jpg"
            alt="Fine Dining Experience"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              Authentic & Exquisite Flavors
            </h2>
            <p className="text-gray-600 mt-2">
              Our chefs craft each dish with premium ingredients, ensuring a
              delightful experience. From Bangladeshi classics to international
              delicacies, we serve it all.
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
            src="/images/restaurant/luxury-interior.jpg"
            alt="Luxury Interior"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              Luxurious Ambiance & Premium Seating
            </h2>
            <p className="text-gray-600 mt-2">
              Enjoy a relaxing yet elegant atmosphere, ideal for family
              gatherings, romantic dinners, and corporate meetings.
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
            src="/images/restaurant/chef-special.jpg"
            alt="Signature Dishes"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              Award-Winning Chefs & Signature Dishes
            </h2>
            <p className="text-gray-600 mt-2">
              Our chefs create world-class dishes, from succulent steaks to
              traditional deshi biryani, ensuring an unforgettable taste.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Specialties */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-primary">
          Our Specialties
        </h2>
        <p className="text-gray-600 mt-2">
          Explore our diverse menu curated to perfection.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Bangladeshi & Mughlai Cuisine", img: "/images/restaurant/bangladeshi.jpg" },
            { title: "Continental & International", img: "/images/restaurant/continental.jpg" },
            { title: "Exclusive Seafood & Grill", img: "/images/restaurant/seafood.jpg" },
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
          Visit Us Today!
        </h2>
        <p className="text-gray-600 mt-2">
          Come and experience Dhaka&apos;s <b>best fine dining restaurant</b>, where we
          turn meals into memorable experiences.
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
            Book Your Table Now
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

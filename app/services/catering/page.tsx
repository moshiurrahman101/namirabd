"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CateringPage() {
  return (
    <div className="container mx-auto py-12 px-6">
      {/* Header Section */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Premium Catering Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the finest culinary delights in Dhaka, trusted by **Bangladesh Military, Sena Kunjo, and RAOWA**. 
          We bring excellence to every event, offering world-class catering tailored to your needs.
        </p>
      </motion.div>

      {/* Image */}
      <motion.div 
        className="mt-8 mb-10 rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image 
          src="/images/catering.jpg" 
          alt="Luxury Catering" 
          width={1200} 
          height={600} 
          className="w-full object-cover"
        />
      </motion.div>

      {/* Section: Why Choose Us */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Why Choose Namira BD Catering?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Elite Experience</h3>
            <p className="text-gray-600 mt-2">
              We have served Bangladesh Military, organized prestigious events at Sena Kunjo & RAOWA, 
              and catered to VIP gatherings. Our experience in handling high-class events makes us the <b>#1 choice</b> in Dhaka.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Exquisite Menu</h3>
            <p className="text-gray-600 mt-2">
              Our diverse menu features authentic Bangladeshi, Continental, Thai, and Chinese cuisines, 
              crafted by award-winning chefs using only the freshest ingredients.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Luxury Presentation</h3>
            <p className="text-gray-600 mt-2">
              We believe in impeccable food presentation. From elegant platters to luxurious setups, 
              we bring a touch of sophistication to every event.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Custom Event Catering</h3>
            <p className="text-gray-600 mt-2">
              Whether it&apos;s a corporate gala, wedding, VIP dinner, or military event, 
              we tailor our services to meet your unique needs.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Signature Dishes Section */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Our Signature Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dish 1 */}
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <Image src="/images/biryani.jpg" alt="Royal Biryani" width={400} height={250} className="rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold">Royal Biryani</h3>
            <p className="text-gray-600">Aromatic, rich, and cooked with premium basmati rice & saffron.</p>
          </div>
          {/* Dish 2 */}
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <Image src="/images/grilled-meat.jpg" alt="Signature Grilled Meat" width={400} height={250} className="rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold">Signature Grilled Meat</h3>
            <p className="text-gray-600">Tender, marinated to perfection, and grilled to absolute deliciousness.</p>
          </div>
          {/* Dish 3 */}
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <Image src="/images/seafood-platter.jpg" alt="Luxury Seafood Platter" width={400} height={250} className="rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold">Luxury Seafood Platter</h3>
            <p className="text-gray-600">A gourmet selection of the freshest seafood, elegantly prepared.</p>
          </div>
        </div>
      </motion.section>

      {/* Client Testimonials */}
      <motion.section 
        className="mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">What Our Clients Say</h2>
        <div className="text-gray-600 italic max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <p>“Namira BD Catering has set the gold standard for premium catering in Dhaka. 
          Our military events at **Sena Kunjo** and **RAOWA** were an absolute success, thanks to their professionalism and attention to detail.”</p>
          <p className="font-semibold mt-3">— Event Coordinator, Bangladesh Military</p>
        </div>
      </motion.section>

      {/* Booking Button */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <Link href="/booking">
          <button className="bg-primary text-white px-6 py-3 rounded-full shadow-md text-lg font-semibold hover:bg-primary/90 transition-all">
            Book Our Catering Service
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

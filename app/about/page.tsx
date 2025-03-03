"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-6">
      {/* Header Section */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-4">About Namira BD</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At <span className="font-semibold text-primary">Namira BD</span>, we specialize in providing premium, world-class services tailored to your needs. With extensive experience in catering, event management, fine dining, and corporate solutions, we have built a reputation for excellence in Dhaka. Trusted by the Bangladesh Military, Sena Kunjo, RAOWA, and many other prestigious clients, we take pride in making every event extraordinary.
        </p>
      </motion.div>

      {/* About Us Description */}
      <motion.section 
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Namira BD offers a wide range of premium services to cater to all your needs:
        </p>

        {/* Service List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Catering Services</h3>
            <p className="text-gray-600 mt-2">
              Experience culinary excellence with <span className="font-semibold text-primary">high-class catering services</span> for weddings, corporate events, and private parties.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Fine Dining Restaurant</h3>
            <p className="text-gray-600 mt-2">
              Indulge in a <span className="font-semibold text-primary">luxurious dining experience</span> at our exclusive restaurant, serving authentic flavors with a contemporary twist.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Event Management</h3>
            <p className="text-gray-600 mt-2">
              Let us plan and execute your event flawlessly, from corporate galas to private celebrations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Party Venues</h3>
            <p className="text-gray-600 mt-2">
              We offer <span className="font-semibold text-primary">elegant and spacious venues</span> for every kind of celebration, providing a perfect setting for your event.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Premium Accessories</h3>
            <p className="text-gray-600 mt-2">
              High-quality decor and event supplies that will transform your venue into a visual masterpiece.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Corporate Solutions</h3>
            <p className="text-gray-600 mt-2">
              Tailored business and corporate event services to meet the demands of professionals and organizations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 text-center mb-4">
          If you’re looking for <span className="font-semibold text-primary">premium services</span> or want to book your next event, get in touch with us. We are here to help!
        </p>

        {/* Contact Details */}
        <div className="text-center">
          <p className="text-gray-700 font-semibold">Address:</p>
          <p className="text-gray-600 mb-4">CS Plot -70, VIP Road, Mohakhali, Dhaka, Bangladesh</p>

          <p className="text-gray-700 font-semibold">Phone:</p>
          <p className="text-gray-600 mb-4">01511-110242</p>

          <p className="text-gray-700 font-semibold">Email:</p>
          <p className="text-gray-600 mb-4">namira.bd.manager@gmail.com</p>

          <p className="text-gray-700 font-semibold">Follow Us:</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="https://www.tiktok.com/@namiracateringevent">
              TikTok
            </Link>
            <Link href="https://www.youtube.com/@Namira_event_catering">
              YouTube
            </Link>
            <Link href="https://namirabd.com">
              Website
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

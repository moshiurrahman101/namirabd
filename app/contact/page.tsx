"use client";

import { motion } from "framer-motion";
import { Facebook, Youtube, Globe } from "lucide-react"; // Import Lucid icons
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-6">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question, want to book an event, or just want to get in touch? We&apos;d love to hear from you. Fill out the form below or reach out to us via social media.
        </p>
      </motion.div>

      {/* Contact Info Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            We&apos;re here to help with your event planning, catering, and more. Feel free to reach out anytime!
          </p>

          {/* Contact Details */}
          <ul className="space-y-4">
            <li className="flex items-center text-gray-600">
              <span className="mr-4 text-primary">📍</span>
              <span>CS Plot -70, VIP Road, Mohakhali, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-4 text-primary">📞</span>
              <span>01511-110242</span>
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-4 text-primary">✉️</span>
              <span>namira.bd.manager@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h2>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest events and services through social media. Connect with us!
          </p>

          {/* Social Media Links with Icons */}
          <div className="flex justify-around gap-6 mt-8">
            <Link href="https://www.facebook.com/namiracateringevent">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 hover:bg-primary"
              >
                <Facebook size={32} className="text-gray-600 hover:text-white" />
              </motion.div>
            </Link>

            <Link href="https://www.youtube.com/@Namira_event_catering">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 hover:bg-primary"
              >
                <Youtube size={32} className="text-gray-600 hover:text-white" />
              </motion.div>
            </Link>

            <Link href="https://namirabd.com">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 hover:bg-primary"
              >
                <Globe size={32} className="text-gray-600 hover:text-white" />
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="bg-gray-100 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Write your message here"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </div>
  );
}

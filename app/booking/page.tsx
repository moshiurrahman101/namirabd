"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BookingPage() {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your booking has been received!");
    // Here, you'd send the data to your backend for processing
  };

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Book Your Service</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you&apos;re planning an event, enjoying a meal at our restaurant, or organizing a catering service, we&apos;re here to help you make it perfect. Please fill out the form below to book your service.
        </p>
      </motion.div>

      {/* Service Selection Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Choose Your Service</h2>
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setService("Restaurant")}
            className={`p-4 bg-white border-2 rounded-lg hover:bg-primary text-gray-700 ${
              service === "Restaurant" ? "border-primary" : "border-gray-300"
            }`}
          >
            Restaurant
          </button>
          <button
            onClick={() => setService("Catering")}
            className={`p-4 bg-white border-2 rounded-lg hover:bg-primary text-gray-700 ${
              service === "Catering" ? "border-primary" : "border-gray-300"
            }`}
          >
            Catering
          </button>
          <button
            onClick={() => setService("Event")}
            className={`p-4 bg-white border-2 rounded-lg hover:bg-primary text-gray-700 ${
              service === "Event" ? "border-primary" : "border-gray-300"
            }`}
          >
            Event Management
          </button>
        </div>
      </motion.div>

      {/* Booking Form Section */}
      <motion.section
        className="bg-gray-100 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Fill Out the Booking Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Your Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Event Date */}
          <div>
            <label htmlFor="eventDate" className="block text-gray-700 font-medium mb-2">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter the number of guests"
            />
          </div>

          {/* Special Requests */}
          <div>
            <label htmlFor="specialRequests" className="block text-gray-700 font-medium mb-2">
              Special Requests (Optional)
            </label>
            <textarea
              id="specialRequests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter any special requests or preferences"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
          >
            Submit Booking
          </button>
        </form>
      </motion.section>
    </div>
  );
}

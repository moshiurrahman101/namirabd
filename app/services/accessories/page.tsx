"use client";

import { motion } from "framer-motion";

export default function PremiumAccessesorisPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Namira BD Accessories
      </motion.h1>
      <motion.p
        className="text-2xl font-bold text-center mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our premium Accessories service is comming soon!
      </motion.p>
    </div>
  );
}

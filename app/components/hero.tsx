"use client";

import { motion } from "framer-motion";
import Image from 'next/image'

import SearchForm from "./searchForm";

export default function HeroSection() {
  return (
    <section className="bg-[#003b95] text-white px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-4"
        >
          Find your next stay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl opacity-90 mb-8"
        >
          Search deals on hotels, homes, and much more...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SearchForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 flex flex-col md:flex-row justify-center gap-4 text-sm text-white"
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-[#0071c2]" />
            I'm looking for an entire home or apartment
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-[#0071c2]" />
            I'm looking for flights
          </label>
        </motion.div>
      </div>
    </section>
  );
}
  

  
  


  


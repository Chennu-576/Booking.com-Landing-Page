"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function trendingdest() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Offers</h2>
        <p className="text-gray-600 mt-1">Promotions, deals, and special offers for you</p>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-4 flex-1"
          >
            <Image
              src="/lp-img2.jpeg"
              alt="Quick escape"
              width={100}
              height={80}
              className="rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">Quick escape, quality time</h3>
              <p className="text-gray-500 text-sm">Save up to 20% with a Getaway Deal</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
                Save on stays
              </button>
            </div>
          </motion.div>

          
           <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative rounded-xl shadow-lg overflow-hidden flex-1 h-48 md:h-50"
          >
            
            <Image
              src="/lp-img1.jpeg"
              alt="Vacation home"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray/40"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white">
              <span className="block text-xs mb-1 opacity-90">
                Vacation rentals
              </span>
              <h3 className="font-semibold text-lg">
                Live the dream in a vacation home
              </h3>
              <p className="text-sm opacity-90">
                Choose from houses, villas, cabins, and more
              </p>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
                Book yours
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold">Trending destinations</h2>
      <p className="text-gray-600 mt-1">
        Most popular choices for travelers from India
      </p>

      <div className="mt-6 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-xl overflow-hidden shadow-lg h-72"
          >
            <Image
              src="/new-delhi.jpg"
              alt="New Delhi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-0 left-0 p-4 text-white text-xl font-bold flex items-center">
              New Delhi
              <Image
                src="/all-images/india-logo.png"
                alt="India flag"
                width={28}
                height={18}
                className="ml-2 object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-xl overflow-hidden shadow-lg h-72"
          >
            <Image
              src="/banglore.jpg"
              alt="Bangalore"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-0 left-0 p-4 text-white text-xl font-bold flex items-center">
              Bangalore
              <Image
                src="/all-images/india-logo.png"
                alt="India flag"
                width={28}
                height={18}
                className="ml-2 object-contain"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-xl overflow-hidden shadow-lg h-56"
          >
            <Image
              src="/mumbai.jpg"
              alt="Mumbai"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-0 left-0 p-4 text-white text-xl font-bold flex items-center">
              Mumbai
              <Image
                src="/all-images/india-logo.png"
                alt="India flag"
                width={28}
                height={18}
                className="ml-2 object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-xl overflow-hidden shadow-lg h-56"
          >
            <Image
              src="/chennai.jpg"
              alt="Chennai"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-0 left-0 p-4 text-white text-xl font-bold flex items-center">
              Chennai
              <Image
                src="/all-images/india-logo.png"
                alt="India flag"
                width={28}
                height={18}
                className="ml-2 object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-xl overflow-hidden shadow-lg h-56"
          >
            <Image
              src="/varnasi.jpg"
              alt="Varanasi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-0 left-0 p-4 text-white text-xl font-bold flex items-center">
              Varanasi
              <Image
                src="/all-images/india-logo.png"
                alt="India flag"
                width={28}
                height={18}
                className="ml-2 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    </main>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "Cultural Exploration",
  "Festive Experiences",
  "Food & Culinary",
  "Beach Vacations",
  "Romantic Getaways",
  "Luxury Travels",
];


const imagesByCategory: Record<
  string,
  { name: string; img: string; description: string }[]
> = {
  "Cultural Exploration": [
    {
      name: "Jaipur",
      img: "/all images/jaipur.jpg",
      description: "0.1 m from Jaipur",
    },
    {
      name: "New Delhi",
      img: "/new delhi.jpg",
      description: "236 km from Jaipur",
    },
    {
      name: "Udaipur",
      img: "/all images/udaipur.jpg",
      description: "335 km from Jaipur",
    },
    {
      name: "Amritsar",
      img: "/all images/amritsar.jpg",
      description: "533 km from Jaipur",
    },
    {
      name: "Ahmedabad",
      img: "/all images/Ahemdabad.jpg",
      description: "542 km from Jaipur",
    },
    {
      name: "Varanasi",
      img: "/varnasi.jpg",
      description: "739 km from Jaipur",
    },
    {
      name: "Kolkatha",
      img: "/all images/kolkatta.jpg",
      description: "542 km from Jaipur",
    },
   
  ],
  "Festive Experiences": [
    {
      name: "New Delhi",
      img: "/new delhi.jpg",
      description: "236 km from Jaipur",
    },
    {
      name: "Ahmedabad",
      img: "/all images/Ahemdabad.jpg",
      description: "542 km from Jaipur",
    },
    {
      name: "Mysore",
      img: "/all images/mysore.jpg",
      description: "542 km from Jaipur",
    },
    {
      name: "Pondicherry",
      img: "/all images/pondicherry.jpg",
      description: "542 km from Jaipur",
    },
    {
      name: "Pune",
      img: "/all images/pune.jpg",
      description: "542 km from Jaipur",
    },
    {
      name: "Udaipur",
      img: "/all images/udaipur.jpg",
      description: "542 km from Jaipur",
    },
    {
      name: "Jaipur",
      img: "/all images/jaipur.jpg",
      description: "0.1 m from Jaipur",
    },
 ],
  "Food & Culinary": [
    {
      name: "Jaipur",
      img: "/all images/jaipur.jpg",
      description: "0.1 m from Jaipur",
    },
    {
      name: "New Delhi",
      img: "/new delhi.jpg",
      description: "236 km from Jaipur",
    },
    {
      name: "Kolkatha",
      img: "/all images/kolkatta.jpg",
      description: "542 km from Jaipur",
    },
    {
      name: "Lucknow",
      img: "/all images/lucknow.jpg",
      description: "542 km from Jaipur",
    },
    {
      name: "Amritsar",
      img: "/all images/amritsar.jpg",
      description: "533 km from Jaipur",
    },
    {
      name: "Ahmedabad",
      img: "/all images/Ahemdabad.jpg",
      description: "542 km from Jaipur",
    },
    {
      name: "Udaipur",
      img: "/all images/udaipur.jpg",
      description: "542 km from Jaipur",
    },
  ],
  "Beach Vacations": [
    {
      name: "Udaipur",
      img: "/all images/udaipur.jpg",
      description: "542 km from Jaipur",
    },
    {
      name: "Old goa",
      img: "/all images/old goa.jpg",
      description: "842 km from Jaipur",
    },
    {
      name: "Puri",
      img: "/all images/Puri.jpg",
      description: "1142 km from Jaipur",
    },
    {
      name: "Gokarna",
      img: "/all images/gokarna.jpg",
      description: "989 km from Jaipur",
    },
    {
      name: "mahabalipuram",
      img: "/all images/Mahabalipuram.jpg",
      description: "1239 km from Jaipur",
    },
    {
      name: "Pondicherry",
      img: "/all images/pondicherry.jpg",
      description: "1432 km from Jaipur",
    },
    {
      name: "Cochin",
      img: "/all images/cochin.jpg",
      description: "1684 km from Jaipur",
    },
  ],
  "Romantic Getaways": [
    {
      name: "Agra",
      img: "/all images/agra.jpg",
      description: "1234 km from Jaipur",
    },
    {
      name: "Amritsar",
      img: "/all images/amritsar.jpg",
      description: "1100 km from Jaipur",
    },
    {
      name: "Jailsmer",
      img: "/all images/Jailsmer.jpg",
      description: "1484 km from Jaipur",
    },
    {
      name: "Shimla",
      img: "/all images/shimla.jpg",
      description: "1684 km from Jaipur",
    },
    {
      name: "Rishikesh",
      img: "/all images/rishikesh.jpg",
      description: "1214 km from Jaipur",
    },
    {
      name: "Udaipur",
      img: "/all images/udaipur.jpg",
      description: "1352 km from Jaipur",
    },
  ],
  "Luxury Travels": [
    {
      name: "Jaipur",
      img: "/all images/jaipur.jpg",
      description: "0.1 m from Jaipur",
    },
    {
      name: "Agra",
      img: "/all images/agra.jpg",
      description: "1234 km from Jaipur",
    },
    {
      name: "New Delhi",
      img: "/new delhi.jpg",
      description: "236 km from Jaipur",
    },
    {
      name: "Mumbai",
      img: "/mumbai.jpg",
      description: "236 km from Jaipur",
    },
    {
      name: "Old goa",
      img: "/all images/old goa.jpg",
      description: "842 km from Jaipur",
    },
    {
      name: "Rishikesh",
      img: "/all images/rishikesh.jpg",
      description: "1214 km from Jaipur",
    },
    {
      name: "Lucknow",
      img: "/all images/lucknow.jpg",
      description: "542 km from Jaipur",
    },
 ],
};

const itemsPerPage = 6;

export default function TripGuide() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [pageIndexes, setPageIndexes] = useState(
    categories.reduce((acc, cat) => ((acc[cat] = 0), acc), {} as Record<string, number>)
  );

  const images = imagesByCategory[activeTab] || [];
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const currentPage = pageIndexes[activeTab] || 0;

  const handleNext = () => {
    setPageIndexes((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] + 1) % totalPages,
    }));
  };

  const handlePrev = () => {
    setPageIndexes((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] - 1 + totalPages) % totalPages,
    }));
  };

  const currentImages = images.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-2">Quick and easy trip planner</h2>
      <p className="mb-6 text-gray-600">
        Pick a vibe and explore the top destinations in India
      </p>

    
      <nav className="flex gap-6 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`rounded-full px-4 py-2 focus:outline-none ${
              activeTab === cat
                ? "border border-blue-400 text-blue-500"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="relative">
        <div className="flex space-x-6 overflow-hidden">
          {currentImages.map(({ name, img, description }) => (
            <motion.div
              key={name}
              className="flex-shrink-0 w-48 rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={img}
                alt={name}
                className="w-full h-36 object-cover rounded-lg"
              />
              <div className="mt-2 font-semibold">{name}</div>
              <div className="text-gray-500 text-sm">{description}</div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={handlePrev}
              className="absolute top-1/2 left-0 -translate-y-1/2 p-2 bg-white shadow rounded-full cursor-pointer select-none"
            >
              &#8592;
            </button>
            <button
              aria-label="Next"
              onClick={handleNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 p-2 bg-white shadow rounded-full cursor-pointer select-none"
            >
              &#8594;
            </button>
          </>
        )}
      </div>
    </div>
  );
}

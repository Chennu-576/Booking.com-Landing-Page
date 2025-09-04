"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const propertyTypesAll = [
  { name: "Hotels", img: "/all-images/hotels.jpeg" },
  { name: "Apartments", img: "/all-images/apartments.jpeg" },
  { name: "Resorts", img: "/all-images/resorts.jpeg" },
  { name: "Villas", img: "/all-images/villas.jpeg" },
  { name: "Cottages", img: "/all-images/cottages.jpeg" },
  { name: "Glamping", img: "/all-images/glamping.jpeg" },
  { name: "Cabins", img: "/all-images/cabins.jpeg" },
  { name: "Serviced Apartments", img: "/all-images/serviced-apartments.jpeg" },
];

const destinationsAll = [
  { name: "New Delhi", img: "/new-delhi.jpg", properties: 4637 },
  { name: "Bangalore", img: "/banglore.jpg", properties: 3174 },
  { name: "Mumbai", img: "/mumbai.jpg", properties: 1996 },
  { name: "Chennai", img: "/chennai.jpg", properties: 1353 },
  { name: "Varanasi", img: "/varnasi.jpg", properties: 2324 },
  { name: "Hyderabad", img: "/all-images/hyderabad.jpg", properties: 1871 },
  { name: "Pune", img: "/all-images/pune.jpg", properties: 1200 },
  { name: "Old Goa", img: "/all-images/old-goa.jpg", properties: 1100 },
  { name: "Guragron", img: "/all-images/guragron.jpg", properties: 1200 },
  { name: "Pondicherry", img: "/all-images/pondicherry.jpg", properties: 1100 },
];

const itemsPerPagePropertyType = 4;
const itemsPerPageDestinations = 6;

export default function PropertySliders() {
  const [propertyTypePage, setPropertyTypePage] = useState(0);
  const [destinationPage, setDestinationPage] = useState(0);

  const totalPropertyTypePages = Math.ceil(
    propertyTypesAll.length / itemsPerPagePropertyType
  );
  const totalDestinationPages = Math.ceil(
    destinationsAll.length / itemsPerPageDestinations
  );

  const nextPropertyTypePage = () =>
    setPropertyTypePage((prev) => (prev + 1) % totalPropertyTypePages);
  const prevPropertyTypePage = () =>
    setPropertyTypePage(
      (prev) => (prev - 1 + totalPropertyTypePages) % totalPropertyTypePages
    );

  const nextDestinationPage = () =>
    setDestinationPage((prev) => (prev + 1) % totalDestinationPages);
  const prevDestinationPage = () =>
    setDestinationPage(
      (prev) => (prev - 1 + totalDestinationPages) % totalDestinationPages
    );

  const currentPropertyTypes = propertyTypesAll.slice(
    propertyTypePage * itemsPerPagePropertyType,
    propertyTypePage * itemsPerPagePropertyType + itemsPerPagePropertyType
  );

  const currentDestinations = destinationsAll.slice(
    destinationPage * itemsPerPageDestinations,
    destinationPage * itemsPerPageDestinations + itemsPerPageDestinations
  );

  const arrowButtonClasses =
    "absolute top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md cursor-pointer select-none z-10";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-20">
      {/* Property Types */}
      <section className="relative">
        <h2 className="text-2xl font-bold mb-4">Browse by property type</h2>
        <div className="flex space-x-6 overflow-hidden">
          {currentPropertyTypes.map(({ name, img }) => (
            <motion.div
              key={name}
              className="flex-shrink-0 w-72 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={img}
                alt={name}
                width={288}
                height={192}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-3 font-semibold">{name}</div>
            </motion.div>
          ))}
        </div>

        <button
          aria-label="Previous property types"
          onClick={prevPropertyTypePage}
          className={`${arrowButtonClasses} left-0`}
        >
          &#8592;
        </button>
        <button
          aria-label="Next property types"
          onClick={nextPropertyTypePage}
          className={`${arrowButtonClasses} right-0`}
        >
          &#8594;
        </button>
      </section>

      {/* Destinations */}
      <section className="relative">
        <h2 className="text-2xl font-bold mb-2">Explore India</h2>
        <p className="text-gray-600 mb-4">
          These popular destinations have a lot to offer
        </p>

        <div className="flex space-x-6 overflow-hidden">
          {currentDestinations.map(({ name, img, properties }) => (
            <motion.div
              key={name}
              className="flex-shrink-0 w-48 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={img}
                alt={name}
                width={192}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <div className="font-semibold">{name}</div>
                <div className="text-gray-500 text-sm">
                  {properties.toLocaleString()} properties
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          aria-label="Previous destinations"
          onClick={prevDestinationPage}
          className={`${arrowButtonClasses} left-0`}
        >
          &#8592;
        </button>
        <button
          aria-label="Next destinations"
          onClick={nextDestinationPage}
          className={`${arrowButtonClasses} right-0`}
        >
          &#8594;
        </button>
      </section>
    </div>
  );
}

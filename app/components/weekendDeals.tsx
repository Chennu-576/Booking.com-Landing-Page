"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const hotelDeals = [
  {
    img: "/all-images/vijayawada.jpg",
    name: "Collection O Anu Hospital Elur Road",
    location: "Vijayawāda, India",
    tag: "Genius",
    rating: { value: 8.3, label: "Very Good", reviews: 24 },
    oldPrice: "₹ 4,690",
    newPrice: "₹ 2,490",
    nights: "2 nights",
    isDeal: false,
  },
  {
    img: "/all-images/vja.jpg",
    name: "Hotel Aerotel,Hyderabad",
    location: "Shamshabad, India",
    tag: "Genius",
    rating: { value: 7.7, label: "Good", reviews: 99 },
    oldPrice: "₹ 6,963",
    newPrice: "₹ 4,874",
    nights: "2 nights",
    isDeal: false,
  },
  {
    img: "/all-images/hampi-cafe.jpg",
    name: "The Hampi Cafe",
    location: "Hampi, India",
    tag: null,
    rating: { value: 9.5, label: "Exceptional", reviews: 6 },
    oldPrice: "₹ 12,000",
    newPrice: "₹ 10,800",
    nights: "2 nights",
    isDeal: false,
  },
  {
    img: "/all-images/hotel-grand.jpg",
    name: "Hotel Sri Ram Grand",
    location: "Vijayawāda, India",
    tag: "Genius",
    rating: { value: 7.5, label: "Good", reviews: 255 },
    oldPrice: "₹ 8,090",
    newPrice: "₹ 4,454",
    nights: "2 nights",
    isDeal: true,
    dealLabel: "Getaway Deal",
  },
  {
    img: "/all-images/hyderabadi.jpg",
    name: "Hotel Aerotel,Hyderabad",
    location: "Shamshabad, India",
    tag: "Genius",
    rating: { value: 8.7, label: "Very Good", reviews: 99 },
    oldPrice: "₹ 8,963",
    newPrice: "₹ 5,874",
    nights: "2 nights",
    isDeal: false,
  },
  {
    img: "/all-images/hampi-stay.jpg",
    name: "The Hampi Cafe",
    location: "Hampi, India",
    tag: null,
    rating: { value: 9.5, label: "Exceptional", reviews: 82 },
    oldPrice: "₹ 12,000",
    newPrice: "₹ 10,800",
    nights: "2 nights",
    isDeal: false,
  },
];

const homesGuestsLove = [
  {
    img: "/all-images/poland.webp",
    name: "Aparthotel Stare Miasto",
    location: "Old Town, Poland, Krakow",
    rating: { value: 8.8, label: "Excellent", reviews: 3281 },
    newPrice: " starting from ₹ 12,799",
  },
  {
    img: "/all-images/hungary.webp",
    name: "7Seasons Apartments Budapest",
    location: "06. Terézváros, Hungary, Budapest",
    rating: { value: 8.7, label: "Excellent", reviews: 10927 },
    newPrice: " starting from ₹ 14,943",
  },
  {
    img: "/all-images/croatia.webp",
    name: "Villa Domina",
    location: "Split City Center, Croatia, Split",
    rating: { value: 9.3, label: "Wonderful", reviews: 1386 },
    newPrice: " starting from ₹ 11,619",
  },
  {
    img: "/all-images/prague.webp",
    name: "3 Epoques Apartments by Adrez",
    location: "Prague 1, Czech Republic, Prague",
    rating: { value: 8.6, label: "Excellent", reviews: 714 },
    newPrice: " starting from ₹ 11,012",
  },
  {
    img: "/all-images/madrid.webp",
    name: "Oriente Palace Apartments",
    location: "Madrid City Center, Spain, Madrid",
    rating: { value: 8.9, label: "Excellent", reviews: 3714 },
    newPrice: " starting from ₹ 14,012",
  },
  {
    img: "/all-images/brazil.webp",
    name: "Sugar Loft Apartments",
    location: "Santa Teresa, Brazil, Rio de Janeiro",
    rating: { value: 7.9, label: "Good", reviews: 700 },
    newPrice: " starting from ₹ 3,019",
  },
];

const itemsPerPage = 4;

export default function WeekendDeals() {
  const [dealsPageIdx, setDealsPageIdx] = useState(0);
  const [homesPageIdx, setHomesPageIdx] = useState(0);

  const dealsTotalPages = Math.ceil(hotelDeals.length / itemsPerPage);
  const homesTotalPages = Math.ceil(homesGuestsLove.length / itemsPerPage);

  const showDealsPrev = () =>
    setDealsPageIdx((p) => (p - 1 + dealsTotalPages) % dealsTotalPages);
  const showDealsNext = () =>
    setDealsPageIdx((p) => (p + 1) % dealsTotalPages);

  const showHomesPrev = () =>
    setHomesPageIdx((p) => (p - 1 + homesTotalPages) % homesTotalPages);
  const showHomesNext = () =>
    setHomesPageIdx((p) => (p + 1) % homesTotalPages);

  const dealsToShow = hotelDeals.slice(
    dealsPageIdx * itemsPerPage,
    dealsPageIdx * itemsPerPage + itemsPerPage
  );
  const homesToShow = homesGuestsLove.slice(
    homesPageIdx * itemsPerPage,
    homesPageIdx * itemsPerPage + itemsPerPage
  );

  const arrowBtnClasses =
    "absolute top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow cursor-pointer z-20 select-none";

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-20">
      
      <section>
        <h2 className="text-2xl font-bold mb-1">Deals for the weekend</h2>
        <div className="mb-5 text-gray-600">
          Save on stays for September 5 - September 7
        </div>
        <div className="relative">
          {dealsTotalPages > 1 && (
            <button
              onClick={showDealsPrev}
              aria-label="Previous deals"
              className={`${arrowBtnClasses} left-2`}
            >
              &#8592;
            </button>
          )}

          <div className="flex space-x-6 overflow-hidden px-10">
            {dealsToShow.map((hotel) => (
              <motion.div
                key={hotel.name}
                className="bg-white rounded-xl shadow flex-shrink-0 w-72 overflow-hidden relative"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    width={288}
                    height={176}
                    className="w-full h-44 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 13.5c1.213-1.205 1.951-2.172 2-3.49.079-2.064-1.726-3.701-3.75-3.684-1.012.008-2.017.463-2.75 1.211a3.53 3.53 0 00-2.75-1.211c-2.024-.017-3.829 1.62-3.75 3.684.05 1.318.787 2.285 2 3.49l5.5 5.5 5.5-5.5z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  {hotel.tag && (
                    <span className="bg-blue-600 text-white text-xs rounded px-2 py-1 mb-1 inline-block">
                      {hotel.tag}
                    </span>
                  )}
                  <div className="font-semibold mt-1 leading-tight">
                    {hotel.name}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {hotel.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs mb-1">
                    <span
                      className={`${
                        hotel.rating.value >= 8
                          ? "bg-blue-700"
                          : "bg-blue-500"
                      } text-white rounded px-2`}
                    >
                      {hotel.rating.value}
                    </span>
                    <span className="text-gray-700">
                      {hotel.rating.label}
                    </span>
                    <span className="text-gray-500">
                      {hotel.rating.reviews} reviews
                    </span>
                  </div>
                  {hotel.isDeal && (
                    <span className="bg-green-600 text-white text-xs rounded px-2 py-1 mb-1 inline-block">
                      {hotel.dealLabel}
                    </span>
                  )}
                  <div className="mt-2 flex items-end">
                    <span className="text-sm mr-2">{hotel.nights}</span>
                    <span className="text-gray-400 text-base line-through mr-2">
                      {hotel.oldPrice}
                    </span>
                    <span className="text-xl font-semibold text-gray-900">
                      {hotel.newPrice}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {dealsTotalPages > 1 && (
            <button
              onClick={showDealsNext}
              aria-label="Next deals"
              className={`${arrowBtnClasses} right-2`}
            >
              &#8594;
            </button>
          )}
        </div>
      </section>

    
      <section>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold">Homes guests love</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Discover homes
          </a>
        </div>
        <div className="relative">
          {homesTotalPages > 1 && (
            <button
              onClick={showHomesPrev}
              aria-label="Previous homes"
              className={`${arrowBtnClasses} left-2`}
            >
              &#8592;
            </button>
          )}

          <div className="flex space-x-6 overflow-hidden px-10">
            {homesToShow.map((home) => (
              <motion.div
                key={home.name}
                className="bg-white rounded-xl shadow flex-shrink-0 w-72 overflow-hidden relative"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <Image
                    src={home.img}
                    alt={home.name}
                    width={288}
                    height={176}
                    className="w-full h-44 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 13.5c1.213-1.205 1.951-2.172 2-3.49.079-2.064-1.726-3.701-3.75-3.684-1.012.008-2.017.463-2.75 1.211a3.53 3.53 0 00-2.75-1.211c-2.024-.017-3.829 1.62-3.75 3.684.05 1.318.787 2.285 2 3.49l5.5 5.5 5.5-5.5z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <div className="font-semibold mt-1 leading-tight">
                    {home.name}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {home.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs mb-1">
                    <span
                      className={`${
                        home.rating.value >= 8
                          ? "bg-blue-700"
                          : "bg-blue-500"
                      } text-white rounded px-2`}
                    >
                      {home.rating.value}
                    </span>
                    <span className="text-gray-700">{home.rating.label}</span>
                    <span className="text-gray-500">
                      {home.rating.reviews} reviews
                    </span>
                  </div>
                  <div className="mt-2 flex items-end">
                    <span className="text-xl font-semibold text-gray-900">
                      {home.newPrice}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {homesTotalPages > 1 && (
            <button
              onClick={showHomesNext}
              aria-label="Next homes"
              className={`${arrowBtnClasses} right-2`}
            >
              &#8594;
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

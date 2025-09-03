
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const tabs = [
  { key: "domestic", label: "Domestic cities", items: ["Goa", "Pondicherry", "Wayanad", "Gurugram Region"] },
  { key: "international", label: "International cities", items: ["Delhi", "Chandigarh Region", "Phuket Province", "Dubai Emirate"] },
  { key: "regions", label: "Regions", items: ["North Goa", "Bali", "Kabini River", "Kerala"] },
  { key: "countries", label: "Countries", items: ["South Goa", "Jim Corbett National Park", "Ranthambore National Park", "Pattaya"] },
  { key: "places", label: "Places to stay", items: ["Coorg", "Delhi NCR", "Jammu & Kashmir", "Kaziranga National Park"] },
];

const quickLinks = [
  "Countries",
  "Regions",
  "Cities",
  "Districts",
  "Airports",
  "Hotels",
  "Places of interest",
  "Vacation Homes",
  "Apartments",
  "Resorts",
  "Villas",
  "Hostels",
  "B&Bs",
  "Guest Houses",
  "Unique places to stay",
  "All destinations",
  "All flight destinations",
  "All car rental locations",
  "All vacation destinations",
  "Guides",
  "Discover",
  "Reviews",
  "Discover monthly stays",
];

const footerColumns = {
  Support: [
    "Coronavirus (COVID-19) FAQs",
    "Manage your trips",
    "Contact Customer Service",
    "Safety Resource Center",
  ],
  Discover: [
    "Genius loyalty program",
    "Seasonal and holiday deals",
    "Travel articles",
    "Booking.com for Business",
    "Traveller Review Awards",
    "Car rental",
    "Flight finder",
    "Restaurant reservations",
    "Booking.com for Travel Agents",
  ],
  "Terms and settings": [
    "Privacy & cookies",
    "Terms & conditions",
    "Accessibility Statement",
    "Grievance officer",
    "Modern Slavery Statement",
    "Human Rights Statement",
  ],
  Partners: [
    "Extranet login",
    "Partner help",
    "List your property",
    "Become an affiliate",
  ],
  About: [
    "About Booking.com",
    "How We Work",
    "Sustainability",
    "Press center",
    "Careers",
    "Investor relations",
    "Corporate contact",
  ],
};

export default function Footer() {
  const [activeTab, setActiveTab] = useState("regions");

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
    
        <h2 className="text-xl font-semibold mb-4">
          Popular with travelers from India
        </h2>

        <div className="flex flex-wrap gap-4 mb-6">
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              variant="outline"
              className={`rounded-full ${
                activeTab === tab.key
                  ? "border-blue-600 text-blue-600"
                  : "border-neutral-300 text-neutral-700"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {tabs
            .find((t) => t.key === activeTab)
            ?.items.map((item) => (
              <span
                key={item}
                className="text-neutral-700 hover:underline cursor-pointer"
              >
                {item}
              </span>
            ))}
        </div>

        <div className="flex flex-wrap gap-2 text-sm text-neutral-600 mb-0">
          {quickLinks.map((link, i) => (
            <span key={i} className="hover:underline cursor-pointer">
              {link}
              {i !== quickLinks.length - 1 && " ·"}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full bg-gray-100">
        <div className="mx-auto max-w-6xl p-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {Object.entries(footerColumns).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="font-semibold text-neutral-900 mb-3">{heading}</h4>
                <ul className="space-y-2 text-sm text-neutral-600">
                  {links.map((link) => (
                    <li key={link} className="hover:underline cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-6 flex items-center gap-0">
           <Image
            src="/all images/india logo.png"
            alt="India Flag"
            width={24}
            height={24}
            className="rounded-sm"
          />
          <span className="font-medium">INR</span>
        </div> 


      <div className="mx-auto max-w-6xl px-4 pt-6 pb-2 border-b border-neutral-300">
       

        <div className="border-t border-neutral-300 mt-6 pt-6 text-center text-xs text-neutral-600">
          <p>
            Booking.com is part of Booking Holdings Inc., the world leader in
            online travel and related services.
          </p>
          <p className="mt-2">
            Copyright © 1996–2025 Booking.com™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}



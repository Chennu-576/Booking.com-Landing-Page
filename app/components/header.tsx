"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const items = [
    "Stays",
    "Flights",
    "Flight + Hotel",
    "Car rental",
    "Attractions",
    "Airport taxis",
  ];

  return (
    <header className="w-full bg-[#003b95] text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        
        <Link href="/" className="text-2xl font-black tracking-tight">
          Booking<span className="text-[#febb02]">.com</span>
        </Link>

        
        <div className="flex items-center gap-3">
          <span className="hidden text-sm opacity-90 md:inline">INR</span>
          <span className="hidden text-xl md:inline" aria-label="India flag">
            🇮🇳
          </span>
          <button className="rounded-lg border border-white/30 px-3 py-2 text-sm font-semibold hover:bg-white/10">
            List your property
          </button>
          <Button className="rounded-xl bg-white text-[#003b95] hover:bg-white/90">
            Register
          </Button>
          <Button className="rounded-xl bg-white text-[#003b95] hover:bg-white/90">
            Sign in
          </Button>
        </div>
      </div>

      
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 pb-3">
        {items.map((item) => (
          <button
            key={item}
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10"
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}

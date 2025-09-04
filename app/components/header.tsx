// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function Header() {
//   const items = [
//     "Stays",
//     "Flights",
//     "Flight + Hotel",
//     "Car rental",
//     "Attractions",
//     "Airport taxis",
//   ];

//   return (
//     <header className="w-full bg-[#003b95] text-white">
//       <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        
//         <Link href="/" className="text-2xl font-black tracking-tight">
//           Booking<span className="text-[#febb02]">.com</span>
//         </Link>

        
//         <div className="flex items-center gap-3">
//           <span className="hidden text-sm opacity-90 md:inline">INR</span>
//           <span className="hidden text-xl md:inline" aria-label="India flag">
//             🇮🇳
//           </span>
//           <button className="rounded-lg border border-white/30 px-3 py-2 text-sm font-semibold hover:bg-white/10">
//             List your property
//           </button>
//           <Button className="rounded-xl bg-white text-[#003b95] hover:bg-white/90">
//             Register
//           </Button>
//           <Button className="rounded-xl bg-white text-[#003b95] hover:bg-white/90">
//             Sign in
//           </Button>
//         </div>
//       </div>

      
//       <nav className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 pb-3">
//         {items.map((item) => (
//           <button
//             key={item}
//             className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10"
//           >
//             {item}
//           </button>
//         ))}
//       </nav>
//     </header>
//   );
// }

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BedDouble,
  Plane,
  Car,
  Building2,
  Sparkles,
  Bus,
  HelpCircle,
} from "lucide-react";

export default function Header() {
  const active = "Stays";

  const items: { label: string; icon: React.ReactNode }[] = [
    { label: "Stays", icon: <BedDouble className="h-4 w-4" /> },
    { label: "Flights", icon: <Plane className="h-4 w-4" /> },
    {
      label: "Flight + Hotel",
      icon: (
        <span className="inline-flex items-center gap-1">
          <Plane className="h-4 w-4" />
          <Building2 className="h-3.5 w-3.5" />
        </span>
      ),
    },
    { label: "Car rental", icon: <Car className="h-4 w-4" /> },
    { label: "Attractions", icon: <Sparkles className="h-4 w-4" /> },
    { label: "Airport taxis", icon: <Bus className="h-4 w-4" /> },
  ];

  return (
    <header className="w-full bg-[#003b95] text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-black tracking-tight">
          Booking<span className="text-[#febb02]">.com</span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2">
            <span className="text-sm">INR</span>
            <Image
              src="/all-images/india-logo.png" 
              alt="India"
              width={18}
              height={18}
              className="rounded-[2px]"
            />
            <HelpCircle className="h-5 w-5 opacity-90" aria-hidden />
          </div>

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

     
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-2 px-4 pb-4">
        {items.map(({ label, icon }) => {
          const isActive = label === active;
          return (
            <button
              key={label}
              className={[
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
                "border border-white/30 backdrop-blur",
                isActive ? "bg-white/15" : "hover:bg-white/10",
              ].join(" ")}
            >
              <span className="text-white">{icon}</span>
              <span>{label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}


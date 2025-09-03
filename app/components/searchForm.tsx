
"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar as ShadCalendar } from "@/components/ui/calendar";
import {
  Calendar as CalendarIcon,
  MapPin,
  UserRound,
  Minus,
  Plus,
  Search as SearchIcon,
} from "lucide-react";

export default function SearchForm() {

  const [destination, setDestination] = useState("");
  const [openDates, setOpenDates] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [openGuests, setOpenGuests] = useState(false);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
    pets: 0,
  });

  const dateLabel = useMemo(() => {
    if (dateRange?.from && dateRange?.to) {
      return `${format(dateRange.from, "MMM d")} — ${format(dateRange.to, "MMM d")}`;
    }
    return "Check-in — Check-out";
  }, [dateRange]);

  const bump = (key: keyof typeof guests, delta: number) => {
    setGuests((g) => {
      const next = Math.max(
        key === "adults" || key === "rooms" ? 1 : 0, // adults/rooms min 1, others min 0
        g[key] + delta
      );
      return { ...g, [key]: next };
    });
  };

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="grid grid-cols-[1.6fr_1.2fr_1.2fr_auto] items-stretch gap-0 rounded-xl border-[3px] border-yellow-400 bg-white p-2 shadow-lg">
        <div className="flex h-12 items-center gap-3 rounded-lg px-3">
          <MapPin className="h-5 w-5 text-gray-500" />
          <Input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where are you going?"
            className="h-10 border-none p-0 shadow-none focus-visible:ring-0 text-gray-800 placeholder:text-gray-500"
          />
        </div>
        <Popover open={openDates} onOpenChange={setOpenDates}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex h-12 w-full items-center gap-3 rounded-lg px-3 text-left hover:bg-gray-50"
            >
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <span className={dateRange?.from && dateRange?.to ? "text-gray-900" : "text-gray-500"}>
                {dateLabel}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-auto rounded-xl border bg-white p-2 text-black shadow-xl"
          >
            <ShadCalendar
              mode="range"
              numberOfMonths={2}                 
              selected={dateRange}
              onSelect={(range) => {
                setDateRange(range);
                
                if (range?.from && range?.to) setOpenDates(false);
              }}
              defaultMonth={dateRange?.from}
              className="bg-white text-black"
            />
          </PopoverContent>
        </Popover>
        <Popover open={openGuests} onOpenChange={setOpenGuests}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex h-12 w-full items-center gap-3 rounded-lg px-3 text-left hover:bg-gray-50"
            >
              <UserRound className="h-5 w-5 text-gray-500" />
              <span className="text-gray-500">Guests</span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-72 rounded-xl border bg-white p-4 text-black shadow-xl"
          >
            <GuestRow
              label="Adults"
              value={guests.adults}
              min={1}
              onDec={() => bump("adults", -1)}
              onInc={() => bump("adults", 1)}
            />
            <GuestRow
              label="Children"
              value={guests.children}
              min={0}
              onDec={() => bump("children", -1)}
              onInc={() => bump("children", 1)}
            />
            <GuestRow
              label="Rooms"
              value={guests.rooms}
              min={1}
              onDec={() => bump("rooms", -1)}
              onInc={() => bump("rooms", 1)}
            />
            <GuestRow
              label="Pets"
              value={guests.pets}
              min={0}
              onDec={() => bump("pets", -1)}
              onInc={() => bump("pets", 1)}
            />
            <div className="mt-3 text-sm text-gray-600">
              {guests.adults} adults · {guests.children} children · {guests.rooms} room
              {guests.rooms > 1 ? "s" : ""} · {guests.pets} pets
            </div>
          </PopoverContent>
        </Popover>
        <div className="flex items-center justify-end">
          <Button
            className="h-12 min-w-28 rounded-lg bg-[#0071c2] px-6 font-semibold text-white hover:bg-[#005fa3]"
            type="button"
          >
            <SearchIcon className="mr-2 h-5 w-5" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

function GuestRow({
  label,
  value,
  min,
  onDec,
  onInc,
}: {
  label: string;
  value: number;
  min: number;
  onDec: () => void;
  onInc: () => void;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-800">{label}</span>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={onDec}
          disabled={value <= min}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-6 text-center">{value}</span>
        <Button type="button" variant="outline" size="icon" className="h-8 w-8" onClick={onInc}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

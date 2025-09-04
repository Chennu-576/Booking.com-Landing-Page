"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogIn, ChevronRight } from "lucide-react";

export default function TravelDeals() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
        <div className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={
              <Image
                src="/all-images/icons1.png"
                alt="Book now"
                width={40}
                height={40}
              />
            }
            title="Book now, pay at the property"
            desc="FREE cancellation on most rooms"
          />
          <FeatureCard
            icon={
              <Image
                src="/all-images/icons2.png"
                alt="Worldwide properties"
                width={40}
                height={40}
              />
            }
            title="2+ million properties worldwide"
            desc="Hotels, guest houses, apartments, and more…"
          />
          <FeatureCard
            icon={
              <Image
                src="/all-images/icons3.png"
                alt="Support"
                width={40}
                height={40}
              />
            }
            title="Trusted 24/7 customer service"
            desc="We're always here to help"
          />
        </div>

        <div className="py-4">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Travel more, spend less
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Card className="relative overflow-hidden border-neutral-200">
            <CardContent className="flex flex-col items-start gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  Sign in, save money
                </h3>
                <p className="mt-1 max-w-md text-sm text-neutral-600">
                  Save 10% or more at participating properties – just look for
                  the blue Genius label
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    <LogIn className="mr-2 h-4 w-4" /> Sign in
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-blue-700 hover:text-blue-800"
                  >
                    Create a free account
                  </Button>
                </div>
              </div>

              <div className="pointer-events-none select-none w-28">
                <Image
                  src="/all-images/offer.png"
                  alt="Genius"
                  width={112}
                  height={84}
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="pb-10"
        >
          <Card className="overflow-hidden border-neutral-200">
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              <div className="md:col-span-8 flex h-full items-center justify-center bg-[#006ce4] p-8">
                <div className="relative z-10 max-w-md text-white">
                  <h3 className="text-3xl font-extrabold leading-snug">
                    Want to feel at home on your next adventure?
                  </h3>
                  <div className="mt-6">
                    <Button
                      size="lg"
                      className="bg-white text-[#0468FF] hover:bg-neutral-100"
                    >
                      Discover vacation rentals
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 relative p-8 flex items-center justify-center">
                <Image
                  src="/all-images/relaxing.png"
                  alt="Chair"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="h-full border-neutral-200">
        <CardHeader className="pb-1">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-blue-50 p-3 text-[#0468FF]">
              {icon}
            </div>
            <div>
              <CardTitle className="text-base font-semibold text-neutral-900">
                {title}
              </CardTitle>
              <p className="text-sm text-neutral-600 mt-1">{desc}</p>
            </div>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

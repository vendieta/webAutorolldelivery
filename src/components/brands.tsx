"use client";

import { motion } from "framer-motion";

const brands = [
  "TOYO TIRES",
  "WESTLAKE",
  "BOTO",
  "COMPASAL",
  "KAYTOON",
  "MICHELIN",
  "PIRELLI",
];

export function Brands() {
  return (
    <section id="marcas" className="py-20 bg-muted/30 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-sm font-black text-primary tracking-[0.2em] mb-4">
          NUESTRAS MARCAS ALIADAS
        </h2>
      </div>

      <div className="flex space-x-8 sm:space-x-12 overflow-hidden group">
        <div className="flex space-x-8 sm:space-x-12 animate-marquee whitespace-nowrap group-hover:pause">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="text-2xl sm:text-4xl md:text-5xl font-black text-muted-foreground/30 hover:text-primary transition-all cursor-default select-none tracking-tighter uppercase italic px-4"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

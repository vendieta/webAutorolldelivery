"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Truck, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Autoroll Delivery Hero"
          fill
          className="object-cover opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 py-1.5 px-4 bg-primary text-primary-foreground border-none shadow-lg shadow-primary/20 animate-pulse uppercase font-black tracking-widest text-[10px]">
              <Truck className="w-3 h-3 mr-2 inline-block" />
              ENVÍO GRATIS A TODO GUAYAQUIL
            </Badge>

            <h1 className="text-6xl md:text-9xl font-black mb-6 leading-[0.8] tracking-tighter uppercase italic text-white drop-shadow-2xl">
              Rueda <span className="text-primary italic">Seguro</span>,<br />
              Rueda con <span className="text-white">AutoRoll</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl font-medium leading-relaxed drop-shadow-md">
              Las mejores marcas de llantas con servicio de enllantaje, alineación y balanceo profesional. <span className="text-primary font-bold">A la puerta de tu casa.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://wa.me/593963297021"
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-16 px-10 text-lg font-black rounded-xl")}
              >
                ORDENAR AHORA
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#servicios"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-16 px-10 text-lg font-black rounded-xl border-white/20 bg-white/5 backdrop-blur-md")}
              >
                VER SERVICIOS
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-black text-xs text-white uppercase tracking-wider">CALIDAD</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Respaldo Total</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-black text-xs text-white uppercase tracking-wider">VELOCIDAD</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Delivery en 24h</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-black text-xs text-white uppercase tracking-wider">GUAYAQUIL</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Envío Gratis</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

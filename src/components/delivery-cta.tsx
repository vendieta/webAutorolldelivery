"use client";

import { motion } from "framer-motion";
import { Truck, MessageSquare, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DeliveryCTA() {
  return (
    <section id="delivery" className="py-32 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 -mr-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-primary/20">
          {/* Internal Details */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="w-20 h-20 bg-black/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Truck className="w-12 h-12 text-primary-foreground" />
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-7xl font-black text-primary-foreground uppercase tracking-tighter leading-none mb-6 italic">
              ¡ENTREGA <span className="text-black italic">GRATIS</span><br /> EN TODO GUAYAQUIL!
            </h2>

            <p className="text-xl md:text-2xl text-black/70 max-w-2xl mx-auto font-bold mb-12 uppercase tracking-tight">
              Llevamos tus llantas nuevas directo a tu domicilio u oficina. Ahorra tiempo, nosotros nos encargamos.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/593963297021"
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-20 px-6 sm:px-12 text-sm sm:text-2xl font-black bg-black text-white hover:bg-black/90 border-none rounded-2xl shadow-2xl uppercase")}
              >
                <MessageSquare className="mr-3 w-6 h-6" />
                PEDIR POR WHATSAPP
              </a>
              <a 
                href="#servicios"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-20 px-6 sm:px-12 text-sm sm:text-2xl font-black bg-transparent border-black/20 text-black hover:bg-black/5 rounded-2xl uppercase")}
              >
                VER MÁS
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

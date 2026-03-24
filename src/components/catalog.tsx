"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const products = [
  {
    brand: "TOYO TIRES",
    model: "Gama Japonesa",
    tagline: "Desempeño Premium",
    features: ["Máximo Agarre", "Estabilidad en Curvas", "Tecnología Japonesa"],
    description: "La elección ideal para quienes buscan el más alto rendimiento y seguridad a altas velocidades.",
    accent: "text-blue-400",
    bg: "bg-blue-500/5",
  },
  {
    brand: "WESTLAKE",
    model: "ZuperEco",
    tagline: "Seguridad y Eficiencia",
    features: ["Ahorro de Combustible", "Larga Durabilidad", "Frenado en Mojado"],
    description: "Diseñada para vehículos particulares que buscan un equilibrio perfecto entre precio y seguridad.",
    accent: "text-green-400",
    bg: "bg-green-500/5",
  },
  {
    brand: "KAYTOON",
    model: "H550 Comfort",
    tagline: "Economía y Confort",
    features: ["Rodado Silencioso", "Precio Accesible", "Versatilidad Ciudad/Vía"],
    description: "Nuestra opción más recomendada para el uso diario en Guayaquil por su excelente relación costo-beneficio.",
    accent: "text-primary",
    bg: "bg-primary/5",
  },
  {
    brand: "COMPASAL",
    model: "Tracción Plus",
    tagline: "Smart Choice",
    features: ["Tracción Reforzada", "Desgaste Uniforme", "Resistencia"],
    description: "Una llanta robusta diseñada para enfrentar los desafíos de las vías locales con total confianza.",
    accent: "text-orange-400",
    bg: "bg-orange-500/5",
  },
];

export function ProductCatalog() {
  return (
    <section id="catalogo" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-sm font-black text-primary tracking-[0.3em] uppercase mb-4">
              NUESTRO CATÁLOGO SELECCIONADO
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              Llantas que <span className="text-white">Transforman tu Viaje</span>
            </h3>
          </div>
          <Badge variant="outline" className="py-2 px-6 border-primary/30 text-primary font-black uppercase italic text-sm">
            Hasta 10% Dcto. Hoy
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.brand + product.model}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/[0.02] border-white/5 hover:border-primary/20 transition-all group h-full flex flex-col overflow-hidden relative">
                {/* Decorative Brand Watermark */}
                <div className="absolute -top-4 -right-4 opacity-[0.03] rotate-12 pointer-events-none">
                   <h4 className="text-8xl font-black italic">{product.brand.split(' ')[0]}</h4>
                </div>
                
                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <span className={cn("text-xs font-black tracking-[0.2em]", product.accent)}>{product.brand}</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-primary text-primary" />)}
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-black uppercase italic tracking-tighter text-white group-hover:text-primary transition-colors">
                    {product.model}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-8 pt-0 flex-grow">
                  <p className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-4">{product.tagline}</p>
                  <p className="text-sm text-muted-foreground font-medium mb-6 leading-relaxed uppercase tracking-tight">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    {product.features.map(f => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-black uppercase text-white/70 tracking-tighter">{f}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-8 pt-4">
                  <a 
                    href={`https://wa.me/593963297021?text=Hola,%20quisiera%20cotizar%20la%20llanta%20${product.brand}%20${product.model}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full h-12 rounded-xl font-black border-white/10 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all uppercase tracking-widest text-[10px]")}
                  >
                    COTIZAR MEDIDA
                    <ArrowUpRight className="ml-2 w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Global Catalog Link */}
        <div className="mt-16 text-center">
           <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest mb-6">¿Buscas otra medida o marca específica?</p>
           <a 
            href="https://wa.me/593963297021"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-16 px-12 text-lg font-black rounded-2xl")}
           >
             <MessageSquare className="mr-3 w-5 h-5" />
             VER CATÁLOGO COMPLETO
           </a>
        </div>
      </div>
    </section>
  );
}

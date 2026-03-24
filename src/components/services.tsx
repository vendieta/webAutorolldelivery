"use client";

import { motion } from "framer-motion";
import { CircleCheck, Settings, Fuel, Ruler } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Venta de Llantas",
    description: "Amplio catálogo de marcas premium como Toyo, Westlake, Michelin y Pirelli. Para autos, SUVs y camionetas.",
    icon: <CircleCheck className="w-10 h-10 text-primary" />,
  },
  {
    title: "Enllantaje",
    description: "Montaje profesional con maquinaria de última generación para proteger la integridad de tus aros.",
    icon: <Settings className="w-10 h-10 text-primary" />,
  },
  {
    title: "Alineación & Balanceo",
    description: "Garantizamos un rodaje suave y extendemos la vida útil de tus neumáticos con equipos láser.",
    icon: <Ruler className="w-10 h-10 text-primary" />,
  },
  {
    title: "Gas Nitrógeno",
    description: "Mantén la presión estable por más tiempo y mejora el rendimiento de combustible de tu vehículo.",
    icon: <Fuel className="w-10 h-10 text-primary" />,
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-sm font-black text-primary tracking-[0.3em] uppercase mb-4">
            SOLUCIONES AUTOMOTRICES
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
            Servicios de <span className="text-white">Alto Rendimiento</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-all group overflow-hidden h-full">
                <CardHeader className="p-8">
                  <div className="mb-6 p-4 bg-primary/5 w-fit rounded-2xl border border-primary/10 group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-black uppercase italic mb-4 tracking-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm uppercase font-bold tracking-wider leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

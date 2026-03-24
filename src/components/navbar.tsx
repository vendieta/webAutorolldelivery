"use client";

import { MessageSquare, Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Marcas", href: "#marcas" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-black text-xl italic drop-shadow-sm">A</span>
          </div>
          <span className="font-heading font-black text-2xl uppercase tracking-tighter">
            AutoRoll<span className="text-primary">Delivery</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-muted-foreground hover:text-primary transition-colors uppercase text-xs tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/593963297021" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-full px-6 font-bold shadow-lg shadow-primary/20")}
          >
            <MessageSquare className="mr-2 w-4 h-4" />
            COTIZAR YA
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-2 hover:bg-white/5 rounded-md transition-colors">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 border-l border-white/10">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-heading font-black uppercase tracking-tighter"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-auto pb-8">
                  <a 
                    href="https://wa.me/593963297021"
                    className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full py-6 text-lg font-bold")}
                  >
                    <MessageSquare className="mr-2 w-5 h-5" />
                    WHATSAPP
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

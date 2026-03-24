import { Globe, Smartphone, MapPin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/autorolldelivery/", icon: <Globe className="w-6 h-6" /> },
    { name: "WhatsApp", href: "https://wa.me/593963297021", icon: <Smartphone className="w-6 h-6" /> },
  ];

  return (
    <footer className="bg-black py-20 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-black text-lg italic">A</span>
              </div>
              <span className="font-heading font-black text-xl uppercase tracking-tighter">
                AutoRoll<span className="text-primary">Delivery</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm uppercase font-bold tracking-widest leading-relaxed">
              Los mejores precios y las marcas líderes en el mercado de llantas en Guayaquil.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-black uppercase text-sm tracking-widest">ENLACES RÁPIDOS</h3>
            <div className="flex flex-col gap-4">
              <a href="#inicio" className="text-muted-foreground hover:text-primary text-sm font-bold uppercase transition-colors">INICIO</a>
              <a href="#servicios" className="text-muted-foreground hover:text-primary text-sm font-bold uppercase transition-colors">SERVICIOS</a>
              <a href="#marcas" className="text-muted-foreground hover:text-primary text-sm font-bold uppercase transition-colors">MARCAS</a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-black uppercase text-sm tracking-widest">CONTACTO GUAYAQUIL</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Smartphone className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold tracking-widest">+593 96-329-7021</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold tracking-widest uppercase">GUAYAQUIL, ECUADOR</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold tracking-widest uppercase italic">ventas@autoroll.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-black uppercase text-sm tracking-widest">SÍGUENOS</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-white/5 mb-8" />

        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} AUTOROLL DELIVERY. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className="text-muted-foreground/30 text-[10px] font-bold uppercase tracking-widest">
            Built with Claude Web Builder by Tododeia
          </p>
        </div>
      </div>
    </footer>
  );
}

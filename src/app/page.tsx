import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Brands } from "@/components/brands";
import { ProductCatalog } from "@/components/catalog";
import { Services } from "@/components/services";
import { DeliveryCTA } from "@/components/delivery-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <Brands />
      <ProductCatalog />
      <Services />
      <DeliveryCTA />
      <Footer />
    </main>
  );
}

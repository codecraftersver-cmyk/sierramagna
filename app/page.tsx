import { Brands } from "@/components/brands";
import { CatalogHub } from "@/components/catalog-hub";
import { FiestasPatriasBanner } from "@/components/fiestas-patrias-banner";
import { Hero } from "@/components/hero";
import { HowToOrder } from "@/components/how-to-order";
import { SiteShell } from "@/components/site-shell";
import { StorySection } from "@/components/story-section";

export default function Home() {
  return (
    <SiteShell>
      {/* Banner temporal: quitar despues del 16 de septiembre */}
      <FiestasPatriasBanner />
      <Hero />
      {/* Categorías: oculto mientras solo vendemos camisas.
          Reactivar: import { Categories } from "@/components/categories";
          y <Categories /> aquí. */}
      <Brands />
      <CatalogHub />
      <HowToOrder />
      <StorySection />
    </SiteShell>
  );
}

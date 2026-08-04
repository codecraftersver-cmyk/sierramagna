import { Brands } from "@/components/brands";
import { CatalogHub } from "@/components/catalog-hub";
import { Hero } from "@/components/hero";
import { SiteShell } from "@/components/site-shell";
import { StorySection } from "@/components/story-section";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      {/* Categorías: oculto mientras solo vendemos camisas.
          Reactivar: import { Categories } from "@/components/categories";
          y <Categories /> aquí. */}
      <Brands />
      <CatalogHub />
      <StorySection />
    </SiteShell>
  );
}

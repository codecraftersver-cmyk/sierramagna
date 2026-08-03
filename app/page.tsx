import { Brands } from "@/components/brands";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { RevealObserver } from "@/components/reveal-observer";
import { SizeFinder } from "@/components/size-finder";
import { StorySection } from "@/components/story-section";
import { TopBar } from "@/components/top-bar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <SizeFinder />
        {/* Categorías: oculto mientras solo vendemos camisas.
            Reactivar: import { Categories } from "@/components/categories";
            y <Categories /> aquí. */}
        <Brands />
        <ProductGrid />
        <StorySection />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}

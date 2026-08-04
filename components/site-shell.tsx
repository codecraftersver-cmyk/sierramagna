"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";
import { CartProvider } from "@/components/cart-provider";
import { RevealObserver } from "@/components/reveal-observer";
import { TopBar } from "@/components/top-bar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
      <RevealObserver />
    </CartProvider>
  );
}

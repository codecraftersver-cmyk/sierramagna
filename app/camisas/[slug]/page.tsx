import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCatalog } from "@/components/product-catalog";
import { SiteShell } from "@/components/site-shell";
import {
  catalogLines,
  getCatalogLineBySlug,
  getProductsByLine,
} from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return catalogLines.map((line) => ({ slug: line.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const line = getCatalogLineBySlug(slug);
  if (!line) return { title: "Catalogo | Sierra Magna" };
  return {
    title: `${line.title} | Sierra Magna`,
    description: line.summary,
  };
}

export default async function CamisasLinePage({ params }: PageProps) {
  const { slug } = await params;
  const line = getCatalogLineBySlug(slug);
  if (!line) notFound();

  const items = getProductsByLine(line.id);

  return (
    <SiteShell>
      <ProductCatalog line={line} items={items} />
    </SiteShell>
  );
}

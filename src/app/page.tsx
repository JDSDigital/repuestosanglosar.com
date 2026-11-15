import type { Metadata } from "next";
import { CallToAction } from "@/components/call-to-action";
import { CategoryBands } from "@/components/category-bands";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { VehiclesBand } from "@/components/vehicles-band";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CategoryBands />
        <VehiclesBand />
        <CallToAction />
      </main>
      <SiteFooter />
      <StructuredData />
    </>
  );
}

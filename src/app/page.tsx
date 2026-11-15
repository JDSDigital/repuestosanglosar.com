import { CallToAction } from "@/components/call-to-action";
import { CategoryBands } from "@/components/category-bands";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VehiclesBand } from "@/components/vehicles-band";

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
    </>
  );
}

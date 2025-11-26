import { CertificationTimeline } from "@/components/CertificationTimeline";
import { ContactCard } from "@/components/ContactCard";
import { Hero } from "@/components/Hero";
import { InfrastructureSection } from "@/components/InfrastructureSection";
import { MetricsGrid } from "@/components/MetricsGrid";
import { OperationalInsights } from "@/components/OperationalInsights";
import { TickerMarquee } from "@/components/TickerMarquee";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-14 px-6 py-16">
      <Hero />
      <TickerMarquee />
      <MetricsGrid />
      <CertificationTimeline />
      <OperationalInsights />
      <InfrastructureSection />
      <section id="demo">
        <ContactCard />
      </section>
    </main>
  );
}

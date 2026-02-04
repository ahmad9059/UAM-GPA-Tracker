import {
  Navbar,
  Hero,
  Features,
  HowItWorks,
  GradingSystem,
  CTA,
  Footer,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <GradingSystem />
      <CTA />
      <Footer />
    </div>
  );
}

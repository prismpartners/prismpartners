import HeroSection from "@/components/layout/home/hero";
import LandingServices from "@/components/layout/home/services";
import USP from "@/components/layout/home/usp";
import LandingProjects from "@/components/layout/home/projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <USP />
      <LandingServices />
      <LandingProjects />
    </>
  );
}

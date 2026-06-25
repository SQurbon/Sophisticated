import { useState } from "react";
import HeaderBanner from "@/pages/HomePage/HeaderBanner";
import LearnMoreDrawer from "@/pages/HeaderBTN/LearnMoreDrawer";
import About from "@/pages/HomePage/About";

export default function HomeRoutes() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <HeaderBanner onLearnMore={() => setDrawerOpen(true)} />
      <LearnMoreDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <About/>
    </>
  )
}
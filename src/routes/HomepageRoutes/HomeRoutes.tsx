import { useState } from "react";
import HeaderBanner from "@/pages/HomePage/HeaderBanner";
import LearnMoreDrawer from "@/pages/HeaderBTN/LearnMoreDrawer";

export default function HomeRoutes() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <HeaderBanner onLearnMore={() => setDrawerOpen(true)} />
      <LearnMoreDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
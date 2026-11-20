import React, { useCallback, useState } from 'react';
import { BakeryScheduleSection } from './components/BakeryScheduleSection';
import { CakeLabSection } from './components/CakeLabSection';
import { FeaturedMenuSection } from './components/FeaturedMenuSection';
import { Footer } from './components/Footer';
import { FullMenuSection } from './components/FullMenuSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MoodMatcherSection } from './components/MoodMatcherSection';
import { PhilosophySection } from './components/PhilosophySection';
import { PlaceSection } from './components/PlaceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Ticker } from './components/Ticker';
import { VisitSection } from './components/VisitSection';

export default function App() {
  const [selectedFlavorId, setSelectedFlavorId] = useState<string | null>(null);

  const handleScrollToSection = useCallback((hash: string) => {
    const id = hash.replace(/^#/, '');
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectFlavor = useCallback(
    (flavorId: string) => {
      setSelectedFlavorId(flavorId);
      handleScrollToSection('#custom-cake');
    },
    [handleScrollToSection]
  );

  return (
    <div id="top">
      <Header
        onScrollToSection={handleScrollToSection}
        onScrollTop={handleScrollTop}
      />

      <main>
        <HeroSection onScrollToSection={handleScrollToSection} />
        <Ticker />
        <FeaturedMenuSection />
        <FullMenuSection onSelectFlavor={handleSelectFlavor} />
        <CakeLabSection selectedFlavorId={selectedFlavorId} />
        <Ticker />
        <MoodMatcherSection />
        <BakeryScheduleSection onScrollToSection={handleScrollToSection} />
        <PhilosophySection onScrollToSection={handleScrollToSection} />
        <Ticker />
        <PlaceSection />
        <TestimonialsSection />
        <VisitSection />
      </main>

      <Footer
        onScrollToSection={handleScrollToSection}
        onScrollTop={handleScrollTop}
      />
    </div>
  );
}

'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/UI/Header';
import TimelineSlider from '@/components/Timeline/TimelineSlider';
import InfoPanel from '@/components/InfoPanel/InfoPanel';
import FilterPanel from '@/components/UI/FilterPanel';

// Dynamic import globe to prevent SSR issues
const EarthGlobe = dynamic(() => import('@/components/Globe/EarthGlobe'), {
  ssr: false,
  loading: () => (
    <div className="globe-loading">
      <div className="loading-spinner" />
      <p>Loading Earth...</p>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <FilterPanel />
        <EarthGlobe />
        <InfoPanel />
      </main>
      
      <TimelineSlider />
    </div>
  );
}

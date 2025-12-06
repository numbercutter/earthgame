'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/UI/Header';
import TimelineSlider from '@/components/Timeline/TimelineSlider';
import InfoPanel from '@/components/InfoPanel/InfoPanel';
import FilterPanel from '@/components/UI/FilterPanel';

const EarthGlobe = dynamic(() => import('@/components/Globe/EarthGlobe'), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="spinner w-8 h-8" />
        <p style={{ color: 'var(--theme-text-tertiary)', fontSize: '13px' }}>
          Loading...
        </p>
      </div>
    </div>
  ),
});

export default function Home() {
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(true);

  return (
    <div 
      className="h-screen flex flex-col overflow-hidden"
      style={{ 
        background: 'var(--theme-bg-primary)',
        color: 'var(--theme-text-primary)'
      }}
    >
      <Header />
      
      <main className="flex-1 flex min-h-0">
        {/* Left Sidebar */}
        <aside 
          style={{ 
            width: filtersOpen ? '280px' : '52px',
            minWidth: filtersOpen ? '280px' : '52px',
            display: 'flex',
            flexDirection: 'column',
            borderRight: '1px solid var(--theme-border-tertiary)',
            background: 'var(--theme-bg-secondary)',
            transition: 'width 250ms ease, min-width 250ms ease'
          }}
        >
          {/* Header */}
          <div 
            style={{ 
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: filtersOpen ? 'space-between' : 'center',
              padding: '0 12px',
              borderBottom: '1px solid var(--theme-border-tertiary)',
              flexShrink: 0
            }}
          >
            {filtersOpen && (
              <span 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  color: 'var(--theme-text-tertiary)',
                  opacity: filtersOpen ? 1 : 0,
                  transition: 'opacity 200ms ease'
                }}
              >
                Filters
              </span>
            )}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              style={{ 
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                fontSize: '14px',
                background: 'var(--theme-bg-button)',
                color: 'var(--theme-text-secondary)',
                border: '1px solid var(--theme-border-secondary)',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {filtersOpen ? '‹' : '›'}
            </button>
          </div>
          
          {/* Content */}
          <div 
            style={{ 
              flex: 1,
              overflow: filtersOpen ? 'auto' : 'hidden',
              opacity: filtersOpen ? 1 : 0,
              transition: 'opacity 200ms ease',
              padding: filtersOpen ? '16px' : '0'
            }}
          >
            <FilterPanel />
          </div>
        </aside>

        {/* Center - Globe + Timeline */}
        <div 
          className="flex-1 flex flex-col min-w-0 relative"
          style={{ background: 'var(--theme-bg-primary)' }}
        >
          <div className="flex-1 relative min-h-0">
            <EarthGlobe />
          </div>
          <TimelineSlider />
        </div>

        {/* Right Sidebar */}
        <aside 
          style={{ 
            width: detailsOpen ? '340px' : '52px',
            minWidth: detailsOpen ? '340px' : '52px',
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid var(--theme-border-tertiary)',
            background: 'var(--theme-bg-secondary)',
            transition: 'width 250ms ease, min-width 250ms ease'
          }}
        >
          {/* Header */}
          <div 
            style={{ 
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: detailsOpen ? 'flex-start' : 'center',
              padding: '0 12px',
              gap: '10px',
              borderBottom: '1px solid var(--theme-border-tertiary)',
              flexShrink: 0
            }}
          >
            <button
              onClick={() => setDetailsOpen(!detailsOpen)}
              style={{ 
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                fontSize: '14px',
                background: 'var(--theme-bg-button)',
                color: 'var(--theme-text-secondary)',
                border: '1px solid var(--theme-border-secondary)',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {detailsOpen ? '›' : '‹'}
            </button>
            {detailsOpen && (
              <span 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  color: 'var(--theme-text-tertiary)',
                  opacity: detailsOpen ? 1 : 0,
                  transition: 'opacity 200ms ease'
                }}
              >
                Details
              </span>
            )}
          </div>
          
          {/* Content */}
          <div 
            style={{ 
              flex: 1,
              overflow: detailsOpen ? 'auto' : 'hidden',
              opacity: detailsOpen ? 1 : 0,
              transition: 'opacity 200ms ease',
              padding: detailsOpen ? '16px' : '0'
            }}
          >
            <InfoPanel />
          </div>
        </aside>
      </main>
    </div>
  );
}

'use client'

import { TypePaquete } from '@/app/_types/contentful/Paquete'
import { classNames } from '@/app/_utils/classNames'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Prices } from './Prices'
import { Itinerary } from './Itinerary'
import { Hotels } from './Hotels'
import { Notes } from './Notes'
import { OptionalTours } from './OptionalTours'
import { Visa } from './Visa'

interface ExperienceTabsProps {
  experience: TypePaquete
}

export default function ExperienceTabs({ experience }: ExperienceTabsProps) {
  const { moneda, precios, itinerario, incluye, noIncluye, hoteles, notas, visas, toursOpcionales } = experience.fields;
  const [activeTab, setActiveTab] = useState('Precios');
  const tabs = useMemo(() => {
    const tabsArray = []
    if (precios) tabsArray.push('Precios');
    tabsArray.push('Itinerario')
    if (hoteles) tabsArray.push('Hoteles');
    if (notas) tabsArray.push('Notas');
    if (visas) tabsArray.push('Visas');
    return tabsArray
  }, [precios, hoteles, notas, visas, toursOpcionales])

  const activeIdx = tabs.findIndex((t) => t === activeTab);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });

  // Update underline position/width on tab or window resize
  useLayoutEffect(() => {
    const activeEl = tabRefs.current[activeIdx];
    if (activeEl) {
      const { offsetLeft, offsetWidth } = activeEl;
      setUnderlineProps({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeIdx, tabs.length]);
  useEffect(() => {
    const handleResize = () => {
      const activeEl = tabRefs.current[activeIdx];
      if (activeEl) {
        const { offsetLeft, offsetWidth } = activeEl;
        setUnderlineProps({ left: offsetLeft, width: offsetWidth });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIdx, tabs.length]);

  // Keyboard navigation for tabs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLButtonElement && e.target.getAttribute('role') === 'tab') {
        const idx = tabRefs.current.findIndex((el) => el === e.target);
        if (idx === -1) return;
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = (idx + 1) % tabs.length;
          tabRefs.current[next]?.focus();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = (idx - 1 + tabs.length) % tabs.length;
          tabRefs.current[prev]?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [tabs.length]);

  // Animated underline
  const underlineStyle = {
    transform: `translateX(${activeIdx * 100}%)`,
    transition: 'transform 0.3s cubic-bezier(.4,1,.4,1)',
    width: `calc(100% / ${tabs.length})`,
  };

  return (
    <div className="mx-auto mt-10 max-w-7xl pb-24 px-4 sm:pb-32">
      {/* Mobile: pill/square content switcher */}
      <div className="sm:hidden mb-4">
        <div role="tablist" aria-label="Opciones" className="flex gap-2 justify-center">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              ref={el => { tabRefs.current[i] = el; }}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`tabpanel-${tab}`}
              tabIndex={activeTab === tab ? 0 : -1}
              onClick={() => setActiveTab(tab)}
              className={classNames(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 outline-none',
                activeTab === tab
                  ? 'bg-sky-600 text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-sky-100',
                'focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:z-10'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Desktop: animated tab bar */}
      <div className="relative border-b border-gray-200 overflow-x-auto scrollbar-hide hidden sm:block">
        <nav
          aria-label="Tabs"
          role="tablist"
          className="flex min-w-full w-full sm:justify-center gap-1 sm:gap-0 overflow-x-auto snap-x px-1 sm:px-0"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              ref={el => { tabRefs.current[i] = el; }}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`tabpanel-${tab}`}
              tabIndex={activeTab === tab ? 0 : -1}
              onClick={() => setActiveTab(tab)}
              className={classNames(
                'relative px-4 py-3 sm:px-1 w-auto min-w-[120px] text-center text-sm font-medium transition-colors duration-300 outline-none',
                activeTab === tab
                  ? 'text-sky-600 font-semibold'
                  : 'text-gray-500 hover:text-sky-600',
                'focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:z-10',
                'snap-center'
              )}
            >
              {tab}
            </button>
          ))}
          {/* Animated underline that matches active tab width/position */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 h-0.5 bg-sky-500 rounded transition-all duration-300"
            style={{ left: underlineProps.left, width: underlineProps.width }}
          />
        </nav>
      </div>
      <div className="mt-8">
        <Prices precios={precios} moneda={moneda} incluye={incluye} noIncluye={noIncluye} active={activeTab === 'Precios'} />
        <Itinerary itinerario={itinerario} active={activeTab === 'Itinerario'} />
        <Hotels hoteles={hoteles} active={activeTab === 'Hoteles'} />
        <Notes notas={notas} active={activeTab === 'Notas'} />
        <Visa visas={visas} active={activeTab === 'Visas'} />
      </div>
    </div>
  )
}

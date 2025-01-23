'use client'

import { TypePaquete } from '@/app/_types/contentful/Paquete'
import { classNames } from '@/app/_utils/classNames'
import { ChangeEvent, useMemo, useState } from 'react'
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
  const [activeTab, setActiveTab] = useState('Precios y Salidas');
  const tabs = useMemo(() => {
    const tabsArray = []
    if (precios) tabsArray.push('Precios y Salidas');
    tabsArray.push('Itinerario')
    if (hoteles) tabsArray.push('Hoteles');
    if (notas) tabsArray.push('Notas');
    if (visas) tabsArray.push('Visas');
    if (toursOpcionales) tabsArray.push('Tours opcionales');
    return tabsArray
  }, [precios, hoteles, notas, visas, toursOpcionales])

  const onChangeTab = (event: ChangeEvent<HTMLSelectElement>) => {
    setActiveTab(event.target.value)
  }

  return (
    <div className="mx-auto mt-10 max-w-7xl pb-24 px-4 sm:pb-32">
      <div className="grid grid-cols-1 sm:hidden">
        <select
          defaultValue={tabs[0]}
          onChange={onChangeTab}
          aria-label="Selecciona una pestaña"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
        >
          {tabs.map((tab) => (
            <option key={tab} className='bg-white text-gray-900 [selected]:bg-red-500'>{tab}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-current={activeTab === tab ? 'page' : undefined}
                className={classNames(
                  activeTab === tab
                    ? 'border-sky-500 text-sky-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium',
                )}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <Prices precios={precios} moneda={moneda} incluye={incluye} noIncluye={noIncluye} active={activeTab === 'Precios y Salidas'} />
      <Itinerary itinerario={itinerario} active={activeTab === 'Itinerario'} />
      <Hotels hoteles={hoteles} active={activeTab === 'Hoteles'} />
      <Notes notas={notas} active={activeTab === 'Notas'} />
      <OptionalTours tours={toursOpcionales} active={activeTab === 'Tours opcionales'} />
      <Visa visas={visas} active={activeTab === 'Visas'} />
    </div>
  )
}

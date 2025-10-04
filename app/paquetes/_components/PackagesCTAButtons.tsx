'use client'

import { GlobeAmericasIcon } from '@heroicons/react/24/outline'

export default function PackagesCTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <button
        onClick={() => {
          document.getElementById('destinations-catalog')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
        className="cursor-pointer inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        aria-label="Explorar catálogo de destinos"
      >
        <GlobeAmericasIcon className="w-6 h-6 mr-3" />
        Explorar Destinos
      </button>
    </div>
  )
}
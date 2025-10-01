'use client'

interface NoPackagesClientComponentProps {
    formattedDestination: string;
}

export default function NoPackagesClientComponent({ formattedDestination }: NoPackagesClientComponentProps) {
    return (
        <div className="text-center py-16">
            <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    No hay paquetes disponibles
                </h3>
                <p className="text-neutral-600 mb-6">
                    No hay paquetes disponibles para {formattedDestination} en este momento.
                </p>
                <button 
                    onClick={() => {
                        window.open(`https://wa.me/523314331600?text=Hola, quiero una cotización personalizada para viajar a ${formattedDestination}`, '_blank');
                    }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Cotización Personalizada
                </button>
            </div>
        </div>
    );
}
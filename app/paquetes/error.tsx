'use client'

export default function Error({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="mx-auto h-12 w-12 text-red-400 mb-4">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Error al cargar los destinos
                </h2>
                <p className="text-gray-600 mb-6">
                    Hubo un problema al cargar la lista de destinos. Por favor, intenta de nuevo.
                </p>
                <button
                    onClick={reset}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-200"
                >
                    Reintentar
                </button>
            </div>
        </div>
    )
}
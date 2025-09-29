export default function Loading() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="animate-pulse">
                    {/* Header skeleton */}
                    <header className="mb-10 text-center">
                        <div className="h-12 bg-gray-200 rounded-md mx-auto max-w-2xl mb-4"></div>
                        <div className="h-6 bg-gray-200 rounded-md mx-auto max-w-xl"></div>
                    </header>
                    
                    {/* Grid skeleton */}
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100">
                                <div className="aspect-square w-full bg-gray-200 rounded-t-lg sm:aspect-2/3"></div>
                                <div className="p-4 space-y-2">
                                    <div className="h-6 bg-gray-200 rounded-md"></div>
                                    <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
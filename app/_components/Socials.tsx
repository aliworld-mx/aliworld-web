import Link from 'next/link';

const Socials = () => (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-secondary-50 via-accent-50 to-primary-50 overflow-hidden" aria-labelledby="socials-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="social-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                        <circle cx="60" cy="60" r="5" fill="currentColor" className="text-secondary-600" />
                        <circle cx="30" cy="30" r="3" fill="currentColor" className="text-accent-600" />
                        <circle cx="90" cy="30" r="4" fill="currentColor" className="text-primary-600" />
                        <circle cx="30" cy="90" r="4.5" fill="currentColor" className="text-secondary-500" />
                        <circle cx="90" cy="90" r="3.5" fill="currentColor" className="text-accent-500" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#social-pattern)" />
            </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full opacity-20 animate-pulse delay-500"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header Section */}
            <header className="mx-auto max-w-4xl text-center mb-20">
                {/* Social Badge */}
                <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                    <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </div>
                    <span className="text-secondary-700 font-semibold text-lg">Síguenos</span>
                </div>

                <h2 id="socials-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                    ¿Quieres las <span className="bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">mejores ofertas</span> antes que nadie?
                </h2>
                
                <div className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full mx-auto mb-8"></div>
                
                <p className="text-xl text-neutral-600 leading-relaxed mb-12">
                    Únete a nuestra comunidad en redes sociales y sé el primero en conocer ofertas exclusivas, promociones especiales y destinos increíbles.
                </p>

                {/* Social Media Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {/* Facebook */}
                    <Link 
                        href="https://www.facebook.com/aliworld.viajes/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Síguenos en Facebook"
                        className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-white/50 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Icon Container */}
                        <div className="relative mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-white">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative text-center">
                            <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Facebook</h3>
                            <p className="text-sm text-neutral-600 mb-4">Ofertas exclusivas y promociones diarias</p>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full -translate-y-8 translate-x-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </Link>

                    {/* Instagram */}
                    <Link 
                        href="https://www.instagram.com/aliworld.viajes/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Síguenos en Instagram"
                        className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-white/50 hover:border-pink-200 transition-all duration-500 transform hover:-translate-y-2"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Icon Container */}
                        <div className="relative mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-white">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative text-center">
                            <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">Instagram</h3>
                            <p className="text-sm text-neutral-600 mb-4">Fotos inspiradoras y stories exclusivos</p>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full -translate-y-8 translate-x-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </Link>

                    {/* TikTok */}
                    <Link 
                        href="https://www.tiktok.com/@aliworld.viajes" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Síguenos en TikTok"
                        className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-white/50 hover:border-neutral-300 transition-all duration-500 transform hover:-translate-y-2"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 to-neutral-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Icon Container */}
                        <div className="relative mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                <svg fill="currentColor" viewBox="0 0 50 50" className="w-8 h-8 text-white">
                                    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                                </svg>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative text-center">
                            <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-neutral-800 transition-colors duration-300">TikTok</h3>
                            <p className="text-sm text-neutral-600 mb-4">Videos virales de destinos increíbles</p>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full -translate-y-8 translate-x-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </Link>

                    {/* YouTube */}
                    <Link 
                        href="https://www.youtube.com/@aliworld.viajes" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Suscríbete a nuestro canal de YouTube"
                        className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-white/50 hover:border-red-200 transition-all duration-500 transform hover:-translate-y-2"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Icon Container */}
                        <div className="relative mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-white">
                                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative text-center">
                            <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-red-600 transition-colors duration-300">YouTube</h3>
                            <p className="text-sm text-neutral-600 mb-4">Videos completos de viajes y vlogs</p>
                            
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-200 to-red-300 rounded-full -translate-y-8 translate-x-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </Link>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-neutral-700">¡Únete a nuestra comunidad de viajeros!</span>
                        </div>
                        <div className="w-px h-6 bg-neutral-200"></div>
                        <span className="text-sm text-neutral-600">Ofertas exclusivas cada semana</span>
                    </div>
                </div>
            </header>
        </div>
    </section>
)

export default Socials;
import facebookLogo from '../../public/icons/facebook-color.svg';
import instagramLogo from '../../public/icons/instagram.svg';
import tiktokLogo from '../../public/icons/tiktok.svg';
import threadsLogo from '../../public/icons/threads.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Socials = () => (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                <div className="mx-auto w-full max-w-xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        ¿Quieres conocer las ofertas antes que nadie?
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Síguenos en nuestras redes sociales para estar al tanto de las ofertas y promociones que tenemos para ti. ¡No te las pierdas!
                    </p>
                </div>
                <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                    <Link href="https://www.facebook.com/aliworld.viajes/">
                        <div className='flex flex-row text-gray-800 rounded-lg justify-center gap-x-6 items-center'>
                            <h4 className='font-bold hover:underline'>Facebook</h4>
                            <Image
                                alt="Facebook Logo"
                                src={facebookLogo}
                                width={48}
                                height={48}
                                className="max-h-12 object-contain"
                            />
                        </div>
                    </Link>
                    <Link href="https://www.instagram.com/aliworld.viajes/">
                        <div className='flex flex-row text-gray-800 rounded-lg justify-center gap-x-6 items-center'>
                            <h4 className='font-bold hover:underline'>Instagram</h4>
                            <Image
                                alt="Instagram Logo"
                                src={instagramLogo}
                                width={48}
                                height={48}
                                className="max-h-12 object-contain object-left"
                            />
                        </div>
                    </Link>
                    <Link href="https://www.tiktok.com/@aliworld.viajes">
                        <div className='flex flex-row text-gray-800 rounded-lg justify-center gap-x-6 items-center'>
                            <h4 className='font-bold hover:underline'>TikTok</h4>
                            <Image
                                alt="TikTok Logo"
                                src={tiktokLogo}
                                width={48}
                                height={48}
                                className="max-h-12 object-contain object-left"
                            />
                        </div>
                    </Link>
                    <Link href="https://www.threads.net/@aliworld.viajes">
                        <div className='flex flex-row text-gray-800 rounded-lg justify-center gap-x-6 items-center'>
                            <h4 className='font-bold hover:underline'>Threads</h4>
                            <Image
                                alt="Threads Logo"
                                src={threadsLogo}
                                width={48}
                                height={48}
                                className="max-h-12 object-contain object-left"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Socials;
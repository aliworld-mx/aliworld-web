
import Link from "next/link";
import notFoundImage from '../public/hero/budapest.jpg';
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <>
      <div className="grid min-h-full grid-cols-1 grid-rows-[1fr_auto_1fr] bg-white lg:grid-cols-[max(50%,36rem)_1fr]">
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-base/8 font-semibold text-sky-600">404</p>
            <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Página no encontrada
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Parece que la página que buscas no existe.
            </p>
            <div className="mt-10">
              <Link href="/" className="text-sm/7 font-semibold text-sky-600">
                <span aria-hidden="true">&larr;</span> Volver al inicio
              </Link>
            </div>
          </div>
        </main>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <Image
            alt="Mirador del Monte Fuji en Japón"
            src={notFoundImage}
            width={1440}
            height={1440}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </>
  )
}
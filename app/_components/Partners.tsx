import Image from 'next/image';
import klookLogo from '../../public/klook.svg';
import expediaLogo from '../../public/expediaLogo.svg';
import hotelesLogo from '../../public/hotelesLogo.png';
import megaTravelLogo from '../../public/megaTravelLogo.webp';

export const Partners = () => {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-lg/8 font-semibold text-gray-900">Aliworld trabaja con lideres en la industria para ofrecerte el mejor precio, variedad y calidad en todos los servicios.</h2>
            <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0">
              <Image
                alt="Logo de Klook"
                src={klookLogo}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              />
              <Image
                alt="Logo de Expedia"
                src={expediaLogo}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              />
              <Image
                alt="Logo de Hoteles.com"
                src={hotelesLogo}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              />
              <Image
                alt="Logo de Mega Travel"
                src={megaTravelLogo}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
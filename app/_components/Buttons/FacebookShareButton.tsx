'use client';

import Image from 'next/image';
import facebookLogo from '../../../public/icons/facebook-color.svg';

const FacebookShareButton = () => {
    if (typeof window === 'undefined') return;
    const url = `https://www.facebook.com/sharer/sharer.php?u=${window?.location.href}`

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Facebook"
        >
            <Image className="w-6 h-6 text-white" src={facebookLogo} alt="Compartir en Facebook" />
        </a>
    );
}

export default FacebookShareButton;
'use client';

import { LinkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { classNames } from '../../_utils/classNames';

const CopyUrlButton = () => {
    const [copySuccess, setCopySuccess] = useState(false);
    if (typeof window === 'undefined') return;
    const shareURL = typeof window !== 'undefined' ? window.location.href : '';

    const handleCopyURL = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareURL).then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            });
        }
    };

    return (
        <>
            <button
                onClick={handleCopyURL}
                aria-label="Copiar URL"
                className={classNames("flex items-center p-2 bg-cyan-600 hover:bg-cyan-700 rounded-full transition duration-200", copySuccess ? 'bg-green-600' : 'bg-cyan-600 hover:bg-cyan-700')}
            >
                <LinkIcon className="w-6 h-6" />
            </button>
        </>
    );
}

export default CopyUrlButton;
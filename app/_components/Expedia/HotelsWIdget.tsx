'use client';

import Script from "next/script";

export const HotelsWidget = () => {
    return (
        <div id="expedia-container" className="h-80">
            <Script strategy="beforeInteractive" className="eg-widgets-script" src="https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.js"></Script>
            <div className="eg-widget" data-widget="search" data-program="mx-expedia" data-lobs="stays,flights" data-network="pz" data-camref="1101l4c3IY"></div>
        </div>
    );
};

"use client";

import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
    return (
        <Image
            src="/ontheway-b2b-pro/images/logo_transparent.png"
            alt="On The Way Logo"
            width={320}
            height={320}
            className={`${className} object-contain block select-none`}
            style={{ 
                width: 'auto',
                maxWidth: '100%',
                display: 'block'
            }}
            priority
            unoptimized
        />
    );
}

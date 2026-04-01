"use client";

import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
    return (
        <Image
            src="/ontheway-b2b-pro/logo_final.png"
            alt="On The Way Logo"
            width={320}
            height={100}
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

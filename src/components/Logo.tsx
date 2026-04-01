"use client";

import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
    return (
        <Image
            src="/ontheway-b2b-pro/logo.png"
            alt="On The Way Logo"
            width={320}
            height={100}
            className={`${className} object-contain block select-none`}
            style={{ height: '42px', width: 'auto', display: 'block' }}
            priority
            unoptimized
        />
    );
}

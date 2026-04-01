"use client";

import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
    return (
        <Image
            src="/ontheway-b2b-pro/images/logo.png"
            alt="On The Way Logo"
            width={220}
            height={56}
            className={className}
            style={{ width: "auto", objectFit: "contain" }}
            priority
            unoptimized
        />
    );
}

"use client";

import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
    return (
        <Image
            src="/ontheway-b2b-pro/logo.png"
            alt="On The Way Logo"
            width={300}
            height={80}
            className={className}
            style={{ height: "100%", width: "auto", objectFit: "contain" }}
            priority
            unoptimized
        />
    );
}

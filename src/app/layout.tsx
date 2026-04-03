import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ontheway.net/"),
  title: "On The Way Overseas | Global Travel Resource Allocation Platform",
  description: "A global B2B travel resource platform connecting air, hotel, group travel, mobility and digital capabilities for TMCs, OTAs, wholesalers and enterprise partners.",
  keywords: "GDS, NDC, LCC API, Global TMC, Business Travel, Hong Kong, China, Taiwan, China, IATA Agency, Sabre, Amadeus, Travelport, TravelSky",
  openGraph: {
    title: "On The Way Overseas | Global Travel Resource Allocation Platform",
    description: "A global B2B travel resource platform connecting air, hotel, group travel, mobility and digital capabilities for TMCs, OTAs, wholesalers and enterprise partners.",
    url: "https://ontheway.net/",
    siteName: "On The Way Overseas",
    images: [
      {
        url: "/images/wechat-preview.png",
        width: 1024,
        height: 1024,
        alt: "On The Way Overseas Global Travel Resource Allocation Platform (Square Thumbnail)",
      },
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "On The Way Overseas Global Travel Resource Allocation Platform (Rectangular Thumbnail)",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "On The Way Overseas | Global Travel Resource Allocation Platform",
    description: "A global B2B travel resource platform connecting air, hotel, group travel, mobility and digital capabilities for TMCs, OTAs, wholesalers and enterprise partners.",
    images: ["/images/social-preview.png"],
  },
  other: {
    "itemprop:name": "On The Way Overseas | Global Travel Resource Allocation Platform",
    "itemprop:description": "A global B2B travel resource platform connecting air, hotel, group travel, mobility and digital capabilities for TMCs, OTAs, wholesalers and enterprise partners.",
    "itemprop:image": "https://ontheway.net/images/wechat-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={jakarta.variable}>
      <body
        className="font-jakarta antialiased min-h-screen selection:bg-[#0b2853]/10 selection:text-[#0b2853] scroll-smooth bg-[#f8fafc]"
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

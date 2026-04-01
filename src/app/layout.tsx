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
  title: "OnTheWay B2B - Global Travel Resources Core Platform",
  description: "Global B2B travel resources platform for TMCs, OTAs, and corporations. Direct access to GDS, NDC, LCC APIs, global flight ticketing, accommodations, and mobility solutions.",
  keywords: "GDS, NDC, LCC API, Global TMC, Business Travel, Hong Kong IATA Agency, Sabre, Amadeus, Travelport, TravelSky",
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

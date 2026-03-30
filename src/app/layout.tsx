import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

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
    <html lang="en">
      <body
        className="font-sans antialiased min-h-screen selection:bg-primary-light selection:text-primary-dark scroll-smooth"
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

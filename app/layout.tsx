import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Writivia — Write Better Application Essays",
  description: site.tagline,
  applicationName: site.name,
  openGraph: { type: "website", siteName: site.name, locale: "en_US", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Writivia — specific feedback for stronger college essays" }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={[inter.variable, sourceSerif.variable].join(" ")}>
      <body>
        <ClerkProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ClerkProvider>
      </body>
    </html>
  );
}
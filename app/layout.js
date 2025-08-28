import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ACME Corp",
  description: "Build commerce with confidence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased bg-slate-950 text-white`}>
        {process.env.NEXT_PUBLIC_HIDE_DEV_INDICATOR === 'true' ? (
          <style>{`
            /* Hide Next.js dev overlays / corner indicator when requested */
            [data-nextjs-dialog-overlay],
            [data-nextjs-dev-overlay],
            [data-nextjs-toast],
            [data-nextjs-corner-indicator],
            #nextjs__container,
            #nextjs-dev-overlay,
            #__nextjs-dev-overlay {
              display: none !important;
            }
          `}</style>
        ) : null}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">Skip to main content</a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

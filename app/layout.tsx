import type { Metadata } from "next";
import { Geist, Poppins, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/navbar";
import StickyCTA from "./components/ui/sticky-cta";

const primary = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const secundary = Geist({
  variable: "--font-secundary",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitay Yoga Estudio",
  description:
    "Vuelve a tu centro. Clases de yoga, respiración y meditación. Entrenamiento consciente para todos los niveles.",
  keywords: [
    "yoga",
    "respiración",
    "entrenamiento consciente",
    "bienestar",
    "meditación",
    "Venezuela",
  ],
  authors: [{ name: "Nitay Yoga Estudio" }],
  creator: "Nitay Yoga Estudio",
  publisher: "Nitay Yoga Estudio",
  openGraph: {
    title: "Nitay Yoga Estudio",
    description:
      "Vuelve a tu centro. Clases de yoga, respiración y meditación. Entrenamiento consciente para todos los niveles.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitay Yoga Estudio",
    description:
      "Vuelve a tu centro. Clases de yoga, respiración y meditación.",
    creator: "@nitayyogaestudio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${primary.variable} ${secundary.variable} ${display.variable} antialiased overflow-x-hidden w-full`}
      >
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
        <Navbar />
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}

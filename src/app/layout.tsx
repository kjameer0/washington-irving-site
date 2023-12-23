import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideNavBar from "@/components/SideNavBar/SideNavBar";
import MobileNavBar from "@/components/MobileNavBar/MobileNavBar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
export const inter = localFont({
  src: "../../public/fonts/Inter/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-inter",
});
export const hindGuntur = localFont({
  src: "../../public/fonts/Inter/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Washington Irving YABC",
  description:
    "Washingtion Irving YABC is part of the Young Adult Borough Center program. We welcome every student from any high school across New York City, who can benefit from an evening experience that will allow them the opportunity to recover credits so they can earn a high school diploma. Every YABC site affirms students’ backgrounds and identities, while drawing on the strengths each student brings to the YABC community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="root">
        <Banner />
        <MobileNavBar />
        <SideNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

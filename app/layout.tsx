import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  weight: ["400", "700"],
});

export const font = ibmPlexSerif.className;
export const fontVariable = ibmPlexSerif.variable;
export const interVariable = inter.variable;
export const interClassName = inter.className;
export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern, banking platform for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}

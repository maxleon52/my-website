import { Header } from "@/components/header";
import { Funnel_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sciencePersonalUseOnly = localFont({
  src: "./fonts/SciencePersonalUseOnly-JpG37.otf",
  variable: "--font-science-personal-use-only",
});

const funnelSans = Funnel_Sans({
  weight: "400",
  variable: "--font-funnel-sans",
});

export const metadata = {
  title: "Maxwell Alves- Portfolio",
  description:
    "Welcome to my portfolio website. Learn more about my skills, projects, and how to contact me.",
  keywords: [
    "portfolio",
    "web developer",
    "projects",
    "contact",
    "skills",
    "maxwell",
    "maxwell alves",
    "maxleon522@gmail.com",
    "batim",
  ],
  authors: [{ name: "Maxwell Alves", url: "https://www.batim.com.br" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Maxwell Alves- Portfolio",
    description:
      "Explore my portfolio to learn about my skills, projects, and how to contact me.",
    url: "https://www.batim.com.br",
    siteName: "batim",
    images: [
      {
        url: "https://www.batim.com.br/hero.png",
        width: 1200,
        height: 630,
        alt: "My Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxwell Alves - Portfolio",
    description:
      "Explore my portfolio to learn about my skills, projects, and how to contact me.",
    images: ["https://www.mywebsite.com/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.variable} ${sciencePersonalUseOnly.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

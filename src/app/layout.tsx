import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import pathPrefix from "@/lib/pathPrefix";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const prefix = pathPrefix();

export const metadata: Metadata = {
  title: `Matt Wilkinson Homepage`,
  description: `Hi, I'm Matt Wilkinson.  Software Engineer, musician and traveller.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${prefix}/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${prefix}/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${prefix}/favicon/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${prefix}/favicon/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${prefix}/favicon/safari-pinned-tab.svg`}
          color="#000000"
        />
        <link rel="shortcut icon" href={`${prefix}/favicon/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${prefix}/feed.xml`} />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

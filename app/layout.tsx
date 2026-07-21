import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thirty",
  description: "A 30th birthday site built with Next.js.",
  icons: {
    icon: "/BackgroundTrees/182-1826674_evergreen-tree-clipart-pine-tree-clipart-black-and-white.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


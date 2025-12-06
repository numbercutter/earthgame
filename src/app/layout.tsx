import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Earth Game | Interactive Global History",
  description: "Explore the true history of Earth through an interactive 3D globe. Discover powers, events, people, and the connections that shaped our world.",
  keywords: ["history", "geopolitics", "globe", "interactive", "visualization", "powers", "events"],
};

// Theme initialization script to prevent flash
const themeScript = `
(function() {
  try {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = theme === 'dark' || (!theme && prefersDark);
    
    if (shouldBeDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${oxanium.variable} font-sans`} style={{ fontFamily: 'var(--font-oxanium), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}

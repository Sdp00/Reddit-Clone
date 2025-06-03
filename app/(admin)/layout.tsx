import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../globals.css";

export const metadata: Metadata = {
  title: "Reddit-clone Sanity Admin Panel",
  description: "Reddit-clone Sanity Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

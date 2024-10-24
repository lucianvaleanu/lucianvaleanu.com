import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Văleanu Lucian",
  description: "Developer, artist and plumber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

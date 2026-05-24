import type { Metadata, Viewport } from "next";
import "./globals.css";
import CursorProvider from "@/components/cursor/CursorProvider";


export const metadata: Metadata = {
  title: "SyneXa | Solution IT & Technologies IT Performantes",
  description: "Solution & Technologies IT Performantes",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CursorProvider/>
        {children}
      </body>
    </html>
  );
}

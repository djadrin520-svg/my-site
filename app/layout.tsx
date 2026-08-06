import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { BridgeProvider } from "@/components/bridge-provider";
import { ContactsSection } from "@/components/contacts-section";
import { GradientBackground } from "@/components/gradient-background";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const appName = "Дмитрий Ядрин";

export const metadata: Metadata = {
  title: appName,
  description:
    "Креативный продюсер и продуктовый стратег — сочетание творческого видения и системного подхода для создания продуктов на стыке музыки, дизайна, AI и стратегии.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("font-sans", geist.variable)}>
      <body className="antialiased min-h-screen flex flex-col">
        <GradientBackground />
        <BridgeProvider />
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-14 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              {appName}
            </Link>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t">
          <ContactsSection />
          <div className="container mx-auto px-4 pb-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {appName}
          </div>
        </footer>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

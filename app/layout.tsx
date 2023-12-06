import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/toaster";

const myFont = LocalFont({ src: "../public/fonts/Pretendard-SemiBold.ttf" });

export const metadata: Metadata = {
  title: "Service Name",
  description: "9oorm 8th",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <ModalProvider />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

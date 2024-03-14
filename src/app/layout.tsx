import { Header, ThemeProvider } from "@/components";
import StoreProvider from "./StoreProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <StoreProvider>
            <Header />
            {children}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

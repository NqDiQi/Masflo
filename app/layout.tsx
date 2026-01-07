import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

import globals.css"ls.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = { title: "Lisan", description: "Video translation" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

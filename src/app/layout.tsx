import "./globals.css";

export const metadata = {
  title: "لسان — ترجمة الفيديو بالذكاء الاصطناعي",
  description: "ارفع الفيديو، اختر اللغة واللهجة، واحصل على ترجمة دقيقة",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

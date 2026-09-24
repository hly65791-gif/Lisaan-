export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <div className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm">
          ✨ الإصدار الأول جاهز
        </div>
        <h1 className="mb-6 text-5xl font-extrabold leading-tight sm:text-7xl">
          ترجم أي فيديو
          <br />
          <span className="bg-gradient-to-l from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            إلى أي لهجة عربية
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400">
          ارفع الفيديو، اختر اللهجة (مصرية 🇪🇬، خليجية 🇸🇦، شامية 🇸🇾)، واحصل على ترجمة دقيقة بدبلجة صوتية.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="/new" className="rounded-2xl bg-indigo-500 px-8 py-4 text-lg font-bold hover:bg-indigo-400">
            ابدأ مجانًا
          </a>
          <a href="/pricing" className="rounded-2xl border border-neutral-700 px-8 py-4 text-lg font-semibold hover:bg-neutral-800">
            الأسعار
          </a>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="mb-3 text-4xl">🎬</div>
            <h3 className="mb-2 font-bold">ترجمة دقيقة</h3>
            <p className="text-sm text-neutral-400">حتى 20GB لكل مشروع</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="mb-3 text-4xl">🇪🇬</div>
            <h3 className="mb-2 font-bold">8 لهجات عربية</h3>
            <p className="text-sm text-neutral-400">مصرية، خليجية، شامية...</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="mb-3 text-4xl">🎙️</div>
            <h3 className="mb-2 font-bold">دبلجة بأصوات</h3>
            <p className="text-sm text-neutral-400">استنسخ صوتك أو اختر</p>
          </div>
        </div>
      </div>
    </main>
  );
}

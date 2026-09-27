import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          لسان
        </Link>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-indigo-600">الرئيسية</Link>
          <Link href="/upload" className="hover:text-indigo-600">رفع فيديو</Link>
        </div>
      </div>
    </nav>
  );
};                                               className="rounded-xl"
                                                                                                      priority
                                                                                                                />
                                                                                                                          <span className="text-xl font-extrabold text-indigo-400">Lisan</span>
                                                                                                                                  </Link>
                                                                                                                                          <div className="hidden sm:flex items-center gap-1 text-sm">
                                                                                                                                                    <Link href="/" className="rounded-lg px-3 py-1.5 hover:bg-neutral-800">الرئيسية</Link>
                                                                                                                                                              <Link href="/pricing" className="rounded-lg px-3 py-1.5 hover:bg-neutral-800">الأسعار</Link>
                                                                                                                                                                        <Link href="/about" className="rounded-lg px-3 py-1.5 hover:bg-neutral-800">من نحن</Link>
                                                                                                                                                                                </div>
                                                                                                                                                                                        <div className="flex items-center gap-2">
                                                                                                                                                                                                  <Link href="/new" className="text-sm rounded-lg bg-indigo-500 px-4 py-1.5 font-semibold hover:bg-indigo-400">
                                                                                                                                                                                                              ابدأ مجاناً
                                                                                                                                                                                                                        </Link>
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                          </nav>
                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                            

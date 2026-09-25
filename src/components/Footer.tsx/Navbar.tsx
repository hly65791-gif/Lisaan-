import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
      <nav className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur sticky top-0 z-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                    <Link href="/" className="flex items-center gap-3">
                              <Image
                                          src="/logo.jpg"
                                                      alt="Lisan"
                                                                  width={44}
                                                                              height={44}
                                                                                          className="rounded-xl"
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
                                                                                                                                                                                                                                            
export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="w-screen ">
      <div className="flex flex-col items-center text-center px-6 pt-20 pb-16 w-full ">
        <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-200 rounded-full px-3 py-1 mb-6">
          <span
            className="w-1.5 h-1.5 rounded-full bg-sky-600 flex-shrink-0"
            aria-hidden="true"
          ></span>
          <span className="text-xs font-semibold text-sky-600">
            Now in public beta
          </span>
        </div>
        <h1
          id="hero-heading"
          className="text-[clamp(32px,6vw,52px)] font-extrabold  leading-[1.12] tracking-[-1.5px] mb-5 max-w-2xl"
        >
          Build better UIs, <span className="text-sky-600">ship faster</span>
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
          A professional React + Tailwind component library with semantic
          markup, accessibility baked in, and iteration notes for every pattern.
        </p>
        <div
          role="group"
          aria-label="Primary actions"
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <a
            href="/signup"
            role="button"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-xl text-[15px] font-bold no-underline hover:bg-sky-700 transition-all"
          >
            Get started free
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="/components"
            className="inline-flex items-center px-6 py-3 bg-transparent  border-[1.5px] border-gray-200 rounded-xl text-[15px] font-semibold no-underline shadow-sm hover:border-gray-600 transition-all"
          >
            View components
          </a>
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="flex" aria-hidden="true">
            {["#4f46e5", "#7c3aed", "#db2777", "#ea580c"].map((bg, i) => (
              <div
                key={bg}
                style={{ background: bg }}
                className={
                  "w-7 h-7 rounded-full border-2 border-white flex items-center justify-center " +
                  (i > 0 ? "-ml-2" : "")
                }
              >
                <span className="text-white text-[10px] font-bold">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-gray-500">
            <strong className="text-gray-900">2,400+</strong> developers
            building with this guide
          </p>
        </div>
      </div>
      {/*      <figure className="px-6 pb-16 max-w-4xl mx-auto">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
          <p className="text-sm text-gray-400">Product screenshot / demo</p>
        </div>
        *<figcaption className="sr-only">
          Screenshot of the UI style guide dashboard
        </figcaption>
      </figure>*/}
    </section>
  );
}

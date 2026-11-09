import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="shrink-0 bg-ivory px-6">
      <div className="mx-auto max-w-7xl border-t border-beige">
        <div className="flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-script text-3xl text-gold-muted">Uchyy</p>
            <p className="mt-1 font-label text-[10px] tracking-[0.2em] text-espresso-light">
              WORDS, IDEAS & MELODIES
            </p>
          </div>

          <p className="font-body text-xs text-espresso-light">
            © {new Date().getFullYear()} Uchyy. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 font-label text-xs tracking-widest text-espresso transition hover:text-gold-muted"
          >
            BACK TO TOP <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
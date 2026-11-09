import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface LyricsAccordionProps {
  lyrics: string;
  title?: string;
}

export default function LyricsAccordion({lyrics, title}: LyricsAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!lyrics.trim()) return null;

  return (
    <div className="mt-8 border-y border-beige">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-5 text-left">
        <div>

          <h3 className="font-display text-xl text-espresso font-bold">
            {title || "Lyrics"}
          </h3>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-beige text-xl text-espresso">
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden">
            <div className="max-h-80 overflow-y-auto py-6">
              <pre className="whitespace-pre-wrap font-body text-sm leading-8 text-espresso-light">
                {lyrics}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
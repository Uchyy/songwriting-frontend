import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

type HorizontalCarouselProps = {
  children: ReactNode[];
  className?: string;
};

export default function HorizontalCarousel({ children, className = ""}: Readonly<HorizontalCarouselProps>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: false,
  });

  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;

    setPrevButtonDisabled(!emblaApi.canScrollPrev());
    setNextButtonDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {children.map((child, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_85%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        disabled={prevButtonDisabled}
        aria-label="Previous songs"
        className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-beige bg-ivory text-espresso shadow-soft transition hover:bg-gold disabled:pointer-events-none disabled:opacity-30 sm:-left-5"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        disabled={nextButtonDisabled}
        aria-label="Next songs"
        className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-beige bg-ivory text-espresso shadow-soft transition hover:bg-gold disabled:pointer-events-none disabled:opacity-30 sm:-right-5">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
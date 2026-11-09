
import heroImage from "../assets/hero.png";
import {ChevronRight} from "lucide-react";

function Hero() {


  return (
    <section id="home" className="relative min-h-[450px] wavy-border">

      {/* Mobile and tablet background */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/50 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid min-h-[450px] max-w-7xl lg:grid-cols-2">

        <div className="flex flex-col justify-center px-6 py-5 lg:px-16">

          <span className="font-label text-sm font-bold tracking-[0.2em] text-gold-muted">
            SONGWRITER. CREATIVE. STORYTELLER.
          </span>

          <h1 className="mt-4 font-display text-3xl leading-wide text-espresso sm:text-5xl lg:text-6xl">
            Every song begins with a{" "}
            <span className="font-script text-espresso text-5xl sm:text-7xl lg:text-8xl">
              story.
            </span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-espresso-light sm:text-lg">
            A collection of my songwriting journey, ideas and the stories behind the songs.
          </p>

         <a
            href="#songs"
            className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-base font-bold text-espresso transition-colors duration-300 hover:bg-gold-muted">
                Explore My Songs
            <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
            />
         </a>

        </div>

        {/* Desktop image */}
        <div className="relative hidden lg:block">
          <img
            src={heroImage}
            alt="A songwriter's workspace with a notebook and headphones"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-cream/10" />
        </div>

      </div>
      
    </section>
  );
}

export default Hero;

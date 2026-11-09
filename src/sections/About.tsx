import aboutImage from "../assets/profile.png";

function About() {
  return (
    <section id="about" className="bg-ivory px-6 py-20 lg:py-28 wavy-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="A songwriter's creative workspace"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />

          <span className="absolute -bottom-4 -right-3 rounded-full bg-gold px-5 py-3 font-script text-2xl text-espresso">
            Uchyy
          </span>
        </div>

        {/* Content */}
        <div className="py-4">
          <span className="font-label text-sm tracking-[0.2em] text-gold-muted">
            THE PERSON BEHIND THE WORDS
          </span>

          <h2 className="mt-4 font-display text-4xl leading-tight text-espresso sm:text-5xl">
            A little about the{" "}
            <span className="font-script text-gold">writer.</span>
          </h2>

          <h3 className="mt-6 font-display text-xl italic text-gold-muted">
            Behind every song, there's an idea.
          </h3>

          <div className="mt-6 space-y-5 font-body leading-relaxed text-espresso-light">
            <p>
              I'm Uchyy, a songwriter drawn to ideas, stories
              and the little details that can turn into something
              much bigger.
            </p>

            <p>
              Sometimes a song begins with a title. Sometimes
              it's a phrase, a character, a melody or simply
              an idea I can't stop thinking about.
            </p>

            <p>
              I enjoy exploring different perspectives, moods
              and musical directions, bringing each idea to life
              through words and melodies.
            </p>

            <p>
              This space is where I share that process — the
              songs, the stories behind them and the creative
              journey along the way.
            </p>
          </div>

          <div className="mt-8 border-t border-beige pt-6">
            <span className="font-script text-3xl text-espresso">
              Uchyy
            </span>
            <p className="mt-1 font-label text-xs tracking-widest text-gold-muted">
              SONGWRITER
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
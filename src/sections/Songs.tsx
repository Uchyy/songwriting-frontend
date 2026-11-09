
import { useEffect, useState } from "react";

import LyricsAccordion from "../components/Accordion";
import ExpandableCard from "../components/ExpandableCard";
import HorizontalCarousel from "../components/HorizontalCarousel";


import type { Song } from "../models/Song";
import { apiRequest } from "../api.ts/service";

export default function SongSection() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getPublishedSongs(): Promise<Song[]> {
    return apiRequest<Song[]>("/api/songs");
  }

  useEffect(() => {
    let isMounted = true;

    async function loadSongs() {
      try {
        setLoading(true);
        setError("");

        const data = await getPublishedSongs();

        if (isMounted) {
          setSongs(data);
        }
      } catch (err) {
        console.error("Error loading songs:", err);
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Unable to load songs. Please try again later."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadSongs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="songs" className="bg-white px-6 py-20 wavy-border">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="font-label text-sm tracking-[0.2em] text-gold-muted">
              THE COLLECTION
            </span>

            <h2 className="mt-3 font-display text-4xl text-espresso sm:text-5xl">
              The Song Archive
            </h2>

            <p className="mt-4 max-w-xl font-body text-espresso-light">
              A collection of ideas, stories and melodies.
            </p>
          </div>

          {!loading && !error && songs.length > 0 && (
            <span className="hidden font-label text-sm text-gold-muted sm:block">
              {songs.length} SONGS
            </span>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <p className="py-12 text-center font-body text-espresso-light">
            Loading the song archive...
          </p>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="py-12 text-center">
            <p className="font-body text-red-600">{error}</p>
          </div>
        )}

        {/* Empty archive */}
        {!loading && !error && songs.length === 0 && (
          <p className="py-12 text-center font-body text-espresso-light">
            New songs are coming soon. Check back later.
          </p>
        )}

        {/* Songs */}
        {!loading && !error && songs.length > 0 && (
          <HorizontalCarousel className="px-2">
            {songs.map(song => (
              <ExpandableCard
                key={song.id}
                title={song.title}
                subtitle={song.description}
                image={song.artwork}
              >
                <div className="flex h-full w-full flex-col overflow-y-auto p-2">

                  {/* Audio */}
                  {song.media?.length > 0 && (
                    <section className="mt-3">
                      <h3 className="mb-4 font-display text-xl font-bold text-espresso">
                        Listen
                      </h3>

                      <div className="space-y-4">
                        {song.media.map(item => (
                          <div key={item.id}>
                            <p className="mb-2 font-label text-xs uppercase tracking-wider text-gold-muted font-bold">
                              {item.label} - {item.mediaType}
                            </p>

                            <audio
                              controls
                              preload="none"
                              className="w-full">
                              <source src={item.audioUrl} />
                              Your browser does not support audio playback.
                            </audio>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* External link */}
                  {song.externalLink && (
                    <a
                      href={song.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-bold text-espresso transition hover:bg-gold-muted"
                    >
                      Listen on Suno ↗
                    </a>
                  )}

                  {/* Story */}
                  {song.story && (
                    <LyricsAccordion lyrics={song.story} title="The Story" />
                  )}

                  {/* Diary */}
                  {song.diary && song.diary.length > 0 && (
                    <section className="mt-4 space-y-3">
                      {song.diary.map((entry, index) => (
                        <p
                          key={index}
                          className="border-l-2 border-gold pl-4 font-body text-sm leading-relaxed text-espresso-light">
                          {entry}
                        </p>
                      ))}
                    </section>
                  )}

                  {/* Lyrics */}
                  {song.lyrics && (
                    <LyricsAccordion lyrics={song.lyrics} />
                  )}

                  {/* Genres */}
                  {song.genre?.length > 0 && (
                    <div className="mt-7 flex flex-wrap items-center gap-2">
                      <span className="font-display text-lg font-bold text-espresso">
                        Tags:
                      </span>

                      {song.genre.map(tag => (
                        <span
                          key={tag}
                          className="rounded-full border border-beige px-3 py-1 font-label text-xs uppercase tracking-wider text-gold-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </ExpandableCard>
            ))}
          </HorizontalCarousel>
        )}

      </div>
    </section>
  );
}

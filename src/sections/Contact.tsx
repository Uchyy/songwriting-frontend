import { Camera, Mail, Music2 } from "lucide-react";
import { useState } from "react";
import ExpandableCard from "../components/ExpandableCard";
import heroImage from "../assets/hero.png";
import { submitEnquiry } from "../api.ts/EnquiryService";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await submitEnquiry({ name, email, subject, message: enquiry });
      setName("");
      setEmail("");
      setSubject("");
      setEnquiry("");

      alert("Thank you! Your enquiry has been sent.");
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Sorry, we couldn't send your enquiry. Please try again.");
    }
  };

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:uchyychy26@gmail.com",
      icon: Mail,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/uchyy_chy",
      icon: Camera,
    },
    {
      name: "Suno",
      href: "https://suno.com/@uchyy",
      icon: Music2,
    },
  ];

  return (
    <section id="contact" className="bg-ivory px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="font-label text-sm tracking-[0.2em] text-gold-muted">
            LET'S CONNECT
          </span>

          <h2 className="mt-4 font-display text-4xl text-espresso sm:text-5xl">
            Have a song in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-body leading-relaxed text-espresso-light">
            Have a project, an idea or an opportunity in mind?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Contact information */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-3xl text-espresso">
              Let's make something meaningful.
            </h3>

            <p className="mt-5 max-w-md font-body leading-relaxed text-espresso-light">
              Whether you're an artist, producer, music publisher
              or fellow creative, I'm always open to interesting
              conversations and opportunities.
            </p>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-beige text-espresso transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold">
                  <social.icon size={19} strokeWidth={1.6} />
                </a>
              ))}

              {/* TikTok */}
              <a
                href="https://tiktok.com/@uchyy_chy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-beige text-espresso transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold">
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true">
                  <path d="M19.6 7.1a4.8 4.8 0 0 1-3.4-4.6h-3.8v14.2a2.8 2.8 0 1 1-2.8-2.8c.3 0 .6 0 .8.1v-3.9a7 7 0 1 0 5.8 6.8V9.7a8.5 8.5 0 0 0 5 1.6V7.5a4.8 4.8 0 0 1-1.6-.4Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Enquiry form */}
          <ExpandableCard
            title="Send an enquiry"
            subtitle="Have a project or idea in mind? Let's talk."
            image={heroImage}>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-label text-sm text-espresso">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full rounded-lg border border-beige bg-white p-3 outline-none focus:border-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-label text-sm text-espresso">
                  Your name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-beige bg-white p-3 outline-none focus:border-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-label text-sm text-espresso">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-beige bg-white p-3 outline-none focus:border-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry"
                  className="mb-2 block font-label text-sm text-espresso">
                  Your enquiry
                </label>

                <textarea
                  id="enquiry"
                  value={enquiry}
                  onChange={(e) => setEnquiry(e.target.value)}
                  required
                  rows={5}
                  className="w-full resize-y rounded-lg border border-beige bg-white p-3 outline-none focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-gold px-6 py-3 font-body text-sm font-bold text-espresso transition hover:bg-gold-muted">
                Send enquiry
              </button>
            </form>
          </ExpandableCard>
        </div>


      </div>
    </section>
  );
}

export default Contact;
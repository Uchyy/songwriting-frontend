
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Songs", href: "#songs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    navigationLinks.forEach(({ href }) => {
      const section = document.querySelector(href);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-white backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation">
        <a href="#home" aria-label="Uchyy home">
          <img
            src={logo}
            alt="Uchyy"
            width={144}
            height={72}
            className="h-auto w-36 object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navigationLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-2 font-label text-sm tracking-widest transition-colors duration-300
                  ${isActive ? "text-gold" : "text-espresso hover:text-gold" }
                  after:absolute after:bottom-0 after:left-0 after:h-px
                  after:bg-gold after:transition-all after:duration-300
                  ${ isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`} > 
                  {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="text-espresso md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}>
          <span className="text-2xl" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-espresso/10 bg-cream px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navigationLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`font-label text-sm tracking-widest transition-colors
                    ${isActive ? "text-gold" : "text-espresso hover:text-gold"}`}>
                  {link.label}
                  {isActive && (
                    <span className="ml-2 text-gold" aria-hidden="true">
                      —
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;

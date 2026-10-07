import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const LINKS = [
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("projects");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/projects/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isProjectPage) return;

    const sections = LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isProjectPage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-350 px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-display font-semibold text-[15px] tracking-tight text-ink"
        >
          Exequiel Calix
        </a>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => {
            const href = isProjectPage
              ? `/#${link.id}`
              : `#${link.id}`;

            return (
              <li key={link.id} className="relative">
                <a
                  href={href}
                  className={`text-[14px] font-medium transition-colors duration-200 ${
                    active === link.id && !isProjectPage
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>

                {active === link.id && !isProjectPage && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-5.25 left-0 right-0 h-0.5 bg-accent"
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        

        {/* Mobile controls */}
        <div className="flex md:hidden items-center">
          

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="inline-flex items-center justify-center border border-line w-10 h-10 text-ink hover:border-ink transition-colors duration-200"
          >
            {menuOpen ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="md:hidden border-t border-line bg-bg"
          >
            <div className="px-4 sm:px-6 py-4">
              <nav className="flex flex-col">
                {LINKS.map((link) => {
                  const href = isProjectPage
                    ? `/#${link.id}`
                    : `#${link.id}`;

                  return (
                    <a
                      key={link.id}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`py-4 border-b border-line font-medium text-[15px] ${
                        active === link.id && !isProjectPage
                          ? "text-ink"
                          : "text-ink-soft"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        {link.label}
                        {active === link.id && !isProjectPage && (
                          <span className="w-2 h-2 bg-accent" />
                        )}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
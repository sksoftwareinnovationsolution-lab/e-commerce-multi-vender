import { useState, useEffect, useRef, useCallback } from "react";
import "./MarketplaceNav.css";

const NAV_ITEMS = [
  { id: "all", label: "All", icon: "\u{1F3E0}", sectionId: null },
  { id: "products", label: "Products", icon: "\u{1F4E6}", sectionId: "featured-products" },
  { id: "shops", label: "Shops", icon: "\u{1F3EA}", sectionId: "nearby-shops" },
  { id: "services", label: "Services", icon: "\u{1F6E0}", sectionId: "nearby-services" },
];

function MarketplaceNav() {
  const [activeId, setActiveId] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const observerRef = useRef(null);
  const sectionIdsRef = useRef(["featured-products", "nearby-shops", "nearby-services"]);
  const isClickScrolling = useRef(false);

  /* Detect scroll for shadow effect */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Intersection Observer to detect visible section */
  useEffect(() => {
    const sections = sectionIdsRef.current
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length === 0) return;

        /* Pick the entry closest to the top */
        let best = visibleEntries[0];
        for (const entry of visibleEntries) {
          if (entry.boundingClientRect.top < best.boundingClientRect.top) {
            best = entry;
          }
        }

        const idMap = {
          "featured-products": "products",
          "nearby-shops": "shops",
          "nearby-services": "services",
        };
        const chipId = idMap[best.target.id];
        if (chipId) setActiveId(chipId);
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  /* Handle chip click — smooth scroll + temporary freeze observer */
  const handleChipClick = useCallback((item) => {
    setActiveId(item.id);

    if (item.id === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(item.sectionId);
    if (!target) return;

    isClickScrolling.current = true;
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  }, []);

  /* Ripple effect */
  const createRipple = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("mpnav__ripple");

    const existing = btn.querySelector(".mpnav__ripple");
    if (existing) existing.remove();
    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  };

  const handleClick = (e, item) => {
    createRipple(e);
    handleChipClick(item);
  };

  return (
    <nav
      ref={navRef}
      className={`mpnav ${isScrolled ? "mpnav--scrolled" : ""}`}
      aria-label="Marketplace navigation"
    >
      <div className="mpnav__inner">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`mpnav__chip ${activeId === item.id ? "mpnav__chip--active" : ""}`}
            onClick={(e) => handleClick(e, item)}
            aria-pressed={activeId === item.id}
          >
            <span className="mpnav__chip-icon">{item.icon}</span>
            <span className="mpnav__chip-label">{item.label}</span>
            {activeId === item.id && <span className="mpnav__underline" />}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default MarketplaceNav;

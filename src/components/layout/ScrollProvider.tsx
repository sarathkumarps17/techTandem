"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

type ScrollContextType = {
  activeSection: number;
  scrollToSection: (index: number) => void;
  registerSection: (id: string, ref: React.RefObject<HTMLElement>) => void;
  sections: string[];
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState(0);
  const [sections, setSections] = useState<string[]>([]);
  const sectionRefs = useRef<Map<string, React.RefObject<HTMLElement>>>(
    new Map()
  );
  const scrollingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback(
    (index: number) => {
      if (scrollingRef.current) return;
      scrollingRef.current = true;
      setActiveSection(index);
      const sectionId = sections[index];
      const sectionRef = sectionRefs.current.get(sectionId);
      sectionRef?.current?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
      setTimeout(() => {
        scrollingRef.current = false;
      }, 500);
    },
    [sections]
  );

  const registerSection = useCallback(
    (id: string, ref: React.RefObject<HTMLElement>) => {
      setSections((prev) => {
        if (!prev.includes(id)) {
          sectionRefs.current.set(id, ref);
          return [...prev, id];
        }
        return prev;
      });
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollingRef.current) return;

      // Use deltaY for vertical scroll direction
      const delta = e.deltaY;

      // Reverse the logic: positive delta (scroll down) goes to next section
      const newIndex =
        delta > 0
          ? Math.min(activeSection + 1, sections.length - 1)
          : Math.max(activeSection - 1, 0);

      scrollToSection(newIndex);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection, sections, scrollToSection]);

  const contextValue = React.useMemo(
    () => ({
      activeSection,
      scrollToSection,
      registerSection,
      sections,
    }),
    [activeSection, scrollToSection, registerSection, sections]
  );

  return (
    <ScrollContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className="overflow-x-hidden overflow-y-hidden whitespace-nowrap w-screen h-screen"
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
}

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

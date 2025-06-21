"use client"
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      setIsVisible(scrollTop > viewportHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer"
        >
          <p className="font-medium underline underline-offset-4 tracking-wide text-base md:text-[20px]">
            Back to top
          </p>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

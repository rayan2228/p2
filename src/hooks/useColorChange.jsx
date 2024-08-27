import { useEffect } from "react";

const useColorChange = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navbar = document.querySelector("header");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = window.getComputedStyle(
              entry.target
            ).backgroundColor;
            navbar.style.backgroundColor = bgColor;
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};

export default useColorChange;

import { useEffect, useState, useRef } from "react";

const MAX_POINTS = 100;
const DECREMENT = 15;

export default function useActivityMeter() {
  const [points, setPoints] = useState(MAX_POINTS);

  const activityTracker = useRef({
    scrolled: false,
    visitedRoutes: new Set(),
  });

  const incrementPoints = () => {
    setPoints((prev) => {
      if (prev >= MAX_POINTS) return prev; 
      return prev + 1;
    });
  };

  useEffect(() => {
    const decrementPoints = () => {
      setPoints((prev) => {
        if (prev - DECREMENT <= 0) {
          activityTracker.current = {
            scrolled: false,
            visitedRoutes: new Set(),
          };
          return MAX_POINTS;
        }
        return prev - DECREMENT;
      });
    };

    const handleClick = (e) => {
      const link = e.target.closest("[data-activity='true']");
      if (!link) return;

      const route = link.getAttribute("href");

      if (!activityTracker.current.visitedRoutes.has(route)) {
        activityTracker.current.visitedRoutes.add(route);
        decrementPoints();
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return { points, incrementPoints };
}

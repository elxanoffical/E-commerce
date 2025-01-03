import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get current path

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when path changes
  }, []);

  return null; // No UI element needed
};

export default ScrollToTop;

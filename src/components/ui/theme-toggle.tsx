
import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    // Ensure light mode is always active
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  // Return null to hide the toggle from UI
  return null;
}

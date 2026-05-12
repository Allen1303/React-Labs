import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggleBtn() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 w-10 h-10 rounded-full  shadow-sm shadow-sky-300 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6  text-amber-500 " />
      ) : (
        <Moon className="w-6 h-6  text-blue-500 " />
      )}
    </button>
  );
}

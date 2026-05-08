import { Sun, Moon } from "lucide-react";

export default function ThemeToggleBtn() {
  return (
    <button
      type="button"
      className="p-1.5 w-14 h-7 rounded-full bg-white shadow-sm shadow-sky-300 text-amber-500"
    >
      <Sun className="w-4 h-4" />
    </button>
  );
}

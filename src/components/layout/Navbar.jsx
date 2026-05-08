import SignOutBtn from "../ui/SignOutBtn";
import { LayoutTemplate } from "lucide-react";

export default function Navbar({ user, onSignOut }) {
  console.log("user in navbar", user);
  const navItems = ["Home", "About", "Contact"];

  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-md z-10">
      <div className="flex items-center gap-2 flex-1">
        {/*Logo + Logo Text*/}
        <LayoutTemplate className="text-sky-600 w-8 h-8" />
        <p className="text-xl font-semibold">Brand</p>
      </div>
      <div className="flex flex-1 justify-end items-center gap-8">
        <ul className="flex flex-1 justify-center items-center gap-12 ">
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {/* Sign Out Button goes here..*/}
        <SignOutBtn onClick={onSignOut}>Sign out</SignOutBtn>
        {/* Toggle Button goes here..*/}
        <img
          src="#"
          alt="Pic"
          className="w-12 h-12 rounded-full ring-2 ring-slate-400 ring-offset-2"
        />
        <span className="text-sm font-medium text-slate-700">{user}</span>
      </div>
    </nav>
  );
}

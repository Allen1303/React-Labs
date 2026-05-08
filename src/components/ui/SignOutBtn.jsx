export default function SignOutBtn({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-base text-slate-400  hover:text-sky-400 hover:underline underline-offset-6 decoration-2 transition cursor-pointer whitespace-nowrap"
    >
      {children}
    </button>
  );
}

// Dashboard component is the Page wrapper
import Navbar from "./Navbar";
import Hero from "./Hero";
export default function Dashboard({ user, onSignOut }) {
  console.log("user in dashboard:", user);
  return (
    <div>
      {/*Navbar component*/}
      <Navbar user={user} onSignOut={onSignOut} />
      <div className="w-screen mx-auto px-4 pt-4 flex flex-col items-center gap-6">
        {/*Hero component*/}
        <Hero />
      </div>
    </div>
  );
}

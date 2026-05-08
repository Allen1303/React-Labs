import { useState } from "react";
import LoginPage from "./components/login-pages/LoginPage";
import Dashboard from "./components/layout/Dashboard";

// TODO: Refactor App.jsx resonsibilities to only render component
function App() {
  const [user, setUser] = useState(null);
  console.log("user in app:", user);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Dashboard is the parent passing the user prop down to Navbar*/}
      {user ? <Dashboard user={user} onSignOut={() => setUser(null)} /> : <LoginPage onLogin={setUser} />}
    </div>
  );
}
export default App;

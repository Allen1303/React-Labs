import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import LoginPage from "./components/login-pages/LoginPage";
import Dashboard from "./components/layout/Dashboard";

// TODO: Refactor App.jsx resonsibilities to only render component
function App() {
  const [user, setUser] = useState(null);
  console.log("user in app:", user);
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${theme === "dark" ? "dark" : ""}`}
    >
      {/* Dashboard is the parent passing the user prop down to Navbar*/}
      {user ? (
        <Dashboard user={user} onSignOut={() => setUser(null)} />
      ) : (
        <LoginPage onLogin={setUser} />
      )}
    </div>
  );
}
export default App;

import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        {user?.role === "Admin" && <a href="/settings">Settings</a>}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span>{user?.username}</span>
        <span className={`pill pill-${user?.role.toLowerCase()}`}>{user?.role}</span>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </nav>
  );
}
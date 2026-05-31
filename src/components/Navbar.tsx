import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        {user?.role === "Admin" && <Link to="/settings">Settings</Link>}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span>{user?.username}</span>
        <span className={`pill pill-${user?.role.toLowerCase()}`}>{user?.role}</span>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </nav>
  );
}
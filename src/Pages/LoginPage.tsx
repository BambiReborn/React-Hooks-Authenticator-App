import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<"Admin" | "Editor" | "Viewer">("Viewer");
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    if (!username.trim()) { setError("Please enter a username."); return; }
    login(username.trim(), role);
    navigate("/dashboard");
  };

  return (
    <div className="login-wrap">
      <div className="login-card">
        <h1>Sign in</h1>
        <div className="field">
          <label>Username</label>
          <input
            placeholder="example.name"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Role</label>
          <select value={role} onChange={e => setRole(e.target.value as "Admin" | "Editor" | "Viewer")}>
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </div>
        {error && <p className="error">{error}</p>}
        <button className="btn-primary" onClick={handleLogin}>Sign in</button>
      </div>
    </div>
  );
}
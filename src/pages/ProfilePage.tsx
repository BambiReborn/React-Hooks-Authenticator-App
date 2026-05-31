import { useAuth } from "../AuthContext";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const { user } = useAuth();
  return (
    <div>
      <Navbar />
      <div className="page">
        <h1>Profile</h1>
        <div className="panel">
          <div className="panel-row"><span>Username</span><span>{user?.username}</span></div>
          <div className="panel-row">
            <span>Role</span>
            <span className={`pill pill-${user?.role.toLowerCase()}`}>{user?.role}</span>
          </div>
          <div className="panel-row"><span>Status</span><span>Active</span></div>
          <div className="panel-row"><span>Email</span><span>{user?.username.toLowerCase()}@example.com</span></div>
        </div>
      </div>
    </div>
  );
}
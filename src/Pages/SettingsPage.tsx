import { useAuth } from "../AuthContext";
import Navbar from "../components/Navbar";

export default function SettingsPage() {
  const { user } = useAuth();

  if (user?.role !== "Admin") {
    return (
      <div>
        <Navbar />
        <div className="page denied">
          <h2>Access denied</h2>
          <p>Settings are only available to Admin users.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="page">
        <h1>Settings</h1>
        <div className="panel">
          <div className="panel-row"><span>Email alerts</span><button className="btn-sm">Toggle</button></div>
          <div className="panel-row"><span>Two-factor auth</span><button className="btn-sm">Toggle</button></div>
          <div className="panel-row"><span>API access</span><button className="btn-sm">Toggle</button></div>
        </div>
      </div>
    </div>
  );
}
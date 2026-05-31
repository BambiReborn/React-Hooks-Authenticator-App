import { useAuth } from "../AuthContext";
import Navbar from "../components/Navbar";

function AdminPanel() {
  return (
    <div className="panel">
      <h2>Admin controls</h2>
      <div className="cards">
        <div className="card"><div className="card-label">Total users</div><div className="card-value">1,284</div></div>
        <div className="card"><div className="card-label">Active sessions</div><div className="card-value">47</div></div>
        <div className="card"><div className="card-label">Server load</div><div className="card-value">23%</div></div>
        <div className="card"><div className="card-label">Errors today</div><div className="card-value">3</div></div>
      </div>
      <div className="panel-row"><span>Maintenance mode</span><button className="btn-sm">Toggle</button></div>
      <div className="panel-row"><span>New signups</span><button className="btn-sm">Toggle</button></div>
      <div className="panel-row"><span>Beta features</span><button className="btn-sm">Toggle</button></div>
    </div>
  );
}

function EditorPanel() {
  return (
    <div className="panel">
      <h2>Content editor</h2>
      <div className="panel-row"><span>Getting started with React</span><button className="btn-sm">Edit</button></div>
      <div className="panel-row"><span>Understanding hooks</span><button className="btn-sm">Edit</button></div>
      <div className="panel-row"><span>State management</span><button className="btn-sm">Edit</button></div>
    </div>
  );
}

function ViewerPanel() {
  return (
    <div className="panel">
      <h2>Reports</h2>
      <div className="cards">
        <div className="card"><div className="card-label">Page views</div><div className="card-value">18,420</div></div>
        <div className="card"><div className="card-label">Visitors</div><div className="card-value">3,901</div></div>
        <div className="card"><div className="card-label">Avg. session</div><div className="card-value">2m 14s</div></div>
      </div>
      <p>Read-only view — contact an editor to make changes.</p>
    </div>
  );
}

export default function DashboardPage() {
  const { user } = useAuth();
  return (
    <div>
      <Navbar />
      <div className="page">
        <h1>Welcome, {user?.username}</h1>
        <p>Logged in as {user?.role}</p>
        <br />
        {user?.role === "Admin"  && <AdminPanel />}
        {user?.role === "Editor" && <EditorPanel />}
        {user?.role === "Viewer" && <ViewerPanel />}
      </div>
    </div>
  );
}
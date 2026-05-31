import { createContext, useContext, useState, useCallback } from "react";

interface User {
  username: string;
  role: "Admin" | "Editor" | "Viewer";
}

interface AuthContextType {
  user: User | null;
  login: (username: string, role: "Admin" | "Editor" | "Viewer") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => useContext(AuthContext)!;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const login = useCallback((username: string, role: "Admin" | "Editor" | "Viewer") => setUser({ username, role }), []);
  const logout = useCallback(() => setUser(null), []);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
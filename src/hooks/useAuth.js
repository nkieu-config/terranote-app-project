import { useContext } from "react";
import { AuthContext } from "../contexts/FakeAuthContext";

// Custom hook to use the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

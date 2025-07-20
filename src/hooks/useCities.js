import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

// Custom hook to access the CitiesContext
export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of its Provider");
  return context;
}

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("This Must be Inside the provider ");
  }
  return context;
};

export default useCounter;

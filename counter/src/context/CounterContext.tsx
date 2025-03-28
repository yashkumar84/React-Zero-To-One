import { createContext } from "react";

interface CounterContextType {
  count: number;
  inc: () => void;
  dec: () => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);



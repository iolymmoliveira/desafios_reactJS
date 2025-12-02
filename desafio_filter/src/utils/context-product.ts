import { createContext } from "react";

export type ContextCountProducts = {
  contextCountProducts: number;
  setContextCountProducts: (ContextCountProducts: number) => void;
};

export const ContextCounterProduct = createContext<ContextCountProducts>({
  contextCountProducts: 0,
  setContextCountProducts: () => {},
});
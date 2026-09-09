"use client";

import { createContext, useContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type GlobalCounterContextValue = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

const GlobalCounterContext = createContext<GlobalCounterContextValue | null>(null);
const storageKey = "react-fundamentals-global-counter";

export function GlobalCounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    const storedCount = sessionStorage.getItem(storageKey);
    if (storedCount !== null) {
      const parsedCount = Number(storedCount);
      if (!Number.isNaN(parsedCount)) {
        return parsedCount;
      }
    }

    return 0;
  });

  useEffect(() => {
    sessionStorage.setItem(storageKey, String(count));
  }, [count]);

  return <GlobalCounterContext.Provider value={{ count, setCount }}>{children}</GlobalCounterContext.Provider>;
}

export function useGlobalCounter() {
  const context = useContext(GlobalCounterContext);

  if (!context) {
    throw new Error("useGlobalCounter must be used within GlobalCounterProvider");
  }

  return context;
}

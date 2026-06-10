import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  // No 3D model — loading screen is not needed
  const [isLoading] = useState(false);

  const value: LoadingType = {
    isLoading,
    setIsLoading: () => {},
    setLoading: () => {},
  };

  useEffect(() => {
    // Fire entrance animations as soon as the page mounts
    import("../components/utils/initialFX").then((module) => {
      if (module.initialFX) {
        setTimeout(() => module.initialFX(), 100);
      }
    });
  }, []);

  return (
    <LoadingContext.Provider value={value}>
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

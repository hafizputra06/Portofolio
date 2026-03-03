"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-300",
        !isVisible && "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative mb-8">
        <div className="flex items-center justify-center">
          <div className="relative">
            <span className="text-6xl font-bold text-primary">&lt;</span>
            <span className="text-6xl font-bold text-foreground">DEV</span>
            <span className="text-6xl font-bold text-primary">/&gt;</span>
          </div>
        </div>
      </div>

      <div className="h-1 w-48 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-sm text-muted-foreground font-mono">
        {progress}%
      </p>
    </div>
  );
}

import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 sm:px-10 lg:px-16", className)} {...props}>
      {children}
    </div>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: "sm" | "md" | "lg";
}

export function Section({ children, className, spacing = "md", ...props }: SectionProps) {
  const spacings = {
    sm: "py-8",
    md: "py-16",
    lg: "py-24",
  };

  return (
    <section className={cn(spacings[spacing], className)} {...props}>
      {children}
    </section>
  );
}

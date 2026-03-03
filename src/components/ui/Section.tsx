import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, dark = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-20 md:py-24 lg:py-32",
          dark && "bg-secondary",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4">{children}</div>
      </section>
    );
  }
);

Section.displayName = "Section";

const SectionHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mb-12 text-center", className)}
      {...props}
    />
  )
);

SectionHeader.displayName = "SectionHeader";

const SectionTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "text-3xl font-bold md:text-4xl lg:text-5xl",
        className
      )}
      {...props}
    />
  )
);

SectionTitle.displayName = "SectionTitle";

const SectionDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "mx-auto mt-4 max-w-2xl text-muted-foreground",
        className
      )}
      {...props}
    />
  )
);

SectionDescription.displayName = "SectionDescription";

export { Section, SectionHeader, SectionTitle, SectionDescription };

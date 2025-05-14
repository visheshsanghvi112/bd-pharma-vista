
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cn } from "@/lib/utils"
import React from "react"

interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
  hoverEffect?: "scale" | "rotate" | "pulse" | "none";
  fadeIn?: boolean;
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ className, hoverEffect = "none", fadeIn = false, ...props }, ref) => {
  const hoverClasses = {
    scale: "transition-transform duration-500 hover:scale-105",
    rotate: "transition-transform duration-500 hover:rotate-2",
    pulse: "animate-pulse-subtle",
    none: "",
  };

  return (
    <AspectRatioPrimitive.Root
      ref={ref}
      className={cn(
        fadeIn && "animate-fade-in", 
        hoverEffect && hoverClasses[hoverEffect],
        className
      )}
      {...props}
    />
  );
});

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };

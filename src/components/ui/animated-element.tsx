
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export type AnimationVariant = 
  | "fade-in"
  | "fade-in-left"
  | "fade-in-right"
  | "slide-up"
  | "slide-down"
  | "zoom-in"
  | "bounce-in"
  | "rotate-in"
  | "none";

export interface AnimatedElementProps extends React.HTMLAttributes<HTMLDivElement> {
  animation: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
  asChild?: boolean;
}

export const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(
  ({ 
    animation = "fade-in",
    delay = 0,
    duration,
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "0px",
    className,
    children,
    ...props
  }, forwardedRef) => {
    const { ref, isVisible } = useIntersectionObserver({
      threshold,
      rootMargin,
      triggerOnce
    });

    // Combine the forwarded ref with our intersection observer ref
    const setRefs = (element: HTMLDivElement) => {
      // Assign to local ref
      ref.current = element;
      
      // Forward the ref
      if (typeof forwardedRef === "function") {
        forwardedRef(element);
      } else if (forwardedRef) {
        forwardedRef.current = element;
      }
    };

    // If animation is none, just render the children
    if (animation === "none") {
      return <div ref={setRefs} className={className} {...props}>{children}</div>;
    }

    return (
      <div
        ref={setRefs}
        className={cn(className)}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : undefined,
          transition: `opacity ${duration || 500}ms, transform ${duration || 500}ms`,
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
        }}
        {...props}
      >
        <div 
          className={cn(
            isVisible ? `animate-${animation}` : "",
            "will-change-transform"
          )}
          style={{ 
            animationDelay: `${delay}ms`,
            animationDuration: duration ? `${duration}ms` : undefined 
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

AnimatedElement.displayName = "AnimatedElement";

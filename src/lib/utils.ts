
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type AnimationDelay = {
  children: React.ReactNode[];
  baseDelay?: number;
  delayIncrement?: number;
};

export function getStaggeredDelay(index: number, baseDelay = 100, delayIncrement = 100): number {
  return baseDelay + (index * delayIncrement);
}

export function staggeredChildren({ children, baseDelay = 100, delayIncrement = 100 }: AnimationDelay) {
  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;
    
    return React.cloneElement(child, {
      style: {
        ...child.props.style,
        animationDelay: `${baseDelay + (index * delayIncrement)}ms`,
      },
    });
  });
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

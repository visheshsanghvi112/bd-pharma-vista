
import { cn } from "@/lib/utils";

export type NavigationLink = {
  name: string;
  path: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
};

export function getNavLinkClassName({
  isActive,
  className,
}: {
  isActive: boolean;
  className?: string;
}) {
  return cn(
    "text-sm font-medium transition-colors hover:text-primary relative",
    {
      "text-primary after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary": isActive,
      "text-muted-foreground": !isActive,
    },
    className
  );
}

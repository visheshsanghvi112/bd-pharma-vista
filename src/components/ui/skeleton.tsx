
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  shimmer = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { shimmer?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-md bg-muted animate-pulse",
        shimmer && "relative overflow-hidden",
        className
      )}
      {...props}
    >
      {shimmer && (
        <div
          className="absolute inset-0 bg-shimmer-gradient animate-shimmer"
          style={{ width: '200%' }}
        />
      )}
    </div>
  )
}

export { Skeleton }

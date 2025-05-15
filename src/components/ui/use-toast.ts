
import { useToast, toast } from "@/hooks/use-toast";

// Enhanced toast variants
const enhancedToast = {
  success: (message: string) => {
    toast({
      title: "Success",
      description: message,
      variant: "default",
      className: "bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-700/50 text-green-800 dark:text-green-300",
    });
  },
  error: (message: string) => {
    toast({
      title: "Error",
      description: message,
      variant: "destructive",
    });
  },
  info: (message: string) => {
    toast({
      title: "Information",
      description: message,
      variant: "default",
      className: "bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700/50 text-blue-800 dark:text-blue-300",
    });
  },
  warning: (message: string) => {
    toast({
      title: "Warning",
      description: message,
      variant: "default",
      className: "bg-amber-50 border-amber-200 dark:bg-amber-900/30 dark:border-amber-700/50 text-amber-800 dark:text-amber-300",
    });
  }
};

export { useToast, toast, enhancedToast };

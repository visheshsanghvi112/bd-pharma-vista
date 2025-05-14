
import { Loader } from "lucide-react";

export const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4 px-8 py-10 bg-white rounded-2xl shadow-3d animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-pharma-light rounded-full animate-spin"></div>
          </div>
          <Loader className="h-12 w-12 animate-pulse text-pharma-navy" />
        </div>
        <p className="text-pharma-navy font-medium">Loading...</p>
      </div>
    </div>
  );
};


import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

const StatCard = ({ icon: Icon, title, subtitle }: StatCardProps) => {
  return (
    <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-primary dark:text-primary-light" />
      </div>
      <h3 className="text-2xl font-bold text-pharma-navy dark:text-white mb-2">{title}</h3>
      <p className="text-black dark:text-white">{subtitle}</p>
    </div>
  );
};

export default StatCard;

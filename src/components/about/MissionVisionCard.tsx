
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type MissionVisionProps = {
  title: "Mission" | "Vision";
  content: string;
  className?: string;
}

const MissionVisionCard = ({ title, content, className = "" }: MissionVisionProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardHeader className="space-y-2">
        <div className="w-12 h-12 rounded-full bg-pharma-light flex items-center justify-center group-hover:bg-pharma-navy transition-colors duration-300">
          <Star className="w-6 h-6 text-pharma-navy group-hover:text-white transition-colors duration-300" />
        </div>
        <CardTitle className="text-2xl text-pharma-navy">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  );
};

export default MissionVisionCard;

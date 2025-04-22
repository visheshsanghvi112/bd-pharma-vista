
import { User, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type DirectorProps = {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
}

const DirectorCard = ({ name, role, description, imageUrl }: DirectorProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-pharma-light flex items-center justify-center">
            <User className="w-20 h-20 text-pharma-navy opacity-20" />
          </div>
        )}
      </div>
      <CardHeader className="flex flex-col items-center space-y-2">
        <h3 className="text-xl font-bold text-pharma-navy">{name}</h3>
        <div className="flex items-center gap-2 text-gray-600">
          <Briefcase className="w-4 h-4" />
          <span>{role}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

export default DirectorCard;

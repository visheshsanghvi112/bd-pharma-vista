
import { Calendar, Star, Award, List, ArrowRight, Shield, Globe, Zap, Heart, CheckCircle } from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";
import { getStaggeredDelay } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "WHO-GMP certified manufacturing with rigorous quality control processes",
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description: "Extensive network serving healthcare providers in 50+ countries",
    color: "from-green-500 to-emerald-500",
    iconColor: "text-green-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    icon: Zap,
    title: "Innovation Focus",
    description: "Cutting-edge R&D facilities developing next-generation pharmaceuticals",
    color: "from-purple-500 to-violet-500",
    iconColor: "text-purple-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
  },
  {
    icon: Heart,
    title: "Healthcare Mission",
    description: "Dedicated to improving global health through quality medicine",
    color: "from-red-500 to-pink-500",
    iconColor: "text-red-500",
    bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-pharma-navy/10 text-pharma-navy border-pharma-navy/20 mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
            Comprehensive Pharmaceutical Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of pharmaceutical manufacturing and export services to meet your specific healthcare needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={service.title} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-pharma-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Button 
                  variant="ghost"
                  size="sm"
                  className="group/btn hover:bg-pharma-navy/10 text-pharma-navy hover:text-pharma-navy"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-pharma-navy/30 hover:bg-pharma-navy/5 text-pharma-navy hover:text-pharma-navy px-8 py-6">
            <NavLink to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;


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
    color: "from-pharma-navy to-primary",
    iconColor: "text-pharma-navy",
    bgColor: "bg-gradient-to-br from-pharma-light to-pharma-lighter",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description: "Extensive network serving healthcare providers in 50+ countries",
    color: "from-primary to-primary-light",
    iconColor: "text-primary",
    bgColor: "bg-gradient-to-br from-pharma-lighter to-white",
  },
  {
    icon: Zap,
    title: "Innovation Focus",
    description: "Cutting-edge R&D facilities developing next-generation pharmaceuticals",
    color: "from-primary-light to-accent",
    iconColor: "text-primary-light",
    bgColor: "bg-gradient-to-br from-pharma-light to-secondary",
  },
  {
    icon: Heart,
    title: "Healthcare Mission",
    description: "Dedicated to improving global health through quality medicine",
    color: "from-pharma-navy to-primary-dark",
    iconColor: "text-pharma-navy",
    bgColor: "bg-gradient-to-br from-secondary to-pharma-light",
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-24 bg-gradient-section-subtle relative overflow-hidden">
      {/* Premium gradient glow */}
      <div className="absolute inset-0 bg-gradient-glow-center pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-pharma-navy/10 text-pharma-navy border-pharma-navy/20 mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
            Comprehensive Pharmaceutical Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of pharmaceutical manufacturing and export services to meet your specific healthcare needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={service.title} className="card-premium-glow group relative overflow-hidden border-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-pharma-navy mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
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

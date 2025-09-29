
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Shield, Globe, Award, Users, TrendingUp, CheckCircle, Zap, Heart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Seo from "@/components/Seo";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Immediate debug test
  console.log('🔥 Index component rendering...');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log('🚀 Index component mounted - starting video debugging...');
    
    // Test video file accessibility
    console.log('🔍 Testing video file accessibility...');
    
    // Test Final Comp_1.mp4
    fetch('/lovable-uploads/Final Comp_1.mp4', { method: 'HEAD' })
      .then(response => {
        console.log('✅ Final Comp_1.mp4 accessible:', response.status, response.statusText);
        if (response.status === 200) {
          console.log('📁 Final Comp_1.mp4 file size:', response.headers.get('content-length'));
        }
      })
      .catch(error => {
        console.error('❌ Final Comp_1.mp4 not accessible:', error);
      });
    
    // Test Medical Supplies video
    fetch('/lovable-uploads/0_Medical Supplies_First Aid Kit_3840x2160.mp4', { method: 'HEAD' })
      .then(response => {
        console.log('✅ Medical Supplies video accessible:', response.status, response.statusText);
        if (response.status === 200) {
          console.log('📁 Medical Supplies video file size:', response.headers.get('content-length'));
        }
      })
      .catch(error => {
        console.error('❌ Medical Supplies video not accessible:', error);
      });
    
    // Check if videos exist in DOM
    setTimeout(() => {
      const videos = document.querySelectorAll('video');
      console.log('🎬 Found videos in DOM:', videos.length);
      videos.forEach((video, index) => {
        console.log(`Video ${index + 1}:`, {
          src: video.src,
          currentSrc: video.currentSrc,
          readyState: video.readyState,
          networkState: video.networkState,
          error: video.error
        });
      });
    }, 2000);
    
    // Start loading video after a short delay to improve initial page load
    const timer = setTimeout(() => {
      const video = document.querySelector('video');
      if (video) {
        console.log('🔄 Starting video preload...');
        video.preload = 'metadata';
        video.load();
      } else {
        console.error('❌ No video element found in DOM');
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    console.log('🎥 Hero video loaded successfully');
    setIsVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = (e: any) => {
    console.error('❌ Hero video loading error:', e);
    console.error('Video error details:', {
      error: e.target.error,
      networkState: e.target.networkState,
      readyState: e.target.readyState
    });
    setVideoError(true);
    setIsVideoLoaded(false);
  };

  const handleVideoLoadStart = () => {
    console.log('🔄 Hero video loading started');
  };

  const handleVideoCanPlay = () => {
    console.log('▶️ Hero video can play');
  };

  const stats = [
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "25+", label: "Years Experience", icon: Award },
    { number: "1000+", label: "Products", icon: Shield },
    { number: "99.9%", label: "Quality Rate", icon: Star }
  ];

  const features = [
    {
      icon: Shield,
      title: "WHO-GMP Certified",
      description: "Internationally recognized quality standards",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Serving healthcare providers worldwide",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Cutting-edge pharmaceutical research",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Heart,
      title: "Healthcare Mission",
      description: "Improving lives through quality medicine",
      color: "from-red-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      content: "Baker & Davis has consistently delivered pharmaceutical products of exceptional quality, meeting our strict standards and timelines.",
      author: "Dr. Sarah Johnson",
      role: "Chief Medical Officer, Global Health Network",
      rating: 5
    },
    {
      content: "Their commitment to quality and compliance has made them our trusted partner for over 5 years now.",
      author: "Michael Chen",
      role: "Operations Director, International Distributor",
      rating: 5
    },
    {
      content: "BD's export services are unmatched in reliability and regulatory documentation, making international business seamless.",
      author: "Dr. Elena Rodriguez",
      role: "CEO, European Pharmaceutical Group",
      rating: 5
    }
  ];

  return (
    <>
      <Seo 
        title="Baker & Davis - Global Pharmaceutical Leader"
        description="Welcome to Baker & Davis - Leading pharmaceutical manufacturer and global exporter. Discover premium healthcare solutions and innovative pharmaceutical products."
      />
      
      <div className="min-h-screen flex flex-col">
        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image (Always visible) */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg')"
            }}
          />
          
          {/* Video Background - Overlay when loaded */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onLoadStart={handleVideoLoadStart}
              onLoadedData={handleVideoLoad}
              onCanPlay={handleVideoCanPlay}
              onError={handleVideoError}
              onProgress={() => console.log('📊 Hero video progress')}
              onWaiting={() => console.log('⏳ Hero video waiting')}
              onStalled={() => console.log('🔄 Hero video stalled')}
              style={{ 
                opacity: isVideoLoaded ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            >
              <source src="/lovable-uploads/Final Comp_1.mp4" type="video/mp4" />
              <source src="/lovable-uploads/0_Medical Supplies_First Aid Kit_3840x2160.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-4 py-2">
                    <Star className="w-4 h-4 mr-2" />
                    Trusted by 50+ Countries
                  </Badge>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Excellence in
                    <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Global Pharmaceuticals
                    </span>
                </h1>
                
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                    Setting new standards in pharmaceutical excellence with innovative research and global healthcare solutions.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <NavLink to="/about" className="flex items-center gap-3">
                      Discover Our Story
                      <ArrowRight size={20} />
                    </NavLink>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                    <NavLink to="/contact" className="flex items-center gap-3">
                      <Play size={20} />
                      Watch Our Process
                    </NavLink>
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl transform rotate-3"></div>
                  <Card className="relative bg-white/10 backdrop-blur-md border-white/20 rounded-3xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">Quality Assured</h3>
                            <p className="text-gray-300 text-sm">WHO-GMP Certified</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <Globe className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">Global Reach</h3>
                            <p className="text-gray-300 text-sm">50+ Countries</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">25+ Years</h3>
                            <p className="text-gray-300 text-sm">Industry Experience</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Video Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
                <Play className="w-4 h-4 mr-2" />
                Medical Excellence
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
                Our Medical Supplies & Equipment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of medical supplies and first aid equipment designed for healthcare professionals worldwide.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <AspectRatio ratio={16/9}>
                  <video
                    poster="/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg"
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    onLoadStart={() => console.log('🔄 Medical supplies video loading started')}
                    onLoadedData={() => console.log('🎥 Medical supplies video loaded')}
                    onCanPlay={() => console.log('▶️ Medical supplies video can play')}
                    onError={(e) => {
                      console.error('❌ Medical supplies video error:', e);
                      console.error('Medical video error details:', {
                        error: e.target.error,
                        networkState: e.target.networkState,
                        readyState: e.target.readyState
                      });
                    }}
                    onProgress={() => console.log('📊 Medical supplies video progress')}
                    onWaiting={() => console.log('⏳ Medical supplies video waiting')}
                    onStalled={() => console.log('🔄 Medical supplies video stalled')}
                  >
                    <source src="/lovable-uploads/0_Medical Supplies_First Aid Kit_3840x2160.mp4" type="video/mp4" />
                    <source src="/lovable-uploads/Final Comp_1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  </AspectRatio>
                
                {/* Video overlay with play button */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-pharma-navy/10 text-pharma-navy border-pharma-navy/20 mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Our Excellence
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
                Why Choose Baker & Davis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine decades of pharmaceutical expertise with cutting-edge technology to deliver exceptional healthcare solutions worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <CardContent className="p-8 text-center relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                  </div>
                    <h3 className="text-xl font-bold text-pharma-navy mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
                <CheckCircle className="w-4 h-4 mr-2" />
                Our Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
                From Research to Global Distribution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach ensures every product meets the highest standards of quality and safety.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Research & Development",
                  description: "Cutting-edge research facilities developing innovative pharmaceutical solutions",
                  image: "/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02", 
                  title: "Quality Manufacturing",
                  description: "WHO-GMP certified facilities ensuring the highest quality standards",
                  image: "/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: "03",
                  title: "Global Distribution",
                  description: "Extensive network reaching healthcare providers worldwide",
                  image: "/lovable-uploads/female-pharmacist-writing-clipboard-examining-medications-pharmacy.jpg",
                  color: "from-purple-500 to-violet-500"
                }
              ].map((item, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {item.step}
                  </div>
                </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-pharma-navy mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        

        {/* Video Showcase Section */}
        <section className="py-24 bg-gradient-to-br from-pharma-navy via-blue-900 to-pharma-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Play className="w-4 h-4 mr-2" />
                See Us In Action
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience Our Excellence
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Take a virtual tour of our state-of-the-art pharmaceutical manufacturing facilities and see how we maintain our high-quality standards.
                </p>
              </div>
              
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <AspectRatio ratio={16/9}>
                  <video
                    poster="/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg"
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    onLoadStart={() => console.log('🔄 Video showcase loading started')}
                    onLoadedData={() => console.log('🎥 Video showcase loaded')}
                    onCanPlay={() => console.log('▶️ Video showcase can play')}
                    onError={(e) => {
                      console.error('❌ Video showcase error:', e);
                      console.error('Showcase video error details:', {
                        error: e.target.error,
                        networkState: e.target.networkState,
                        readyState: e.target.readyState
                      });
                    }}
                    onProgress={() => console.log('📊 Video showcase progress')}
                    onWaiting={() => console.log('⏳ Video showcase waiting')}
                    onStalled={() => console.log('🔄 Video showcase stalled')}
                  >
                    <source src="/lovable-uploads/Final Comp_1.mp4" type="video/mp4" />
                    <source src="/lovable-uploads/0_Medical Supplies_First Aid Kit_3840x2160.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </AspectRatio>
                
                {/* Video overlay with play button - only show when not playing */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 mb-4">
                <Star className="w-4 h-4 mr-2" />
                Client Testimonials
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
                What Our Partners Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from healthcare professionals who trust Baker & Davis for their pharmaceutical needs.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-12 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-xl font-bold text-pharma-navy mb-2">{testimonials[currentTestimonial].author}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
                </CardContent>
              </Card>
              
              {/* Testimonial indicators */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-pharma-navy' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-pharma-navy via-blue-900 to-pharma-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                <Users className="w-4 h-4 mr-2" />
                Join Our Network
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Partner with a Global Leader?
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join the many healthcare providers and distributors worldwide who trust Baker & Davis for their pharmaceutical needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <NavLink to="/contact" className="flex items-center gap-3">
                    Get Started Today
                    <ArrowRight size={20} />
                  </NavLink>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                  <NavLink to="/about" className="flex items-center gap-3">
                    Learn More About Us
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;

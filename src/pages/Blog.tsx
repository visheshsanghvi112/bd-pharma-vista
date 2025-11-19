import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Heart, Leaf, Sunrise, Apple } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  icon: any;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "lemon-honey-morning-ritual",
      title: "Start Your Day Right: The Lemon & Honey Morning Ritual",
      excerpt: "Discover the powerful health benefits of warm lemon water with honey every morning. This simple recipe can boost immunity, aid digestion, and energize your day naturally.",
      category: "Morning Wellness",
      readTime: "5 min read",
      date: "November 15, 2025",
      image: "/lovable-uploads/lemon-honey.jpg",
      icon: Sunrise
    },
    {
      id: "turmeric-golden-milk",
      title: "Golden Milk: Ancient Turmeric Recipe for Modern Health",
      excerpt: "Learn how to prepare traditional turmeric milk that fights inflammation, supports immunity, and promotes better sleep. A time-tested remedy your grandmother would approve.",
      category: "Natural Remedies",
      readTime: "4 min read",
      date: "November 12, 2025",
      image: "/lovable-uploads/turmeric-milk.jpg",
      icon: Heart
    },
    {
      id: "herbal-tea-immunity",
      title: "5 Herbal Teas to Boost Your Immunity Naturally",
      excerpt: "Explore powerful herbal tea recipes using ginger, tulsi, and cinnamon that strengthen your immune system and keep seasonal illnesses at bay.",
      category: "Immunity Boosters",
      readTime: "6 min read",
      date: "November 8, 2025",
      image: "/lovable-uploads/herbal-tea.jpg",
      icon: Leaf
    },
    {
      id: "healthy-eating-habits",
      title: "Simple Daily Habits for Long-Term Health & Wellness",
      excerpt: "Small changes make big differences. Discover easy-to-follow daily habits that promote lasting health, from mindful eating to proper hydration and stress management.",
      category: "Lifestyle",
      readTime: "7 min read",
      date: "November 5, 2025",
      image: "/lovable-uploads/healthy-habits.jpg",
      icon: Apple
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Morning Wellness", "Natural Remedies", "Immunity Boosters", "Lifestyle"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Seo 
        title="Health & Wellness Blog - Natural Remedies & Healthy Living Tips | Baker & Davis"
        description="Discover natural health remedies, wellness tips, and healthy lifestyle advice. Learn about morning rituals, herbal remedies, immunity boosters, and preventive healthcare practices."
        keywords={[
          "health blog",
          "wellness tips",
          "natural remedies",
          "healthy lifestyle",
          "preventive healthcare",
          "home remedies",
          "immunity boosters",
          "morning wellness rituals",
          "herbal medicine",
          "health awareness"
        ]}
      />
      
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pharma-navy to-primary-light text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Health & Wellness Blog
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Your guide to natural health, preventive care, and mindful living. Discover simple remedies and healthy habits for a better life.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                <p className="text-sm md:text-base text-white/95 italic">
                  <strong>Important:</strong> These wellness tips are for educational purposes and general health awareness. Always consult qualified healthcare professionals for medical advice, diagnosis, or treatment. Natural remedies complement but don't replace professional medical care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white border-b sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white flex-1">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-pharma-light/30 to-primary-light/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <post.icon className="w-24 h-24 text-pharma-navy/20" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-pharma-navy shadow-md">
                      {post.category}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-pharma-navy mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="link" className="p-0 h-auto text-pharma-navy group-hover:text-primary">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No posts found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-pharma-navy to-primary-light text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-white/90" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Healthy & Informed
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Get the latest wellness tips, natural remedies, and health awareness content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-pharma-navy hover:bg-gray-100 px-6 py-3">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Health Disclaimer */}
        <section className="py-8 bg-amber-50 border-t border-amber-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-lg font-bold text-amber-900 mb-2">Health & Medical Disclaimer</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                The content on this blog is for informational and educational purposes only and should not be construed as medical advice. 
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. 
                Never disregard professional medical advice or delay seeking it because of something you have read on this blog. 
                Natural remedies and lifestyle tips should complement, not replace, conventional medical treatment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;

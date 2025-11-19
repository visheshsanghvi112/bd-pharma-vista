import { useState } from "react";
import { Calendar, Clock, Heart, Leaf, Sunrise, Apple, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Seo from "@/components/Seo";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  fullContent: JSX.Element;
  category: string;
  readTime: string;
  date: string;
  image: string;
  icon: any;
}

const Blog = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    setEmailError("");
    
    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    // Success
    toast({
      title: "Successfully subscribed! 🎉",
      description: "Thank you for joining our wellness community. Check your inbox for updates.",
    });
    setEmail("");
  };

  const blogPosts: BlogPost[] = [
    {
      id: "lemon-honey-morning-ritual",
      title: "Start Your Day Right: The Lemon & Honey Morning Ritual",
      excerpt: "Discover the powerful health benefits of warm lemon water with honey every morning. This simple recipe can boost immunity, aid digestion, and energize your day naturally.",
      category: "Morning Wellness",
      readTime: "5 min read",
      date: "November 15, 2025",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80",
      icon: Sunrise,
      fullContent: (
        <div className="prose prose-lg max-w-none">
          <img src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1200&q=80" alt="Lemon and honey" className="w-full h-64 object-cover rounded-xl mb-6" />
          
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Starting your day with warm lemon water and honey is more than just a trendy health hack—it's an ancient practice rooted in Ayurvedic medicine that offers remarkable benefits for your body and mind.
          </p>

          <h3 className="text-2xl font-bold text-pharma-navy mt-8 mb-4 flex items-center gap-2">
            <Sunrise className="w-6 h-6" />
            Key Health Benefits
          </h3>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl mb-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Boosts Immunity:</strong> Rich in Vitamin C, lemons strengthen your immune system and help fight off infections.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Aids Digestion:</strong> The acidic nature of lemon stimulates digestive juices, while honey soothes the digestive tract.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Natural Detoxification:</strong> Helps flush toxins from your body and supports liver function.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Glowing Skin:</strong> Antioxidants and vitamin C promote healthy, radiant skin from within.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Weight Management:</strong> Supports metabolism and helps maintain healthy weight.</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-pharma-navy mt-8 mb-4">The Perfect Recipe</h3>
          
          <div className="bg-white border-2 border-pharma-light rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-pharma-navy mb-4">Ingredients</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700">• 1 cup (240ml) warm water (not boiling)</li>
              <li className="text-gray-700">• 1/2 fresh lemon (organic preferred)</li>
              <li className="text-gray-700">• 1 teaspoon raw honey</li>
            </ul>

            <h4 className="text-xl font-bold text-pharma-navy mb-4">Instructions</h4>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="text-gray-700">Heat the water to a comfortable warm temperature (not boiling).</li>
              <li className="text-gray-700">Squeeze half a lemon into the warm water.</li>
              <li className="text-gray-700">Add honey and stir well until completely dissolved.</li>
              <li className="text-gray-700">Drink immediately on an empty stomach, 20-30 minutes before breakfast.</li>
            </ol>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
            <p className="text-sm text-amber-900">
              <strong>Medical Disclaimer:</strong> Always consult with a qualified healthcare provider before starting any new health regimen, especially if you have existing health conditions or are taking medications.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "turmeric-golden-milk",
      title: "Golden Milk: Ancient Turmeric Recipe for Modern Health",
      excerpt: "Learn how to prepare traditional turmeric milk that fights inflammation, supports immunity, and promotes better sleep. A time-tested remedy your grandmother would approve.",
      category: "Natural Remedies",
      readTime: "4 min read",
      date: "November 12, 2025",
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80",
      icon: Heart,
      fullContent: (
        <div className="prose prose-lg max-w-none">
          <img src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=1200&q=80" alt="Turmeric golden milk" className="w-full h-64 object-cover rounded-xl mb-6" />
          
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Golden milk, also known as turmeric milk or "haldi doodh," is an ancient Indian beverage that's gaining worldwide popularity for its incredible anti-inflammatory and immune-boosting properties.
          </p>

          <h3 className="text-2xl font-bold text-pharma-navy mt-8 mb-4">Health Benefits</h3>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl mb-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Anti-Inflammatory:</strong> Curcumin in turmeric reduces inflammation throughout the body.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Immune Support:</strong> Strengthens immunity and helps fight infections naturally.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Better Sleep:</strong> Warm milk with turmeric promotes relaxation and restful sleep.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Joint Health:</strong> Helps reduce joint pain and stiffness.</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-pharma-navy mt-8 mb-4">Traditional Recipe</h3>
          
          <div className="bg-white border-2 border-pharma-light rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-pharma-navy mb-4">Ingredients</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700">• 1 cup milk (dairy or plant-based)</li>
              <li className="text-gray-700">• 1 teaspoon turmeric powder</li>
              <li className="text-gray-700">• 1/4 teaspoon black pepper (enhances absorption)</li>
              <li className="text-gray-700">• 1/2 teaspoon cinnamon</li>
              <li className="text-gray-700">• 1 teaspoon honey or maple syrup</li>
              <li className="text-gray-700">• Pinch of ginger (optional)</li>
            </ul>

            <h4 className="text-xl font-bold text-pharma-navy mb-4">Instructions</h4>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="text-gray-700">Heat milk in a saucepan on medium heat.</li>
              <li className="text-gray-700">Add turmeric, black pepper, cinnamon, and ginger.</li>
              <li className="text-gray-700">Whisk continuously for 5-7 minutes until hot (don't boil).</li>
              <li className="text-gray-700">Remove from heat, add honey, and enjoy warm before bed.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: "herbal-tea-immunity",
      title: "5 Herbal Teas to Boost Your Immunity Naturally",
      excerpt: "Explore powerful herbal tea recipes using ginger, tulsi, and cinnamon that strengthen your immune system and keep seasonal illnesses at bay.",
      category: "Immunity Boosters",
      readTime: "6 min read",
      date: "November 8, 2025",
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
      icon: Leaf,
      fullContent: (
        <div className="prose prose-lg max-w-none">
          <img src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1200&q=80" alt="Herbal tea" className="w-full h-64 object-cover rounded-xl mb-6" />
          
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Herbal teas are nature's medicine, packed with antioxidants, vitamins, and compounds that naturally strengthen your immune system and protect against seasonal illnesses.
          </p>

          <h3 className="text-2xl font-bold text-pharma-navy mt-8 mb-4">5 Powerful Immunity-Boosting Teas</h3>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3">1. Ginger Tea</h4>
              <p className="text-gray-700 mb-2"><strong>Benefits:</strong> Anti-inflammatory, aids digestion, fights nausea</p>
              <p className="text-gray-700"><strong>Recipe:</strong> Boil fresh ginger slices in water for 10 minutes, add honey and lemon</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3">2. Tulsi (Holy Basil) Tea</h4>
              <p className="text-gray-700 mb-2"><strong>Benefits:</strong> Adaptogenic, stress-relief, respiratory support</p>
              <p className="text-gray-700"><strong>Recipe:</strong> Steep fresh or dried tulsi leaves in hot water for 5-7 minutes</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3">3. Cinnamon Tea</h4>
              <p className="text-gray-700 mb-2"><strong>Benefits:</strong> Blood sugar regulation, antimicrobial properties</p>
              <p className="text-gray-700"><strong>Recipe:</strong> Simmer cinnamon stick in water for 15 minutes</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3">4. Green Tea with Lemon</h4>
              <p className="text-gray-700 mb-2"><strong>Benefits:</strong> Antioxidant-rich, metabolism boost, vitamin C</p>
              <p className="text-gray-700"><strong>Recipe:</strong> Steep green tea for 3 minutes, add fresh lemon juice</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3">5. Echinacea Tea</h4>
              <p className="text-gray-700 mb-2"><strong>Benefits:</strong> Immune system booster, cold prevention</p>
              <p className="text-gray-700"><strong>Recipe:</strong> Steep echinacea flowers or root in hot water for 10 minutes</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "healthy-eating-habits",
      title: "Simple Daily Habits for Long-Term Health & Wellness",
      excerpt: "Small changes make big differences. Discover easy-to-follow daily habits that promote lasting health, from mindful eating to proper hydration and stress management.",
      category: "Lifestyle",
      readTime: "7 min read",
      date: "November 5, 2025",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
      icon: Apple,
      fullContent: (
        <div className="prose prose-lg max-w-none">
          <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80" alt="Healthy eating" className="w-full h-64 object-cover rounded-xl mb-6" />
          
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            True health isn't built in a day—it's the result of consistent, small daily habits that compound over time. Here are the most impactful habits you can adopt today.
          </p>

          <h3 className="text-2xl font-bold text-pharma-navy mt-8 mb-4">Essential Daily Habits</h3>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Drink Water First Thing
              </h4>
              <p className="text-gray-700">Start your day with 1-2 glasses of water to rehydrate after sleep and kickstart your metabolism.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Eat More Whole Foods
              </h4>
              <p className="text-gray-700">Focus on fruits, vegetables, whole grains, and lean proteins. Minimize processed foods and added sugars.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Move Your Body Daily
              </h4>
              <p className="text-gray-700">Aim for 30 minutes of physical activity—walking, yoga, dancing, or gym workouts.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Prioritize Sleep
              </h4>
              <p className="text-gray-700">Get 7-8 hours of quality sleep. Maintain a consistent sleep schedule and create a relaxing bedtime routine.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Practice Mindfulness
              </h4>
              <p className="text-gray-700">Take 5-10 minutes daily for meditation, deep breathing, or simply being present.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-pharma-navy mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Regular Health Check-ups
              </h4>
              <p className="text-gray-700">Schedule annual physical exams and screenings. Prevention is better than cure.</p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
            <p className="text-sm text-amber-900">
              <strong>Remember:</strong> Start with one or two habits and build gradually. Consistency matters more than perfection. Always consult healthcare professionals for personalized advice.
            </p>
          </div>
        </div>
      )
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
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
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
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
                    
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-pharma-navy group-hover:text-primary"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read Full Article
                      <span className="ml-1">→</span>
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

        {/* Blog Post Dialog/Modal */}
        <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
          <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden flex flex-col p-0">
            <DialogHeader className="px-6 pt-6 pb-4 border-b">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-pharma-navy pr-8">
                {selectedPost?.title}
              </DialogTitle>
              <div className="flex gap-4 text-sm text-gray-500 mt-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost?.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost?.readTime}</span>
                </div>
              </div>
            </DialogHeader>
            <div className="overflow-y-auto px-6 py-6 flex-1">
              {selectedPost?.fullContent}
            </div>
          </DialogContent>
        </Dialog>

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
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSubscribe();
                      }
                    }}
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <Button 
                    onClick={handleSubscribe}
                    className="bg-white text-pharma-navy hover:bg-gray-100 px-8 py-3 whitespace-nowrap font-semibold"
                  >
                    Subscribe
                  </Button>
                </div>
                {emailError && (
                  <p className="text-sm text-red-200 mt-2 text-left">
                    ⚠ {emailError}
                  </p>
                )}
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

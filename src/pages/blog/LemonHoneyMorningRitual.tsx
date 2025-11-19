import { NavLink } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Sunrise, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const LemonHoneyMorningRitual = () => {
  return (
    <>
      <Seo 
        title="Lemon & Honey Morning Ritual - Health Benefits & Recipe | Baker & Davis Blog"
        description="Discover the powerful health benefits of warm lemon water with honey every morning. Learn the perfect recipe, timing, and health benefits of this ancient wellness practice."
        keywords={[
          "lemon honey water benefits",
          "morning wellness ritual",
          "natural immunity booster",
          "detox drink recipe",
          "digestive health"
        ]}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-96 bg-gradient-to-br from-yellow-50 to-orange-50">
          <img 
            src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1200&q=80"
            alt="Fresh lemon and honey"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto max-w-4xl">
              <NavLink to="/blog">
                <Button variant="ghost" className="text-white hover:text-white/80 mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </NavLink>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Start Your Day Right: The Lemon & Honey Morning Ritual
              </h1>
              <div className="flex gap-6 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>November 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Starting your day with warm lemon water and honey is more than just a trendy health hack—it's an ancient practice rooted in Ayurvedic medicine that offers remarkable benefits for your body and mind.
              </p>

              <h2 className="text-3xl font-bold text-pharma-navy mt-12 mb-6">Why This Simple Drink Works Wonders</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                When you wake up, your body is naturally dehydrated from hours of sleep. This golden combination of lemon and honey in warm water acts as a gentle wake-up call to your digestive system, kickstarting your metabolism and preparing your body for the day ahead.
              </p>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-pharma-navy mb-4 flex items-center gap-2">
                  <Sunrise className="w-6 h-6" />
                  Key Health Benefits
                </h3>
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
                    <span className="text-gray-700"><strong>Weight Management:</strong> Supports metabolism and helps maintain healthy weight when combined with proper diet.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-pharma-navy mt-12 mb-6">The Perfect Recipe</h2>
              
              <div className="bg-white border-2 border-pharma-light rounded-xl p-8 my-8 shadow-md">
                <h3 className="text-2xl font-bold text-pharma-navy mb-6">Ingredients</h3>
                <ul className="space-y-2 mb-8">
                  <li className="text-gray-700">• 1 cup (240ml) warm water (not boiling)</li>
                  <li className="text-gray-700">• 1/2 fresh lemon (organic preferred)</li>
                  <li className="text-gray-700">• 1 teaspoon raw honey</li>
                </ul>

                <h3 className="text-2xl font-bold text-pharma-navy mb-6">Instructions</h3>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-gray-700"><strong>Heat the water</strong> to a comfortable warm temperature (not boiling, as extreme heat destroys honey's beneficial enzymes).</li>
                  <li className="text-gray-700"><strong>Squeeze</strong> half a lemon into the warm water.</li>
                  <li className="text-gray-700"><strong>Add honey</strong> and stir well until completely dissolved.</li>
                  <li className="text-gray-700"><strong>Drink immediately</strong> on an empty stomach, 20-30 minutes before breakfast.</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-pharma-navy mt-12 mb-6">Best Practices & Tips</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Timing is Everything:</strong> For maximum benefits, consume this drink first thing in the morning on an empty stomach. Wait at least 20-30 minutes before eating breakfast to allow your body to absorb the nutrients effectively.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Use Fresh Ingredients:</strong> Always use fresh lemons and raw, unprocessed honey. Bottled lemon juice and processed honey lack many of the beneficial enzymes and nutrients.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Protect Your Teeth:</strong> Lemon juice is acidic and can erode tooth enamel over time. Use a straw to minimize contact with teeth, and rinse your mouth with plain water after drinking.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=1200&q=80"
                alt="Morning wellness routine"
                className="w-full h-96 object-cover rounded-xl my-8 shadow-lg"
              />

              <h2 className="text-3xl font-bold text-pharma-navy mt-12 mb-6">When to Consult a Healthcare Professional</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                While this natural remedy is generally safe for most people, certain conditions require medical guidance:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">• If you have GERD or acid reflux, consult your doctor as lemon may aggravate symptoms</li>
                <li className="text-gray-700">• Those with citrus allergies should avoid this drink</li>
                <li className="text-gray-700">• If you have diabetes, monitor your honey intake and consult your healthcare provider</li>
                <li className="text-gray-700">• Pregnant or nursing mothers should check with their doctor before starting any new wellness routine</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                <p className="text-sm text-amber-900">
                  <strong>Medical Disclaimer:</strong> This information is for educational purposes only and should not replace professional medical advice. Always consult with a qualified healthcare provider before starting any new health regimen, especially if you have existing health conditions or are taking medications.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-pharma-navy mt-12 mb-6">Make It a Habit</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Consistency is key to experiencing the full benefits of this morning ritual. Start with a 21-day challenge to establish the habit. Most people begin noticing increased energy, better digestion, and improved skin within the first few weeks.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Remember, this drink is a complement to—not a replacement for—a balanced diet, regular exercise, adequate sleep, and proper medical care. Use it as part of a holistic approach to wellness.
              </p>
            </div>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <NavLink to="/blog">
                <Button className="bg-pharma-navy hover:bg-pharma-navy/90">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Articles
                </Button>
              </NavLink>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default LemonHoneyMorningRitual;

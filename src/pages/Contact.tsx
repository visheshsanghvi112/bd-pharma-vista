import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import Seo from "@/components/Seo";
import { trackEvent, trackFormSubmit } from "@/lib/analytics";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track form submission with user data
    trackFormSubmit('contact_form');
    
    // Track detailed form data (PII capture)
    trackEvent('contact_form_submission', {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      inquiry_subject: formData.subject,
      message_length: formData.message.length,
      form_location: 'contact_page',
      timestamp: new Date().toISOString(),
    });
    
    // Also send to Firebase/GA4 as user properties
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('set', 'user_properties', {
        contact_name: formData.name,
        contact_email: formData.email,
      });
    }
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Seo 
        title="Contact"
        description="Get in touch with Baker & Davis pharmaceutical manufacturing and export team. Reach out for pharmaceutical inquiries, partnerships, and global distribution opportunities."
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 dark:from-primary/10 dark:to-primary/5" />
          <div className="container relative mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pharma-navy dark:text-primary-light animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 animate-fade-in">
              Get in touch with our team for inquiries about our pharmaceutical products and services
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pharma-light to-white dark:from-pharma-dark/60 dark:to-background p-8 rounded-lg group hover:shadow-lg transition-all duration-300">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 mb-6">
                  <MapPin className="h-8 w-8 text-primary dark:text-primary-light" />
                </div>
                <h3 className="text-xl font-bold text-pharma-navy dark:text-primary-light mb-4">
                  Visit Us
                </h3>
                <address className="text-gray-700 dark:text-gray-300 not-italic">
                  <p>42/44, Babu Genu Road,</p>
                  <p>Shop No. 14, 2nd Floor,</p>
                  <p>Om Shanti Co-Operative Housing Society Ltd.,</p>
                  <p>Kalbadevi, Mumbai - 400 002</p>
                </address>
              </div>

              <div className="bg-gradient-to-br from-pharma-light to-white dark:from-pharma-dark/60 dark:to-background p-8 rounded-lg text-center group hover:shadow-lg transition-all duration-300">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 mb-6">
                  <Mail className="h-8 w-8 text-primary dark:text-primary-light" />
                </div>
                <h3 className="text-xl font-bold text-pharma-navy dark:text-primary-light mb-4">
                  Email Us
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <a href="mailto:admin@bdindia.in" className="hover:underline">admin@bdindia.in</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4 transition-colors duration-300">
                  We'll respond to your inquiry within 24-48 business hours.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pharma-light to-white dark:from-pharma-dark/60 dark:to-background p-8 rounded-lg text-center group hover:shadow-lg transition-all duration-300">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 mb-6">
                  <Phone className="h-8 w-8 text-primary dark:text-primary-light" />
                </div>
                <h3 className="text-xl font-bold text-pharma-navy dark:text-primary-light mb-4">
                  Call Us
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <a href="tel:02248256677" className="hover:underline">022-48256677</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <a href="tel:02240134455" className="hover:underline">022-40134455</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4 transition-colors duration-300">
                  Monday to Friday, 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map and Form Section */}
        <section className="py-16 bg-gradient-to-br from-pharma-light to-white dark:from-pharma-dark/60 dark:to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/50 dark:bg-card/50 p-4 rounded-lg shadow-md transition-colors duration-300">
                <div className="aspect-w-16 aspect-h-9 h-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8340762335247!2d72.82382391034244!3d18.94660626010359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce0f1bda2c95%3A0xf2b4f73fb97f3c28!2sOm%20Shanti%20Co-Operative%20Housing%20Society%2C%2042%2F44%2C%20Babu%20Genu%20Rd%2C%20Kalbadevi%2C%20Mumbai%2C%20Maharashtra%20400002!5e0!3m2!1sen!2sin!4v1693329244841!5m2!1sen!2sin"
                    className="w-full h-full rounded-md"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Baker & Davis Office Location"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-card/50 p-6 rounded-lg shadow-lg backdrop-blur-sm transition-colors duration-300">
                <h2 className="text-2xl font-bold text-pharma-navy dark:text-primary-light mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-400 p-4 rounded-md mb-6 transition-colors duration-300">
                    Thank you for your message! We'll get back to you as soon as possible.
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="border-gray-300 dark:border-gray-600 dark:bg-card dark:text-white transition-colors duration-300"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="border-gray-300 dark:border-gray-600 dark:bg-card dark:text-white transition-colors duration-300"
                        />
                      </div>
                      
                      <div className="grid gap-3">
                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="border-gray-300 dark:border-gray-600 dark:bg-card dark:text-white transition-colors duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-3">
                      <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Product Inquiry"
                        required
                        className="border-gray-300 dark:border-gray-600 dark:bg-card dark:text-white transition-colors duration-300"
                      />
                    </div>
                    
                    <div className="grid gap-3">
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        required
                        className="border-gray-300 dark:border-gray-600 dark:bg-card dark:text-white transition-colors duration-300"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-pharma-navy hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-light w-full transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Business Details */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-pharma-navy dark:text-white mb-8">
                Company Information
              </h2>
              <div className="bg-gradient-to-br from-pharma-light to-white dark:from-pharma-dark/60 dark:to-background p-6 rounded-lg">
                <div className="grid gap-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-300 dark:border-gray-600 pb-4 transition-colors duration-300">
                    <span className="font-medium text-pharma-navy dark:text-primary-light transition-colors duration-300">Company Name:</span>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Baker & Davis Pvt. Ltd.</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-300 dark:border-gray-600 pb-4 transition-colors duration-300">
                    <span className="font-medium text-pharma-navy dark:text-primary-light transition-colors duration-300">GSTIN No.:</span>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">27AADCJ9014B1ZW</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-300 dark:border-gray-600 pb-4 transition-colors duration-300">
                    <span className="font-medium text-pharma-navy dark:text-primary-light transition-colors duration-300">CIN:</span>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">U74999MH2017PTC291801</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-pharma-navy dark:text-primary-light transition-colors duration-300">Drug License Nos.:</span>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">20B-MH-MZ1-557373, 21B-MH-MZ1-557374</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

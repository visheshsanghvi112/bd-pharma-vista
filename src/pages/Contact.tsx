
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Get in touch with our team for inquiries about our pharmaceutical products and services
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pharma-light p-6 rounded-lg text-center flex flex-col items-center">
              <div className="bg-pharma-navy p-4 rounded-full text-white mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-pharma-navy mb-2">Visit Us</h3>
              <address className="text-gray-700 not-italic">
                <p>42/44, Babu Genu Road,</p>
                <p>Shop No. 14, 2nd Floor,</p>
                <p>Om Shanti Co-Operative Housing Society Ltd.,</p>
                <p>Kalbadevi, Mumbai - 400 002</p>
              </address>
            </div>

            <div className="bg-pharma-light p-6 rounded-lg text-center flex flex-col items-center">
              <div className="bg-pharma-navy p-4 rounded-full text-white mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-pharma-navy mb-2">Email Us</h3>
              <p className="text-gray-700">
                <a href="mailto:admin@bdindia.in" className="hover:underline">admin@bdindia.in</a>
              </p>
              <p className="text-gray-700 mt-2">
                We'll respond to your inquiry within 24-48 business hours.
              </p>
            </div>

            <div className="bg-pharma-light p-6 rounded-lg text-center flex flex-col items-center">
              <div className="bg-pharma-navy p-4 rounded-full text-white mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-pharma-navy mb-2">Call Us</h3>
              <p className="text-gray-700">
                <a href="tel:02248256677" className="hover:underline">022-48256677</a>
              </p>
              <p className="text-gray-700">
                <a href="tel:02240134455" className="hover:underline">022-40134455</a>
              </p>
              <p className="text-gray-700 mt-2">
                Monday to Friday, 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 bg-pharma-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Google Map */}
            <div className="bg-white p-4 rounded-lg shadow-md">
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

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-pharma-navy mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                  Thank you for your message! We'll get back to you as soon as possible.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div className="grid gap-3">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Product Inquiry"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-pharma-navy hover:bg-primary-dark w-full"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-pharma-navy mb-8">Company Information</h2>
            <div className="bg-pharma-light p-6 rounded-lg">
              <div className="grid gap-4">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-300 pb-4">
                  <span className="font-medium text-pharma-navy">Company Name:</span>
                  <span className="text-gray-700">Baker & Davis Pvt. Ltd.</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-300 pb-4">
                  <span className="font-medium text-pharma-navy">GSTIN No.:</span>
                  <span className="text-gray-700">27AADCJ9014B1ZW</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-300 pb-4">
                  <span className="font-medium text-pharma-navy">CIN:</span>
                  <span className="text-gray-700">U74999MH2017PTC291801</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium text-pharma-navy">Drug License Nos.:</span>
                  <span className="text-gray-700">20B-MH-MZ1-557373, 21B-MH-MZ1-557374</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

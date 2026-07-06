"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-brand-primary py-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542621334-a2542d773e7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your next construction project? Get in touch with our expert team today for a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
            
            {/* Contact Information (Left Panel) */}
            <div className="lg:col-span-2 bg-brand-primary text-white p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-brand-accent rounded-full opacity-20 blur-3xl" />
              <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-brand-accent rounded-full opacity-20 blur-3xl" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <p className="text-gray-300 mb-12 text-lg">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-brand-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-300 text-lg">0800 123 4567</p>
                      <p className="text-gray-400 text-sm mt-1">Mon-Fri from 8am to 5pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-brand-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-300">info@houselineconstruction.co.uk</p>
                      <p className="text-gray-400 text-sm mt-1">We typically reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-brand-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Office</h3>
                      <p className="text-gray-300">123 Builder Lane</p>
                      <p className="text-gray-300">Construction City, UK</p>
                      <p className="text-gray-300">CC1 2AB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Panel) */}
            <div className="lg:col-span-3 p-10 lg:p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-primary">Message Sent!</h2>
                  <p className="text-lg text-gray-600 max-w-md">
                    Thank you for reaching out to HouseLine Construction. We have received your inquiry and will be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-brand-accent font-semibold hover:text-orange-600 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-3xl font-bold text-brand-primary mb-8">Send us a Message</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Required</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-gray-50 focus:bg-white text-gray-700"
                    >
                      <option value="">Select a service...</option>
                      <option value="new-build">New Build</option>
                      <option value="extension">Home Extension</option>
                      <option value="loft">Loft Conversion</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                      placeholder="Please describe your project..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-accent hover:bg-orange-600 text-white font-bold py-4 rounded-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>Send Message <Send className="h-5 w-5" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

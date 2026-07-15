"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Hammer, Ruler, Building, CheckCircle2 } from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const duration = 2000;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOut = progress * (2 - progress);
        setCount(Math.floor(easeOut * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "New Builds",
      description: "From concept to completion, we build bespoke homes tailored to your exact specifications.",
      icon: <Building className="h-8 w-8 text-brand-accent" />,
    },
    {
      title: "Home Extensions",
      description: "Expand your living space with our seamless, high-quality home extension services.",
      icon: <Ruler className="h-8 w-8 text-brand-accent" />,
    },
    {
      title: "Loft Conversions",
      description: "Transform your unused attic space into a beautiful, functional new room.",
      icon: <Hammer className="h-8 w-8 text-brand-accent" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-primary text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          {/* Subtle background pattern or image could go here */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Building Your Vision <br className="hidden md:block"/>
            <span className="text-brand-accent">With Excellence</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            AHA BUILDERS & DEVELOPERS is your trusted partner for premium residential and commercial building projects across the UK.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="bg-brand-accent hover:bg-orange-500 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
            >
              Get a Free Quote <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center backdrop-blur-sm"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              {...fadeIn}
              className="space-y-6"
            >
              <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-primary">Setting the Standard in Modern Construction</h3>
              <p className="text-gray-600 text-lg leading-relaxed text-balance">
                With over a decade of experience, we pride ourselves on delivering exceptional craftsmanship, unwavering integrity, and innovative solutions to every project we undertake. From minor renovations to major commercial builds, our dedicated team ensures your project is completed on time, within budget, and to the highest possible standard.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Fully licensed and insured professionals",
                  "Commitment to sustainable building practices",
                  "Transparent pricing and clear communication",
                  "Guaranteed satisfaction on every project"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="h-6 w-6 text-brand-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6">
                <Link href="/about" className="text-brand-primary font-semibold hover:text-brand-accent inline-flex items-center gap-2 transition-colors">
                  Learn more about us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">Comprehensive Construction Services</h3>
            <p className="text-gray-600 text-lg">
              We offer a wide range of building services tailored to meet the unique needs of our residential and commercial clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-brand-accent/10 hover:border-brand-accent/30 hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-brand-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Link href="/services" className="text-brand-accent font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-primary text-brand-primary font-semibold rounded-md hover:bg-brand-primary hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Our Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-primary">Featured Projects</h3>
            </div>
            <Link href="/services" className="text-brand-primary font-semibold hover:text-brand-accent inline-flex items-center gap-2 transition-colors">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Modern Luxury Home", category: "New Build", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" },
              { title: "Heritage Restoration", category: "Renovation", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" },
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-accent font-medium text-sm tracking-wider uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.category}</span>
                  <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-10 text-white/90 text-balance">
            Contact us today to discuss your ideas and receive a free, no-obligation quote from our expert team.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-brand-primary px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

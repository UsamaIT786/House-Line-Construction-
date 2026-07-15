import Link from "next/link";
import { ArrowRight, Building, Ruler, Hammer, Factory, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | AHA BUILDERS & DEVELOPERS",
  description: "Explore our comprehensive construction services including New Builds, Home Extensions, Loft Conversions, and Commercial Construction.",
};

const services = [
  {
    id: "new-builds",
    title: "New Builds",
    shortDesc: "Bespoke home construction from the ground up.",
    fullDesc: "We specialize in constructing high-quality, custom-built homes tailored to your lifestyle and specifications. From initial architectural planning to the final handover, our team manages every aspect of your new build project with precision and care.",
    icon: <Building className="h-10 w-10 text-brand-accent" />,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Architectural Design Support", "Project Management", "Sustainable Materials", "Turnkey Solutions"]
  },
  {
    id: "home-extensions",
    title: "Home Extensions",
    shortDesc: "Expand your living space seamlessly.",
    fullDesc: "Whether you need a larger kitchen, an extra bedroom, or a spacious sunroom, our home extensions are designed to blend seamlessly with your existing property. We handle all planning permissions and structural requirements.",
    icon: <Ruler className="h-10 w-10 text-brand-accent" />,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Single & Double Storey", "Kitchen Extensions", "Wraparound Extensions", "Planning Permission Help"]
  },
  {
    id: "loft-conversions",
    title: "Loft Conversions",
    shortDesc: "Transform unused attic space into beautiful rooms.",
    fullDesc: "Unlock the hidden potential in your home with a professional loft conversion. Perfect for an extra bedroom, home office, or playroom. Our experts ensure maximum space utilization while maintaining structural integrity.",
    icon: <Hammer className="h-10 w-10 text-brand-accent" />,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Dormer Conversions", "Mansard Conversions", "Velux Windows", "En-suite Installations"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-brand-light py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions delivered with exceptional craftsmanship and attention to detail.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">{service.title}</h2>
                <h3 className="text-xl font-medium text-brand-accent">{service.shortDesc}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.fullDesc}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="bg-brand-accent/10 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brand-accent" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-gray-100 mt-8">
                  <Link 
                    href={`/contact?service=${service.id}`} 
                    className="inline-flex items-center justify-center bg-brand-primary hover:bg-slate-800 text-white px-8 py-3 rounded-md font-semibold transition-colors gap-2"
                  >
                    Enquire about {service.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-accent text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Not sure which service you need?</h2>
          <p className="text-xl mb-8 text-white/90">
            Our experts are on hand to provide guidance and advice for your specific project requirements.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-brand-primary hover:bg-gray-50 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
          >
            Contact Our Team Today
          </Link>
        </div>
      </section>
    </div>
  );
}

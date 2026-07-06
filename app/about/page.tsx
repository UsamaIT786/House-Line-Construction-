import { Shield, Target, Lightbulb, Heart, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | HouseLine Construction",
  description: "Learn about HouseLine Construction's ethos, core values, and our unwavering commitment to safety and quality.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      description: "We believe in honest, transparent communication. We build trust with our clients by delivering on our promises and maintaining the highest ethical standards.",
      icon: <Heart className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Excellence",
      description: "Quality is at the heart of everything we do. We strive for perfection in every detail, ensuring the final result exceeds expectations.",
      icon: <Target className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and modern building practices to deliver efficient, sustainable, and forward-thinking construction solutions.",
      icon: <Lightbulb className="h-8 w-8 text-brand-accent" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About HouseLine Construction</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building the future with passion, precision, and purpose.
          </p>
        </div>
      </section>

      {/* Ethos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">Our Company Ethos</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  At HouseLine Construction, our ethos is built on a simple foundation: delivering exceptional construction services while treating every client's property as if it were our own.
                </p>
                <p>
                  Founded on the principles of hard work and dedication, we have grown into one of the UK's most trusted building firms. We understand that a construction project, whether it's a new home or a commercial space, is a significant investment. That's why we guide you through every step of the process with clarity and professionalism.
                </p>
                <p>
                  Our team consists of highly skilled craftsmen, architects, and project managers who share a unified vision: to create spaces that inspire and endure.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=500&auto=format&fit=crop" alt="Construction Work" className="rounded-lg shadow-md w-full h-48 object-cover" />
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format&fit=crop" alt="Architecture" className="rounded-lg shadow-md w-full h-64 object-cover" />
              </div>
              <div className="space-y-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgG_fX9OJ6FrG4otXUPAYMVGH369rSXIaoxdpx4p1ZqCMh3KBMmmX7WU&s=10" alt="Blueprint" className="rounded-lg shadow-md w-full h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=500&auto=format&fit=crop" alt="Team Meeting" className="rounded-lg shadow-md w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that drive our team and shape our work every single day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Commitment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="md:w-1/3 flex justify-center relative z-10">
              <div className="bg-white/10 p-8 rounded-full">
                <Shield className="h-32 w-32 text-brand-accent" />
              </div>
            </div>
            
            <div className="md:w-2/3 text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Safety Commitment</h2>
              <p className="text-lg text-gray-300 mb-8">
                Safety is not just a priority; it is a core value that is deeply embedded in our culture. We are committed to providing a safe and healthy working environment for all our employees, subcontractors, and the public.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Strict adherence to HSE regulations",
                  "Regular safety training & audits",
                  "Comprehensive risk assessments",
                  "Top-tier safety equipment provided",
                  "Zero-harm workplace philosophy",
                  "Fully certified site managers"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

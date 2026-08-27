import Link from "next/link";
import { HardHat, Phone, Mail, MapPin } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-brand-primary text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <HardHat className="h-8 w-8 text-brand-accent" />
              <span className="font-bold text-lg md:text-xl tracking-tight text-white">
                AHA BUILDERS <span className="text-brand-accent">& DEVELOPERS LTD</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mt-4 max-w-xs">
              Delivering excellence in construction, new builds, and extensions across the UK with integrity and innovation.
            </p>
            <div className="text-sm text-gray-400 mt-4 space-y-1">
              <p className="text-white font-medium">AHA BUILDERS & DEVELOPERS LTD</p>
              <p>Company number 16881430</p>
              <p>Company year 2025</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-brand-accent transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-accent transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-accent transition-colors text-sm">Our Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-accent transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm">New Builds</li>
              <li className="text-sm">Home Extensions</li>
              <li className="text-sm">Loft Conversions</li>
              <li className="text-sm">Commercial Construction</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm mb-1">Address</span>
                  <span className="text-sm">Unit 2B (Former Bury Social Club) Gigg Lane Bury BL9 9HR</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm mb-1">Contact Number</span>
                  <span className="text-sm">+44 7777 980881</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm mb-1">Email Address</span>
                  <span className="text-sm">info@ahaconstruction.co.uk</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 AHA BUILDERS & DEVELOPERS LTD . All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

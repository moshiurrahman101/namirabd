import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react"; // Import icons
import logo from "@/app/favicon.ico";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <Image src={logo} alt="Namira BD Logo" width={80} height={80} />
            <h2 className="text-white text-2xl font-semibold mt-2">
              Namira BD
            </h2>
            <p className="mt-2 text-sm">
              Experience excellence in luxury catering, restaurant services, and
              premium event management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-lg">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services with Links */}
          <div>
            <h3 className="text-white font-medium text-lg">Our Services</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/services/catering"
                  className="hover:text-white transition"
                >
                  Catering Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/restaurant"
                  className="hover:text-white transition"
                >
                  Restaurant
                </Link>
              </li>
              <li>
                <Link
                  href="/services/event-management"
                  className="hover:text-white transition"
                >
                  Event Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/party-venues"
                  className="hover:text-white transition"
                >
                  Party Venues
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-solutions"
                  className="hover:text-white transition"
                >
                  Corporate Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info with Icons */}
          <div className="space-y-2">
            <h3 className="text-white font-medium text-lg">Get in Touch</h3>
            <p className="mt-3 text-sm flex items-center gap-2">
              <MapPin size={16} /> Dhaka, Bangladesh
            </p>
            <p className="text-sm flex items-center gap-2">
              <Phone size={16} /> +880 1511-110242
            </p>
            <p className="text-sm flex items-center gap-2">
              <Mail size={16} /> info@namirabd.com
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Namira BD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

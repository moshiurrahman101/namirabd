import Image from "next/image";
import Link from "next/link";
import logo from "@/app/favicon.ico";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <Image src={logo} alt="Namira BD Logo" width={80} height={80}/>
            <h2 className="text-white text-2xl font-semibold">Namira BD</h2>
            <p className="mt-2 text-sm">
              Experience excellence in luxury catering, fine dining, and premium event management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-lg">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/services" className="hover:text-white transition">Our Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium text-lg">Our Services</h3>
            <ul className="mt-3 space-y-2">
              <li>Catering Services</li>
              <li>Fine Dining</li>
              <li>Event Management</li>
              <li>Party Venues</li>
              <li>Corporate Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium text-lg">Get in Touch</h3>
            <p className="mt-3 text-sm">📍 Dhaka, Bangladesh</p>
            <p className="text-sm">📞 01511-110242                                                                                                                                           </p>
            <p className="text-sm">✉️ info@namirabd.com</p>
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

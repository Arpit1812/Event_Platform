import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-20 gap-16">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start sm:justify-center sm:h-full pl-4 sm:pl-6 space-y-6">
            <Link href="/">
              <Image
                src="/assets/images/Spotlight-Logo-High-Resolution.png"
                alt="logo"
                width={160}
                height={50}
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:w-1/4 gap-4 text-center sm:text-left">
            <h4 className="text-lg font-semibold text-gray-300">Quick Links</h4>
            <Link href="/aboutus" className="text-gray-400 hover:text-primary-500 text-sm">
              About Us
            </Link>
            <Link href="/events" className="text-gray-400 hover:text-primary-500 text-sm">
              Events
            </Link>
            <Link href="/gallery" className="text-gray-400 hover:text-primary-500 text-sm">
              Gallery
            </Link>
            <Link href="/Contactus" className="text-gray-400 hover:text-primary-500 text-sm">
              Contact Us
            </Link>
          </div>

          {/* Important Links */}
          <div className="flex flex-col sm:w-1/4 gap-4 text-center sm:text-left">
            <h4 className="text-lg font-semibold text-gray-300">Important Links</h4>
            <Link href="/faq" className="text-gray-400 hover:text-primary-500 text-sm">
              FAQs
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-500 text-sm">
              Terms & Conditions
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:w-1/4 gap-4 text-center sm:text-left">
            <h4 className="text-lg font-semibold text-gray-300">Contact Information</h4>
            <p className="text-gray-400 text-sm">211, Station Road, HA1 2TP, Harrow, UK</p>
            <p className="text-gray-400 text-sm">contact@zeppelinentertainment.com</p>
            <p className="text-gray-400 text-sm">+44 7443821901</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center pt-12 border-t border-gray-700">
          {/* Social Media Links */}
          <div className="flex gap-8 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Copyright and Developer Info */}
          <p className="text-sm text-gray-500 text-center mt-6">
            &copy; 2024 Spotlight Shows. All Rights Reserved. <br />
            Designed & Developed with ❤️ by Worthever Multimedia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

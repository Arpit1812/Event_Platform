import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#475569] text-white tw-text-opacity-1 py-12">
      <div className="wrapper flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Logo Section */}
          <div className="flex items-center sm:items-start">
            <Link href="/">
              <Image
              //className="bg-[#ffffff]"
                src="/assets/images/logo.svg"
                alt="logo"
                width={128}
                height={38}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold">Navigation</h4>
              <Link href="/" className="hover:text-gray-600">Home</Link>
              <Link href="/events" className="hover:text-gray-600">Events</Link>
              <Link href="/about" className="hover:text-gray-600">About Us</Link>
              <Link href="/contact" className="hover:text-gray-600">Contact Us</Link>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="w-full sm:w-auto text-center">
            <h4 className="text-lg font-bold mb-4">Feedback</h4>
            <textarea
              className="w-full sm:w-64 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary-500"
              placeholder="Write your feedback here..."
            ></textarea>
            <div className="mt-4">
              <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center border-t pt-6 gap-4">
          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm">&copy; 2024 Evently. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

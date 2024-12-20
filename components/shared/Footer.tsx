// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white tw-text-opacity-1 py-12">
//       <div className="wrapper flex flex-col gap-8">
//         {/* Top Section */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
//           {/* Logo Section */}
//           <div className="flex items-center sm:items-start">
//             <Link href="/">
//               <Image
//               //className="bg-[#ffffff]"
//                 src="/assets/images/logo.svg"
//                 alt="logo"
//                 width={128}
//                 height={38}
//               />
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
//             <div className="flex flex-col gap-2">
//               <h4 className="text-lg font-bold">Navigation</h4>
//               <Link href="/" className="hover:text-gray-600">Home</Link>
//               <Link href="/events" className="hover:text-gray-600">Events</Link>
//               <Link href="/about" className="hover:text-gray-600">About Us</Link>
//               <Link href="/contact" className="hover:text-gray-600">Contact Us</Link>
//             </div>
//           </div>

//           {/* Feedback Section */}
//           <div className="w-full sm:w-auto text-center">
//             <h4 className="text-lg font-bold mb-4">Feedback</h4>
//             <textarea
//               className="w-full sm:w-64 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary-500"
//               placeholder="Write your feedback here..."
//             ></textarea>
//             <div className="mt-4">
//               <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col items-center border-t pt-6 gap-4">
//           {/* Social Media Links */}
//           <div className="flex gap-4">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-black hover:text-gray-600"
//               aria-label="Facebook"
//             >
//               <FaFacebookF size={24} />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-black hover:text-gray-600"
//               aria-label="Twitter"
//             >
//               <FaTwitter size={24} />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-black hover:text-gray-600"
//               aria-label="Instagram"
//             >
//               <FaInstagram size={24} />
//             </a>
//           </div>

//           {/* Copyright */}
//           <p className="text-center text-sm">&copy; 2024 Evently. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-16 sm:gap-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center sm:items-start space-y-6 sm:space-y-4">
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={160}
                height={50}
              />
            </Link>
            <p className="text-gray-400 text-sm text-center sm:text-left max-w-md">
              Zeppelin is always committed to <br/> putting together the smoothest experiences for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:w-1/4 gap-6 text-center sm:text-left">
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
            <Link href="/contactus" className="text-gray-400 hover:text-primary-500 text-sm">
              Contact Us
            </Link>
          </div>

          {/* Important Links */}
          <div className="flex flex-col sm:w-1/4 gap-6 text-center sm:text-left">
            <h4 className="text-lg font-semibold text-gray-300">Important Links</h4>
            <Link href="/faq" className="text-gray-400 hover:text-primary-500 text-sm">
              FAQs
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-500 text-sm">
              Terms & Conditions
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:w-1/4 gap-6 text-center sm:text-left">
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
            &copy; 2024 Zeppelin Entertainment. All Rights Reserved. <br />
            Designed & Developed with ❤️ by Worthever Multimedia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

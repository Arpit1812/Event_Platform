import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFFDD0] text-black py-12">
      <div className="wrapper flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Logo Section */}
          <div className="flex items-center sm:items-start">
            <Link href="/">
              <Image
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
          <div className="w-full sm:w-auto text-center sm:text-right">
            <h4 className="text-lg font-bold mb-2">Feedback</h4>
            <textarea
              className="w-full sm:w-64 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary-500"
              placeholder="Write your feedback here..."
            ></textarea>
            <button className="mt-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
              Submit
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6">
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
          <p className="text-center mt-4 sm:mt-0 text-sm">&copy; 2024 Evently. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="border-t bg-[#222] text-white py-8">
//       <div className="wrapper flex-center flex-col gap-6 text-center sm:text-left">
//         {/* Logo Section */}
//         <Link href="/">
//           <Image
//             src="/assets/images/logo.svg"
//             alt="logo"
//             width={128}
//             height={38}
//           />
//         </Link>

//         {/* Footer Content */}
//         <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
//           {/* Social Media Links */}
//           <div className="flex gap-6">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-400"
//               aria-label="Facebook"
//             >
//               <FaFacebookF size={24} />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-400"
//               aria-label="Twitter"
//             >
//               <FaTwitter size={24} />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-400"
//               aria-label="Instagram"
//             >
//               <FaInstagram size={24} />
//             </a>
//           </div>

//           {/* Contact Email */}
//           <div className="mt-4 sm:mt-0 text-center">
//             <p>
//               Contact Us:{" "}
//               <a
//                 href="mailto:info@evently.com"
//                 className="text-white hover:text-gray-400"
//               >
//                 info@evently.com
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center mt-6">
//         <p>&copy; 2024 Evently. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="border-t bg-[#222] text-white py-8">
//       <div className="wrapper mx-auto flex-center flex-col sm:flex-row gap-6 text-center sm:text-left max-w-6xl px-4 sm:px-8">
        
//         {/* Logo Section */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: -20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 1, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="flex justify-center sm:justify-start"
//         >
//           <Link href="/">
//             <Image
//               src="/assets/images/logo.svg"
//               alt="logo"
//               width={128}
//               height={38}
//             />
//           </Link>
//         </motion.div>

//         {/* Footer Content */}
//         <div className="flex flex-col sm:flex-row gap-6 sm:ml-auto sm:gap-12 mt-6 sm:mt-0">

//           {/* Quick Links Section */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: -20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 1, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="flex flex-col sm:items-start"
//           >
//             <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
//             <ul>
//               <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
//               <li><Link href="/product" className="hover:text-gray-400">Product</Link></li>
//               <li><Link href="/careers" className="hover:text-gray-400">Careers</Link></li>
//               <li><Link href="/pricing" className="hover:text-gray-400">Pricing</Link></li>
//             </ul>
//           </motion.div>

//           {/* Support Section */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: -20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 1, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex flex-col sm:items-start"
//           >
//             <h4 className="text-lg font-semibold mb-3">Support</h4>
//             <ul>
//               <li><Link href="/company" className="hover:text-gray-400">Company</Link></li>
//               <li><Link href="/press" className="hover:text-gray-400">Press</Link></li>
//               <li><Link href="/blog" className="hover:text-gray-400">Our Blog</Link></li>
//               <li><Link href="/contact" className="hover:text-gray-400">Contact Us</Link></li>
//             </ul>
//           </motion.div>

//           {/* Newsletter Section */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: -20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 1, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="flex flex-col sm:items-start"
//           >
//             <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
//             <p className="mb-4">Subscribe to receive future updates</p>
//             <form action="#">
//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   className="w-full rounded-full border border-gray-700 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-black dark:border-stroke"
//                 />
//                 <button
//                   aria-label="signup to newsletter"
//                   className="absolute right-0 top-0 p-4"
//                 >
//                   <svg
//                     className="fill-[#757693] hover:fill-primary dark:fill-white"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_48_1487)">
//                       <path
//                         d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
//                         fill=""
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_48_1487">
//                         <rect width="20" height="20" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4 text-center sm:text-left">
          
//           {/* Language & Policy Links */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: -20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 1, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="flex gap-8"
//           >
//             <a href="#" className="hover:text-gray-400">English</a>
//             <a href="#" className="hover:text-gray-400">Privacy Policy</a>
//             <a href="#" className="hover:text-gray-400">Support</a>
//           </motion.div>

//           {/* Copy Right */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: -20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 1, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="text-gray-400"
//           >
//             <p>&copy; {new Date().getFullYear()} Solid. All rights reserved</p>
//           </motion.div>

//           {/* Social Media Icons */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: -20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 1, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="flex gap-6"
//           >
//             <a href="#" className="hover:text-gray-400">
//               {/* Example of a social icon */}
//               <svg className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m10-10H2" />
//               </svg>
//             </a>
//             {/* Add more social icons here */}
//           </motion.div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;


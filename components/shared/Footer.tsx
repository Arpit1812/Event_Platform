import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t bg-[#222] text-white py-8">
      <div className="wrapper flex-center flex-col sm:flex-row gap-6 text-center sm:text-left">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row gap-4 sm:ml-auto">
          {/* Social Media Links */}
          <div className="flex gap-4 mb-4 sm:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              Instagram
            </a>
          </div>

          {/* Contact Email */}
          <div>
            <p>Contact Us: <a href="mailto:info@evently.com" className="text-white hover:text-gray-400">info@evently.com</a></p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p>&copy; 2024 Evently. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

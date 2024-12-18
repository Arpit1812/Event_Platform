import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(/assets/images/contact-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-5xl font-bold text-white">Contact Us</h1>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">We’d Love to Hear From You</h2>
          <p className="text-lg text-gray-300 mb-12">
            Whether you’re curious about our services, have questions, or just want to say hi, drop us a line.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <FaPhoneAlt className="text-primary-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400">+1 123 456 7890</p>
            </div>

            {/* Email */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <FaEnvelope className="text-primary-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400">info@zeppelinentertainment.com</p>
            </div>

            {/* Location */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <FaMapMarkerAlt className="text-primary-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-400">123 Entertainment Lane, Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Send Us a Message</h2>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 text-black rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 text-black rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 text-black rounded-md"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 text-black rounded-md"
            ></textarea>
            <button
              type="submit"
              className="bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450958!2d-122.41941538468144!3d37.774929779759404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df69aaab%3A0x2f7f70f0f0f0f0!2sZeppelin+Entertainment!5e0!3m2!1sen!2sus!4v1617982941305!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;

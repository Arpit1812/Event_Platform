"use client"; // This marks the component as a client component

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaComments,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
    skills: "",
    availability: "",
    comments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // You can uncomment and modify the fetch logic here for form submission
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/assets/images/f.jpg')" }}>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-5xl font-bold text-white">Contact Us</h1>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">We’d Love to Hear From You</h2>
          <p className="text-lg text-gray-300 mb-12">
            Whether you’re curious about our services, have questions, or just want to say hi, drop us a line.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <FaPhoneAlt className="text-primary-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400">0044 78142 52673 <br/> 0044 7805 248172</p>
            </div>

            {/* Email */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <FaEnvelope className="text-primary-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400">Info@spotlightshows.co.uk</p>
            </div>

            {/* Location */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <FaMapMarkerAlt className="text-primary-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-400">47 Squires Croft
                Sutton Coldfield
                B76 2RY
                United Kingdom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-semibold text-white">We’d Love to Hear From You</h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-200 lg:mx-auto">
              Whether you’re curious about our services, have questions, or just want to say hi, drop us a line.
            </p>
          </div>

          <div className="mt-10">
            <div className="bg-white shadow-lg sm:rounded-lg overflow-hidden">
              <div className="px-6 py-8 sm:px-10 lg:px-12">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Contact Us</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    {/* Input Fields */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <FaUser className="text-gray-500" />
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    </div>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50 sm:text-sm h-12 pl-4" // Added padding-left
                      placeholder="example@example.com"
                      required
                    />
                    <div className="flex items-center space-x-3">
                      <FaEnvelope className="text-gray-500" />
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Emails</label>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50 sm:text-sm h-12 pl-4" // Added padding-left
                      placeholder="(123) 456-7890"
                    />
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-gray-500" />
                      <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    </div>

                    <div className="sm:col-span-2 flex items-center space-x-3">
                      <FaComments className="text-gray-500" />
                      <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Additional Comments</label>
                    </div>

                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows={4}
                      className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50 sm:text-sm pl-4" // Added padding-left
                      placeholder="Any additional information or questions..."
                    ></textarea>
                  </div>

                  <div className="pt-5">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

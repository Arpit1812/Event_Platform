"use client";

import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section with Animated Stripe */}
      <section className="relative w-full h-[80vh] flex justify-center items-center overflow-hidden">
        {/* Animated Background */}
        <div
          className="absolute top-0 left-0 w-full h-full animate-gradientAnimation"
          style={{
            backgroundSize: "200% 200%",
              animation: 'colorTransition 8s infinite',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Evently</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Crafting unforgettable experiences with passion, innovation, and a commitment to excellence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Row 1 */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center", marginBottom: "80px" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>Who We Are</h2>
            <p style={{ lineHeight: "1.8", fontSize: "1.2rem", color: "#333" }}>
              At Evently, we blend creativity with technology to bring your ideas to life. With a rich history of delivering top-notch entertainment solutions, we pride ourselves on our ability to connect with audiences in meaningful ways.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <Image
              src="/images/who-we-are.jpg"
              alt="Who We Are"
              width={800}
              height={600}
              style={{ borderRadius: "10px", width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "40px",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>Our Mission</h2>
            <p style={{ lineHeight: "1.8", fontSize: "1.2rem", color: "#333" }}>
              Our mission is to create exceptional experiences that leave lasting impressions. By leveraging cutting-edge technology and innovative strategies, we aim to redefine the entertainment landscape.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <Image
              src="/images/our-mission.jpg"
              alt="Our Mission"
              width={800}
              height={600}
              style={{ borderRadius: "10px", width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center", marginBottom: "80px" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>Our Vision</h2>
            <p style={{ lineHeight: "1.8", fontSize: "1.2rem", color: "#333" }}>
              Our vision is to be the global leader in entertainment, inspiring creativity and bringing people together
              through unforgettable experiences. We strive to push boundaries and set new standards in the industry.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <Image
              src="/images/our-vision.jpg"
              alt="Our Vision"
              width={800}
              height={600}
              style={{ borderRadius: "10px", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Keyframes for Gradient Animation */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background: linear-gradient(to right, #ff7eb3, #ff758c, #ff5964);
          }
          33% {
            background: linear-gradient(to right, #6a11cb, #2575fc, #5c33cc);
          }
          66% {
            background: linear-gradient(to right, #43cea2, #185a9d, #56ccf2);
          }
          100% {
            background: linear-gradient(to right, #ff7eb3, #ff758c, #ff5964);
          }
        }

        .animate-gradientAnimation {
          animation: gradientAnimation 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;

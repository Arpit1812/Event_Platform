"use client";

import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      {/* Hero Section with Animated Stripe */}
      <section className="relative w-full h-[45vh] flex justify-center items-center overflow-hidden">
        {/* Animated Background */}
        <div
          className="absolute top-0 left-0 w-full h-full animate-gradientAnimation"
          style={{
            backgroundSize: "200% 200%",
            animation: "colorTransition 8s infinite",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">About Spotlight Shows</h1>
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
            <p style={{ lineHeight: "1.8", fontSize: "1.2rem", color: "lightgray" }}>
            At Spotlight Shows, we are not just another event organizer. 
            We are curators of unforgettable experiences, specializing in stand-up comedy and live singing shows. 
            We bring together diverse talent—local rising stars and renowned international artists—to create platforms where creativity thrives and audiences connect. 
            What sets us apart is our passion for building an ecosystem that values the artist as much as the art.


            </p>
          </div>
          <div style={{ flex: 1 }}>
            <Image
              src="/assets/images/who-we-are.jpeg"
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
            <p style={{ lineHeight: "1.8", fontSize: "1.2rem", color: "lightgray" }}>
            Our mission is to revolutionize the entertainment industry by creating opportunities where artists are celebrated and audiences are inspired. 
            We aim to break boundaries, elevate performances, and provide an unmatched stage for talent to shine. 
            We aren’t just hosting shows; we are building bridges between creativity, culture, and community.

            </p>
          </div>
          <div style={{ flex: 1 }}>
            <Image
              src="/assets/images/c.jpeg"
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
            <p style={{ lineHeight: "1.8", fontSize: "1.2rem", color: "lightgray" }}>
            To become the go-to platform for artists and audiences alike, fostering a global network of talent, creativity, and collaboration. 
            We envision a world where every performer feels empowered, every audience feels enthralled, and every event becomes a story worth sharing.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <Image
              src="/assets/images/our-vision.jpeg"
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
          animation: gradientAnimation 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;

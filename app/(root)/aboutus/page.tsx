import React from 'react';
import Image from 'next/image';


const AboutUs = () => {
  return (
    <div>
      {/* Hero Section with Animated Stripe */}
      <section className="relative w-full h-[80vh] flex justify-center items-center overflow-hidden">
        {/* Animated Background */}
        {/* <div className="absolute top-0 left-0 w-full h-full z-0 animated-gradient"></div> */}
        <div
  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 animate-[gradientAnimation_6s_ease_infinite]"
  style={{
    backgroundSize: '400% 400%',
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
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Row 1 */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center', marginBottom: '80px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>Who We Are</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#333' }}>
              At Evently, we blend creativity with technology to bring your ideas to life. With a rich
              history of delivering top-notch entertainment solutions, we pride ourselves on our ability to connect
              with audiences in meaningful ways.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <Image
              src="/images/who-we-are.jpg"
              alt="Who We Are"
              width={800}
              height={600}
              style={{ borderRadius: '10px', width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '40px', alignItems: 'center', marginBottom: '80px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>Our Mission</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#333' }}>
              Our mission is to create exceptional experiences that leave lasting impressions. By leveraging
              cutting-edge technology and innovative strategies, we aim to redefine the entertainment landscape.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <Image
              src="/images/our-mission.jpg"
              alt="Our Mission"
              width={800}
              height={600}
              style={{ borderRadius: '10px', width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center', marginBottom: '80px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>Our Vision</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#333' }}>
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
              style={{ borderRadius: '10px', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section
        style={{
          backgroundColor: '#111',
          color: '#fff',
          padding: '50px 20px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>Join Us on Our Journey</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '30px' }}>
            Be part of a community that values creativity, innovation, and the power of entertainment.
          </p>
          <button
            style={{
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#ff6600',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Get in Touch
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;

import Image from "next/image";
import Link from "next/link";
import FAQSection from "../faq-section";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        // style={{ 
        //   background: 'linear-gradient(to bottom, rgba(100, 203, 113, 0.3), rgba(100, 203, 113, 0.5))',
        // }}
      >
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-gray-400"></div>
          <div className="absolute top-40 right-32 w-48 h-48 rounded-full border border-gray-400"></div>
          <div className="absolute bottom-32 left-1/3 w-32 h-32 rounded-full border border-gray-400"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-px bg-gray-400 transform rotate-12"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-px bg-gray-400 transform -rotate-12"></div>
        </div>
      </div>

      <div className="relative z-10"  style={{ 
          background: 'linear-gradient(to bottom, rgba(100, 203, 113, 0.3), rgba(100, 203, 113, 0.5))',
        }}>
        {/* Header */}
        <header className="container mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Bizsun Creative Logo"
              width={150}
              height={50}
              // className="object-contain"
            />
            
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 bg-white/40 p-2 rounded-2xl text-black border-white border-1 shadow-lg backdrop-blur-sm">
            <Link href="/" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105">
              Home
            </Link>
            <a href="#services" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105 cursor-pointer">
              Services
            </a>
            <Link href="/about-us" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105">
              About
            </Link>
            <Link href="/portfolio" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105">
              Portfolio
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105">
              Contact us
            </Link>
            <Link href="/career" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105">
              Career
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg">
            Let&apos;s Collaborate
           <img src="/Background.png" alt="" />
          </button>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-20 flex flex-col items-center text-center relative min-h-[80vh]">
        

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-[#FF9000] mb-6 mt-2 leading-tight animate-fadeInUp" style={{ fontFamily: 'var(--font-syne)' }}>
Building Scalable Digital <br /> Growth for Modern Brands          </h1>

      

          {/* Description */}
          <p className="text-base md:text-lg text-[#6B6B6B] max-w-3xl mb-12 leading-relaxed animate-fadeInUp animation-delay-300">
Bizsun Creative is a full-service digital agency focused on helping businesses grow through strategy, creativity, and technology. We work with startups, growing brands, and enterprises to build strong digital foundations, meaningful brand experiences, and performance-driven marketing systems. From digital marketing and branding to web and app development, our solutions are designed to deliver measurable results, long-term value, and sustainable growth in an ever-evolving digital landscape.</p>

  {/* Our Story Section */}
  <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Our Story</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Bizsun Creative was founded with a simple belief – digital success is not about random tactics, but about clear strategy and consistent execution. What started as a small creative initiative has grown into a multi-disciplinary digital agency serving clients across industries and cities. Over the years, we have partnered with ambitious businesses to transform ideas into impactful digital solutions, combining marketing, design, technology, and automation under one roof.
          </p>
        </section>
        </main>
        </div>

        {/* Meet the Founder Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">Meet the Founder</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Abhinav – Founder & Strategic Lead</h3>
              <p className="text-lg text-gray-600 mb-6">IIT Madras</p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Bizsun Creative is led by Abhinav, an IIT Madras alumnus, whose strong foundation in technology and problem-solving drives the agency&apos;s strategic approach. With a deep understanding of digital systems, business growth, and innovation, Abhinav envisioned Bizsun as an agency that bridges creativity with logic. His leadership ensures every solution is data-driven, scalable, and aligned with real business goals – not just visual appeal.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-64 h-80 md:w-80 md:h-96">
                <Image
                  src="/Frame 30.png"
                  alt="Abhinav - Founder & Strategic Lead"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Our Approach</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Bizsun Creative, we don&apos;t believe in one-size-fits-all solutions. Our approach starts with understanding your business, audience, and objectives. We then design strategies that align creativity with performance, execution with analytics, and short-term wins with long-term growth. Every project goes through continuous optimization, ensuring clarity, transparency, and measurable impact at every stage.
          </p>
        </section>

        {/* Our Presence Across India Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Presence Across India</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            With a growing team and operations across multiple cities, Bizsun Creative serves clients nationwide with a local understanding and global outlook.
          </p>
          
          {/* Cities List */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-18 mb-8">
            <span className="text-xl md:text-2xl font-bold text-gray-800">Bangalore</span>
            <span className="text-gray-400">|</span>
            <span className="text-xl md:text-2xl font-bold text-gray-800">Kolkata</span>
            <span className="text-gray-400">|</span>
            <span className="text-xl md:text-2xl font-bold text-gray-800">Noida</span>
            <span className="text-gray-400">|</span>
            <span className="text-xl md:text-2xl font-bold text-gray-800">Ahmedabad</span>
            <span className="text-gray-400">|</span>
            <span className="text-xl md:text-2xl font-bold text-gray-800">Varanasi</span>
          </div>
          
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our distributed presence allows us to collaborate closely with businesses across regions while maintaining consistent quality and service standards.
          </p>
        </section>

        {/* Let's Build Something Impactful Together Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Let&apos;s Build Something Impactful Together</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Whether you&apos;re a startup or an established brand, we&apos;re here to help you grow with clarity, creativity, and confidence.
          </p>
          <button className="bg-[#249631] pointer-cursor text-white px-8 py-4 rounded-4xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Let&apos;s Collaborate
          </button>
        </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-gray-300 py-16 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Left Section - Call to Action */}
                <div className="md:col-span-1">
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">
                    LET&apos;S TURN IDEAS INTO IMPACT
                  </p>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-4xl md:text-5xl font-bold text-white">LET&apos;S</h2>
                      <button className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </button>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">WORK TOGETHER</h2>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Navigation Columns */}
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4">HOME</h3>
                  <ul className="space-y-2">
                    <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">HOME</Link></li>
                    <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">ABOUT</Link></li>
                    <li><Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">PORTFOLIO</Link></li>
                    <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">SERVICE</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4">CLIENTS</h3>
                  <ul className="space-y-2">
                    <li><Link href="/clients" className="text-gray-300 hover:text-white transition-colors">CLIENTS</Link></li>
                    <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">CONTACTS</Link></li>
                    <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">GALLERY</Link></li>
                    <li><Link href="/clients" className="text-gray-300 hover:text-white transition-colors">CLIENTS</Link></li>
                    <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">NEWS</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4">PORTFOLIO</h3>
                  <ul className="space-y-2">
                    <li><Link href="/services/digital-marketing" className="text-gray-300 hover:text-white transition-colors">DIGITAL MARKETING SERVICES</Link></li>
                    <li><Link href="/services/website-branding" className="text-gray-300 hover:text-white transition-colors">WEBSITE, APP & BRANDING SERVICES</Link></li>
                    <li><Link href="/services/app-development" className="text-gray-300 hover:text-white transition-colors">MOBILE & WEB APP DEVELOPMENT</Link></li>
                    <li><Link href="/services/analytics" className="text-gray-300 hover:text-white transition-colors">ANALYTICS & GROWTH SOLUTIONS</Link></li>
                    <li><Link href="/services/automation" className="text-gray-300 hover:text-white transition-colors">AUTOMATION & CRM SOLUTIONS</Link></li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="border-t border-gray-700 pt-8 text-center">
                <p className="text-xs text-gray-400">
                  ©2026 Bizsun. All rights reserved. <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link> | <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </footer>
    </div>
  );
}


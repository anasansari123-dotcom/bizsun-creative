import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
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
  );
}


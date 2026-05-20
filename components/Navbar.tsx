import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  logoText: string;
  navItems: { name: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ logoText, navItems }) => {
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center bg-white shadow-md">
      {/* Logo/Brand Area */}
      <div className="text-2xl font-bold text-gray-800">
        <Link href="/" className="hover:text-[#0070f3] transition duration-150">
          AI 컨설팅
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="text-gray-600 hover:text-[#0070f3] font-medium transition duration-150">
            {item.name}
          </Link>
        ))}
      </div>

      {/* CTA (Call to Action) */}
      <a href="/contact" className="px-4 py-2 bg-[#0070f3] text-white rounded-lg hover:bg-[#0056b3] transition duration-150 shadow-md">
        상담 신청
      </a>
    </nav>
  );
};

export default Navbar;
import React from 'react';

interface NavbarProps {
  logoText: string;
  navItems: { name: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ logoText, navItems }) => {
  // 디자인 가이드라인 기반 스타일 적용 (Typography 및 Color Palette)
  const primaryColor = '#0070f3'; // 메인 컬러
  const textColor = '#1f2937'; // 텍스트 색상
  const navBg = '#ffffff'; // 배경색

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      {/* 로고 영역 */}
      <div className="flex items-center space-x-3">
        <span className={`text-2xl font-bold tracking-tight ${textColor}`}>
          {logoText}
        </span>
        {/* 브랜드 아이덴티티 강조 (예시: AI 컨설팅) */}
        <span className={`text-sm font-medium text-gray-500`}>AI & .NET Consulting</span>
      </div>

      {/* 네비게이션 메뉴 영역 */}
      <div className="flex space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-sm font-medium transition duration-150 ease-in-out ${
              item.name === 'Home'
                ? `text-[${primaryColor}] border-b-2 border-[${primaryColor}]` // 현재 활성화된 메뉴 강조
                : 'text-gray-600 hover:text-[#0070f3] hover:border-b-2 hover:border-[#0070f3]'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* CTA 또는 기타 요소 (필요시 추가) */}
    </nav>
  );
};

export default Navbar;
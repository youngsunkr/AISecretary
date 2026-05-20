import React from 'react';
import Navbar from './Navbar'; // Navbar 임포트

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // 브랜드 컬러 정의 (가이드라인 기반)
  const primaryColor = '#0070f3'; // 신뢰감을 주는 블루 계열
  const secondaryColor = '#6c757d'; // 보조 텍스트 색상
  const bgColor = '#f8f9fa'; // 배경색 (밝은 회색)

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Sticky Header/Navigation 영역 */}
      <header className="sticky top-0 z-30 bg-white shadow-md border-b border-gray-200">
        <Navbar 
          logoText="AI 컨설팅" 
          navItems={[
            { name: "서비스 소개", href: "/services" },
            { name: "포트폴리오", href: "/portfolio" },
            { name: "문의하기", href: "/contact" },
          ]}
        />
      </header>
      
      {/* Main Content Area */}
      <main className="min-h-[calc(100vh-128px)] pt-16 pb-12"> {/* Navbar 높이만큼 패딩 조정 */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
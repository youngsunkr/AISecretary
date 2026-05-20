import React from 'react';

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
      {/* Header/Navigation 영역에 대한 스타일 정의 */}
      <header className="sticky top-0 z-30 bg-white shadow-md border-b border-gray-200">
        {/* Navbar 컴포넌트가 여기에 위치함 */}
        {children}
      </header>
    </div>
  );
};

export default Layout;
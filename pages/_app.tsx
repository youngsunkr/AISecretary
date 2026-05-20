import type { AppProps } from 'next/app';
import '../styles/globals.css'; // 전역 스타일 임포트
import { Layout, Navbar } from '../components'; // 새로 생성할 컴포넌트

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <main className="min-h-screen pt-16 pb-12">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
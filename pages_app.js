import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function App({ Component, pageProps }) {
  useEffect(() => { AOS.init({ once: true }); }, []);
  return <Component {...pageProps} />;
}

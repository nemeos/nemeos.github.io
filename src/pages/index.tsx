import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Header, Hero, KeyPillars } from './sections';

import { Poppins } from 'next/font/google';
import { Footer } from './sections/Footer';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Nemeos Finance</title>
        <meta name="description" content="Nemeos Finance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${poppins.className}`}>
        <Header />
        <Hero />
        <KeyPillars />
        <Footer />
      </main>
    </>
  );
}

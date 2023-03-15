import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Header, Hero, KeyPillars } from '../sections';

import { Poppins } from 'next/font/google';
import { Footer } from '../sections/Footer';
import { MiddleSection } from '../sections/MiddleSection';
import { Infrastructure } from '../sections/Infrastructure';
import { RoadMap } from '../sections/Roadmap';
import Image from 'next/image';

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
        <Image
          style={{ position: 'absolute', left: 0, top: 130, zIndex: -1 }}
          src="/buildings.svg"
          alt="Nemeos"
          width={1512}
          height={1288}
        />
        <Image
          style={{ position: 'absolute', left: 0, top: 1320, zIndex: -2 }}
          src="/squares_background.svg"
          alt="Nemeos"
          width={1512}
          height={1572}
        />
        <Header />
        <Hero />
        <KeyPillars />
        <MiddleSection />
        <Infrastructure />
        <RoadMap />
        <Footer />
      </main>
    </>
  );
}

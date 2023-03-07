import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Header } from './sections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nemeos Finance</title>
        <meta name="description" content="Nemeos Finance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
      </main>
    </>
  );
}

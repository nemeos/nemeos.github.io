import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export const Header = () => {
  return (
    <div className={styles.description}>
      <div>
        <Image className={styles.logo} src="/logo.svg" alt="Next.js Logo" width={56} height={56} priority />
        <Image className={styles.logo} src="/nemeos.svg" alt="Next.js Logo" width={170} height={24} priority />
      </div>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
        </a>
      </div>
    </div>
  );
};

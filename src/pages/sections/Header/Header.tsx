import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export const Header = () => {
  return (
    <div className={styles.description}>
      <div>
        <Image className={styles.logo} src="/logo.svg" alt="Next.js Logo" width={56} height={56} priority />
        <Image className={styles.logo} src="/nemeos.svg" alt="Next.js Logo" width={170} height={24} priority />
      </div>
      <div></div>
    </div>
  );
};

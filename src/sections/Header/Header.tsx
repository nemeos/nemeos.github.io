import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <Image src="/nemeos.svg" alt="Nemeos" width={190} height={40} priority />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Link href="/" passHref>
          <Text className={styles.header_element_text}>Products</Text>
        </Link>
        <Link href="/" passHref>
          <Text className={styles.header_element_text}>Resources</Text>
        </Link>
        <Link href="mailto:francois@nemeos.finance" passHref>
          <Button>
            <Text className={styles.header_element_text} style={{ color: '#fff', marginLeft: 0, marginRight: 0 }}>
              Contact Us
            </Text>
          </Button>
        </Link>
      </div>
    </div>
  );
};

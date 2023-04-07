import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import Link from 'next/link';

import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          paddingLeft: '15%',
          paddingRight: '15%',
          paddingTop: 80,
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 500 }}>
          <Text className={styles.hero_main_text}>Building new web3 economies</Text>
          <Text style={{ fontSize: 30, color: '#fff', marginBottom: 80 }}>
            We contribute to the development of new inclusive digital economies by building the leading on-chain credit
            solution for web3 assets.
          </Text>
          <Link href="mailto:contact@nemeos.finance" passHref>
            <Button width={230}>Get in touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

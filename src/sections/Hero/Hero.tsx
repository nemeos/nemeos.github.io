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
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 600 }}>
          <Text className={styles.hero_main_text}>Building new web3 economies</Text>
          <Text style={{ fontSize: 24, color: '#fff', marginBottom: 80 }}>
            We contribute to the development of new digital economies by building the leading financial
            services infrastructure for web3 assets.
          </Text>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScsf2ehPHgiDi9QFodgZ-6eMHVv2lCMK5-LN0np_beUieN8Rw/viewform?usp=pp_url" passHref>
            <Button width={230}>Get early access</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          paddingLeft: '15%',
          paddingTop: 80,
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 500 }}>
          <Text style={{ fontSize: 48, marginBottom: 40, fontWeight: 700, color: 'white' }}>
            Building new web3 economies
          </Text>
          <Text style={{ fontSize: 24, color: '#fff', marginBottom: 80 }}>
            We contribute to the development of new inclusive digital economies by building the leading on-chain credit
            infrastructure for web3 asset.
          </Text>
          <Link href="mailto:francois@nemeos.finance" passHref>
            <Button width={230}>Get in touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

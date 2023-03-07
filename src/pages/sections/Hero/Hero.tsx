import { Text } from '@/components/Text';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Image
        style={{ position: 'absolute', left: 0, bottom: 0 }}
        src="/buildings.svg"
        alt="Nemeos"
        width={1512}
        height={537}
      />
      <div
        style={{
          paddingLeft: '15%',
          paddingTop: 80,
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 500 }}>
          <Text style={{ fontSize: 48, marginBottom: 40, fontWeight: 700, color: 'white' }}>
            Building new web3 economies
          </Text>
          <Text style={{ fontSize: 24, color: '#fff' }}>
            We contribute to the development of new inclusive digital economies by building the leading on-chain credit
            infrastructure for web3 assets.
          </Text>
        </div>
      </div>
    </div>
  );
};

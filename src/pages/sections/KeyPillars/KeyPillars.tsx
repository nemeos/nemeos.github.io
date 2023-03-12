import { Text } from '@/components/Text';
import Image from 'next/image';

export const KeyPillars = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        paddingLeft: '15%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        zIndex: 2,
        marginTop: 300,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: 700 }}>Key pillars</Text>
      <div style={{ maxWidth: 900, marginTop: 40 }}>
        <Text>
          Our objective is to allow anyone to operate, build or integrate real-life financial services for web3
          ecosystem. For example, a user can use our solution to buy a NFT with credit.
        </Text>
      </div>
      <div style={{ marginTop: 60 }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
          <Image style={{ marginBottom: 32 }} src="/hand-coin.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Key On-chain credit infrastructure</Text>
          <Text>Credit layer allowing financing, asset scoring and collateral management.</Text>
        </div>
      </div>
    </div>
  );
};

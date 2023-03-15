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
        marginBottom: 100,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: 700 }}>Key pillars</Text>
      <div style={{ maxWidth: 900, marginTop: 40 }}>
        <Text>
          Our objective is to allow anyone to operate, build or integrate real-life financial services for web3
          ecosystem. For example, a user can use our solution to buy a NFT with credit.
        </Text>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 60,
          paddingRight: 80,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
          <Image style={{ marginBottom: 32 }} src="/hand-coin.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Key On-chain credit infrastructure</Text>
          <Text>Credit layer allowing financing, asset scoring and collateral management.</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
          <Image style={{ marginBottom: 32 }} src="/coin-bundle.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Credit products fabric</Text>
          <Text>Creation of any financing products (BNPL, amortizing loan, leasing, etc.) or rental services.</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
          <Image style={{ marginBottom: 32 }} src="/wallet-check.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Support web3 adoption</Text>
          <Text>Go beyond existing DeFi protocols, and bring financial services with real-life use cases to web3.</Text>
        </div>
      </div>
    </div>
  );
};

import { Text } from '@/components/Text';
import Image from 'next/image';
import style from './KeyPillars.module.css';

export const KeyPillars = () => {
  return (
    <div className={style.container}>
      <Text style={{ fontSize: 40, fontWeight: 700 }}>Key pillars</Text>
      <div style={{ maxWidth: 900, marginTop: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 16 }}>
          Our objective is to allow anyone to operate, build or integrate real-life financial services for web3
          ecosystem. For example, a user can use our solution to buy a NFT with credit.
        </Text>
      </div>
      <div className={style.listContainer}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, marginTop: 60 }}>
          <Image style={{ marginBottom: 32 }} src="/hand-coin.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Key On-chain credit infrastructure</Text>
          <Text>Credit layer allowing financing, asset scoring and collateral management.</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, marginTop: 60 }}>
          <Image style={{ marginBottom: 32 }} src="/coin-bundle.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Credit products fabric</Text>
          <Text>Creation of any financing products (BNPL, amortizing loan, leasing, etc.) or rental services.</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, marginTop: 60 }}>
          <Image style={{ marginBottom: 32 }} src="/wallet-check.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Support web3 adoption</Text>
          <Text>Go beyond existing DeFi protocols, and bring financial services with real-life use cases to web3.</Text>
        </div>
      </div>
    </div>
  );
};

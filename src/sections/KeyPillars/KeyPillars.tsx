import { Text } from '@/components/Text';
import Image from 'next/image';
import style from './KeyPillars.module.css';

export const KeyPillars = () => {
  return (
    <div className={style.container}>
      <Text style={{ fontSize: 40, fontWeight: 700 }}>Our vision</Text>
      <div style={{ maxWidth: 900, marginTop: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 20 }}>
          Web3 is transforming digital environments, by bringing secured property, liquidity and interoperability to
          digital assets. But customer-oriented financial services, such as payment facilities, remain limited.
        </Text>
        <div style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>
            We build a DeFi protocol allowing to anyone to take a loan to buy a digital asset. We strive to make the
            process easy and accessible to all, to democratize the access to digital assets.
          </Text>
        </div>
      </div>
      <div className={style.listContainer}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, marginTop: 60 }}>
          <Image style={{ marginBottom: 32 }} src="/hand-coin.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Seamless user experience</Text>
          <Text>Made for users, not traders. Easy to use, with fixed terms and no floating rates.</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, marginTop: 60 }}>
          <Image style={{ marginBottom: 32 }} src="/coin-bundle.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Transparent and scalable</Text>
          <Text>Open-source peer-to-pool protocol to ensure transparency and scalability.</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, marginTop: 60 }}>
          <Image style={{ marginBottom: 32 }} src="/wallet-check.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Free from censorship</Text>
          <Text>Accessible to anyone. No need to provide remuneration statement, credit score, etc.</Text>
        </div>
      </div>
    </div>
  );
};

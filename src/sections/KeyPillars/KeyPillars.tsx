import { Text } from '@/components/Text';
import Image from 'next/image';
import style from './KeyPillars.module.css';

export const KeyPillars = () => {
  return (
    <div className={style.container}>
      <Text style={{ fontSize: 40, fontWeight: 700 }}>Our values</Text>
      <div style={{ maxWidth: 900, marginTop: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 20 }}>
          We aim to build a fully open and uncensored credit solution for web3 assets such as NFTs.
          But in contrast to existing DeFi protocols, we make it simple and accessible to all. 
          Just get a loan and buy your favorite NFT.
        </Text>
      </div>
      <div className={style.listContainer}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, marginTop: 60 }}>
          <Image style={{ marginBottom: 32 }} src="/hand-coin.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Seamless user experience</Text>
          <Text>Simple to use. Fixed duration, no fees, no floating rates, no stress.</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, marginTop: 60 }}>
          <Image style={{ marginBottom: 32 }} src="/coin-bundle.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Accurate risk management</Text>
          <Text>Credit and market risks are assessed using our in-house quantitative models.</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, marginTop: 60 }}>
          <Image style={{ marginBottom: 32 }} src="/wallet-check.svg" alt="Nemeos" width={80} height={80} priority />
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Wellness Finance</Text>
          <Text>Enjoy your asset without paying the full price. And you won't be sued in case of non repayment.</Text>
        </div>
      </div>
    </div>
  );
};

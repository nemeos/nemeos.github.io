import { Text } from '@/components/Text';
import Image from 'next/image';
import style from './KeyPillars.module.css';

export const KeyPillars = () => {
  return (
    <div className={style.container}>
      <Text style={{ fontSize: 40, fontWeight: 700 }}>Our values</Text>
      <div style={{ maxWidth: 900, marginTop: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 20 }}>
          Our goal is to develop a credit platform for web3 assets, specifically NFTs, that is fully open, transparent, and free from 
          censorship. Unlike current NFT lending protocols, we strive to make the process easy and accessible to all. 
          In one click, obtain a loan and buy your favorite NFT.
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
          <Text>
            {"Enjoy your asset from day 1 without paying the full price. And you won't be sued in case of non repayment."}
          </Text>
        </div>
      </div>
    </div>
  );
};

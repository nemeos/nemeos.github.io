import { Button } from '@/components/Button';
import { GradientNoFilledCard } from '@/components/GradientNoFilledCard';
import { Text } from '@/components/Text';
import Link from 'next/link';
import style from './Middle.module.css';

export const MiddleSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingBottom: 50,
      }}
      id="products"
    >
      <div className={style.catchyTitle}>
        <Text style={{ lineHeight: 1.1, fontWeight: 700, fontSize: 104, color: 'rgba(0, 240, 255, 1)' }}>
          Buy now, pay later for NFTs
        </Text>
      </div>
      <div className={style.first_product_container}>
        <Text style={{ fontWeight: 700, fontSize: 40, marginBottom: 40 }}>Our first product</Text>
        <Text style={{ marginBottom: 16, fontSize: 20 }}>
          Our solution enables users to purchase an NFT by dividing the payment into multiple installments.
        </Text>
        <Text style={{ fontSize: 20 }}>
          The financing is secured by the NFT itself, but the user retains the ability to use the asset as long as the loan is repaid.
        </Text>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          flexWrap: 'wrap',
        }}
      >
        <GradientNoFilledCard style={{ padding: 30, width: 300, height: 200 }}>
          <Text style={{ fontWeight: 700, fontSize: 24 }}>{`Try NFTs without paying the full price upfront`}</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard style={{ padding: 30, width: 300, height: 200 }}>
          <Text style={{ fontWeight: 700, fontSize: 24 }}>{`Easy integration and smooth customer journey`}</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard style={{ padding: 30, width: 300, height: 200 }}>
          <Text style={{ fontWeight: 700, fontSize: 24 }}>{`Boost your project adoption and customer retention`}</Text>
        </GradientNoFilledCard>
      </div>
      <div
        style={{
          display: 'flex',
          alignSelf: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 850,
          borderRadius: 32,
          marginTop: 120,
          paddingTop: 42,
          paddingBottom: 42,
          paddingLeft: 100,
          paddingRight: 100,
          marginLeft: 10,
          marginRight: 10,
          background: 'linear-gradient(157.26deg, rgba(255, 255, 255, 0.4) -5.39%, rgba(244, 244, 244, 0.2) 108.05%)',
          boxShadow: '0px 0px 32px #040428',
          backdropFilter: 'blur(23.724px)',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 700, maxWidth: 550, alignSelf: 'center', marginBottom: 34 }}>
          You’re intestered in integrating our solution to your web3 project?
        </Text>
        <Link href="mailto:contact@nemeos.finance" passHref>
          <Button width={230}>Contact us</Button>
        </Link>
      </div>
    </div>
  );
};

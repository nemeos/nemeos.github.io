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
    >
      <div className={style.catchyTitle}>
        <Text style={{ lineHeight: 1.1, fontWeight: 700, fontSize: 104, color: 'rgba(0, 240, 255, 1)' }}>
          Buy now, pay later for NFTs
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 100, width: 230, marginLeft: '15%' }}>
        <Text style={{ fontWeight: 700, fontSize: 40, marginBottom: 16 }}>Our first product</Text>
        <Text style={{ marginBottom: 16 }}>
          With our solution, a user will be able to buy an NFT by paying it in 3x.
        </Text>
        <Text>
          The financing is guaranteed by the acquired NFT, but the user can still use the asset as long as he pays back
          the credit.
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
          <Text style={{ fontWeight: 700, fontSize: 24 }}>{`Users don't have to pay full price upfront`}</Text>
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
          You’re a web3 project, and you’re interested in integrating our solution ?
        </Text>
        <Link href="mailto:francois@nemeos.finance" passHref>
          <Button width={230}>Get in touch</Button>
        </Link>
      </div>
    </div>
  );
};

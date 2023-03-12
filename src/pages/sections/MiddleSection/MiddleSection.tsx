import { Text } from '@/components/Text';

export const MiddleSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 320,
      }}
    >
      <div style={{ position: 'absolute', left: 700, width: 528 }}>
        <Text style={{ lineHeight: 1.1, fontWeight: 700, fontSize: 104, color: 'rgba(0, 240, 255, 1)' }}>
          Buy now, pay later for NFTs
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 100, width: 230 }}>
        <Text style={{ fontWeight: 700, fontSize: 40, marginBottom: 16 }}>Our first product</Text>
        <Text style={{ marginBottom: 16 }}>
          With our solution, a user will be able to buy an NFT by paying it in 3x.
        </Text>
        <Text>
          The financing is guaranteed by the acquired NFT, but the user can still use the asset as long as he pays back
          the credit.
        </Text>
      </div>
    </div>
  );
};

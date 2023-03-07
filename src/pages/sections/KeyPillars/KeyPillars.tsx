import { Text } from '@/components/Text';

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
    </div>
  );
};

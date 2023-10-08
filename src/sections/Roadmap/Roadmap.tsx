import { Card } from '@/components/Card';
import { Text } from '@/components/Text';

export const RoadMap = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <Text style={{ fontWeight: 700, fontSize: 40 }}>Our Road map</Text>
      <Text style={{ fontWeight: 700, color: 'rgba(0, 240, 255, 1)', fontSize: 24 }}>
        Product should be live in Q4.
      </Text>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          paddingTop: 100,
        }}
      >
        <Card>
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q2 2023</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Structuration</Text>
          <Text style={{ marginBottom: 8 }}>Technical study & protocol design</Text>
          <Text style={{ marginBottom: 8 }}>PoC EVM: development of main smart contracts</Text>
        </Card>
        <Card>
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q3 2023</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>MVP Development</Text>
          <Text style={{ marginBottom: 8 }}>Protocol smart contracts</Text>
          <Text style={{ marginBottom: 8 }}>Application development</Text>
          <Text style={{ marginBottom: 8 }}>Testnet deployment</Text>
        </Card>
        <Card>
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q4 2023</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>MVP Deployment</Text>
          <Text style={{ marginBottom: 8 }}>Technical audit</Text>
          <Text style={{ marginBottom: 8 }}>First partnerships with NFT projects</Text>
        </Card>
        <Card>
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q1 2024</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Commercial development</Text>
          <Text style={{ marginBottom: 8 }}>First loans, and first feedbacks</Text>
          <Text style={{ marginBottom: 8 }}>New partnerships with NFT projects</Text>
        </Card>
        <Card>
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q2 2024</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Growth</Text>
          <Text style={{ marginBottom: 8 }}>Acceleration of commercial development</Text>
          <Text style={{ marginBottom: 8 }}>Protocol v2 design</Text>
          <Text style={{ marginBottom: 8 }}>BA / Seed funding</Text>
        </Card>
      </div>
    </div>
  );
};

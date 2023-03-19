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
      }}
    >
      <Text style={{ fontWeight: 700, fontSize: 40 }}>Our Road map</Text>
      <Text style={{ fontWeight: 700, color: 'rgba(0, 240, 255, 1)', fontSize: 24 }}>
        Product should be live in Q3.
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
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q4 2022</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Structuration</Text>
          <Text style={{ marginBottom: 8 }}>Technical study and first developments</Text>
          <Text style={{ marginBottom: 8 }}>Team building</Text>
          <Text style={{ marginBottom: 8 }}>Program applications</Text>
        </Card>
        <Card>
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q1 2023</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>MVP Development</Text>
          <Text style={{ marginBottom: 8 }}>UX, main smart contracts, etc.</Text>
          <Text style={{ marginBottom: 8 }}>First security tests</Text>
          <Text style={{ marginBottom: 8 }}>Scoring tests</Text>
        </Card>
        <Card>
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q2 2023</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>MVP tests</Text>
          <Text style={{ marginBottom: 8 }}>Security audits</Text>
          <Text style={{ marginBottom: 8 }}>First partnerships and first live usage of the solution</Text>
        </Card>
        <Card>
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q3 2023</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Beta version</Text>
          <Text style={{ marginBottom: 8 }}>Lending pool development</Text>
          <Text style={{ marginBottom: 8 }}>Partnerships with main NFT projects</Text>
        </Card>
        <Card>
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q4 2023</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Growth</Text>
          <Text style={{ marginBottom: 8 }}>Acceleration of commercial development</Text>
          <Text style={{ marginBottom: 8 }}>Addition of new functionalities BA / Pre-seed funding</Text>
        </Card>
      </div>
    </div>
  );
};

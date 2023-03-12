import { Text } from '@/components/Text';

export const RoadMap = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontWeight: 700, fontSize: 40 }}>Our Road map</Text>
      <Text style={{ fontWeight: 700, color: 'rgba(0, 240, 255, 1)', fontSize: 24 }}>
        Product should be live in Q3.
      </Text>
      <div style={{ paddingTop: 100 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 280,
            background: 'linear-gradient(157.26deg, rgba(255, 255, 255, 0.4) -5.39%, rgba(244, 244, 244, 0.2) 108.05%)',
            backdropFilter: 'blur(23.724px)',
            boxShadow: '0px 0px 32px #040428',
            borderRadius: 32,
            padding: 32,
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 16, color: '#000066', marginBottom: 8 }}>Q4 2022</Text>
          <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Structuration</Text>
          <Text style={{ marginBottom: 8 }}>Technical study and first developments</Text>
          <Text style={{ marginBottom: 8 }}>Team building</Text>
          <Text style={{ marginBottom: 8 }}>Program applications</Text>
        </div>
      </div>
    </div>
  );
};

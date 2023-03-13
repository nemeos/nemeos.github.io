import { GradientNoFilledCard } from '@/components/GradientNoFilledCard';
import { Text } from '@/components/Text';

export const Infrastructure = () => {
  return (
    <div>
      <Text style={{ fontWeight: 700, fontSize: 40 }}>Discover our infrastructure</Text>
      <div style={{ height: 900, marginTop: 40 }}>
        <GradientNoFilledCard style={{ position: 'absolute', left: '5%', marginTop: 100 }}>
          <Text style={{ fontWeight: 700, fontSize: 32 }}>Market value assessment</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard style={{ position: 'absolute' }}>
          <Text style={{ fontWeight: 700, fontSize: 32 }}>Collateral management</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard style={{ position: 'absolute', marginTop: 400 }}>
          <Text style={{ fontWeight: 700, fontSize: 32 }}>Credit products fabric</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard style={{ position: 'absolute', right: '12%', marginTop: 100 }}>
          <Text style={{ fontWeight: 700, fontSize: 32 }}>LP yield generation</Text>
        </GradientNoFilledCard>
      </div>
    </div>
  );
};

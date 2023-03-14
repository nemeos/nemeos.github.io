import { GradientNoFilledCard } from '@/components/GradientNoFilledCard';
import { Text } from '@/components/Text';

export const Infrastructure = () => {
  return (
    <div>
      <Text style={{ fontWeight: 700, fontSize: 40 }}>Discover our infrastructure</Text>
      <div style={{ height: 900, marginTop: 40 }}>
        <GradientNoFilledCard
          style={{ position: 'absolute', left: '5%', marginTop: 100, width: 424, height: 424 }}
          contentWhenHovered={<MarketValueAssessmentContent />}
        >
          <Text style={{ fontWeight: 700, fontSize: 32 }}>Market value assessment</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard style={{ position: 'absolute', width: 424, height: 424 }}>
          <Text style={{ fontWeight: 700, fontSize: 32 }}>Collateral management</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard style={{ position: 'absolute', marginTop: 400, width: 424, height: 424 }}>
          <Text style={{ fontWeight: 700, fontSize: 32 }}>Credit products fabric</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard style={{ position: 'absolute', right: '12%', marginTop: 100, width: 424, height: 424 }}>
          <Text style={{ fontWeight: 700, fontSize: 32 }}>LP yield generation</Text>
        </GradientNoFilledCard>
      </div>
    </div>
  );
};

const MarketValueAssessmentContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(67.02deg, #000066 2.66%, #0047FF 52.33%, #00F0FF 112.92%)',
        padding: 40,
        zIndex: 4,
      }}
    >
      <Text style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>Market value assessment</Text>
      <Text style={{ fontWeight: 500, fontSize: 16 }}>
        We focus on NFTs with tangible utilities (gaming assets, tokenized assets, etc.), not on hyped apes. The loan
        LTV is estimated based on internal valuation models. As Nemeos will evolve into a DAO, a part of scoring will be
        delegated to community expertise.
      </Text>
    </div>
  );
};

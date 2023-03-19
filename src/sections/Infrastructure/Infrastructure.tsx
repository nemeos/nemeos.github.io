import { GradientNoFilledCard } from '@/components/GradientNoFilledCard';
import { Text } from '@/components/Text';

export const Infrastructure = () => {
  return (
    <div>
      <Text style={{ fontWeight: 700, fontSize: 40 }}>Discover our infrastructure</Text>
      <div style={{ height: 900, marginTop: 40 }}>
        <GradientNoFilledCard
          style={{ position: 'absolute', left: '5%', marginTop: 100, width: 424, height: 424 }}
          contentWhenHovered={
            <Content
              title="Market value assessment"
              content="We focus on NFTs with tangible utilities (gaming assets, tokenized assets, etc.), not on hyped apes. The loan
          LTV is estimated based on internal valuation models. As Nemeos will evolve into a DAO, a part of scoring will be
          delegated to community expertise."
            />
          }
        >
          <Text style={{ fontWeight: 700, fontSize: 32 }}>Market value assessment</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard
          style={{ position: 'absolute', width: 424, height: 424 }}
          contentWhenHovered={
            <Content
              title="Collateral management"
              content="User is scored based on previous loans done with Nemeos. After full repayment of each credit, users are rewarded with a SBT. The score impacts future financing conditions , in order to reward the best behaviors."
            />
          }
        >
          <Text style={{ fontWeight: 700, fontSize: 32 }}>Collateral management</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard
          style={{ position: 'absolute', marginTop: 400, width: 424, height: 424 }}
          contentWhenHovered={
            <Content
              title="Credit products fabric"
              content="The bought NFT is the loan collateral. In case of non-repayment, the asset is foreclosed and sold."
            />
          }
        >
          <Text style={{ fontWeight: 700, fontSize: 32 }}>Credit products fabric</Text>
        </GradientNoFilledCard>
        <GradientNoFilledCard
          style={{ position: 'absolute', right: '12%', marginTop: 100, width: 424, height: 424 }}
          contentWhenHovered={
            <Content
              title="LP yield  generation"
              content="Loans are at fixed rate, with fixed tenor. LP yield only depends on the usage rate of provided liquidity. Undrawn liquidity will be invested in other DeFi protocols to optimize yield generation."
            />
          }
        >
          <Text style={{ fontWeight: 700, fontSize: 32 }}>LP yield generation</Text>
        </GradientNoFilledCard>
      </div>
    </div>
  );
};

const Content = ({ title, content }: { title: string; content: string }) => {
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
      <Text style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>{title}</Text>
      <Text style={{ fontWeight: 500, fontSize: 16 }}>{content}</Text>
    </div>
  );
};

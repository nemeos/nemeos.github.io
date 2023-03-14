interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const GradientNoFilledCard = ({ children, style }: Props) => {
  return (
    <div
      style={{
        border: '4px solid',
        borderImage: 'linear-gradient(50.57deg, rgba(0, 0, 102, 0) 3.82%, #0047FF 71.86%, #00F0FF 107.42%)',
        borderImageSlice: '1',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <div
        style={{
          maxWidth: 280,
        }}
      >
        {children}
      </div>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Card = ({ children, style }: Props) => {
  return (
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
        ...style,
      }}
    >
      {children}
    </div>
  );
};

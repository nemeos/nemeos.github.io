interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Text = ({ children, style }: Props) => {
  return <span style={style}>{children}</span>;
};

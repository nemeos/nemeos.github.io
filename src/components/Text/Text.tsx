interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Text = ({ children, style, className }: Props) => {
  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
};

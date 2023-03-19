import { useState } from 'react';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  contentWhenHovered?: React.ReactNode;
}

export const GradientNoFilledCard = ({ children, style, contentWhenHovered }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
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
        width: 420,
        height: 420,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        ...style,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering && !!contentWhenHovered ? contentWhenHovered : children}
    </div>
  );
};

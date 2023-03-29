import { useState } from 'react';

import styles from './GradientNoFilledCard.module.css';

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
    <div className={styles.container_grcard} style={style} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isHovering && !!contentWhenHovered ? contentWhenHovered : children}
    </div>
  );
};

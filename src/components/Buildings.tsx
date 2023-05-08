import { useWindowSize } from '@/helpers/useWindowSize';
import Image from 'next/image';
import { useMemo } from 'react';

export const BuildingsImage = () => {
  const windowSizes = useWindowSize();

  console.log('windowSizes', windowSizes);

  const topOffset = useMemo(() => {
    const { width } = windowSizes;
    if (!width) return 0;

    const mainOffset = width ? 0.3 * (width - 2500) : 0;
    if (width < 920) return mainOffset + 300;
    return mainOffset;
  }, [windowSizes]);

  return (
    <Image
      style={{
        position: 'absolute',
        left: 0,
        top: topOffset + 60,
        zIndex: -1,
        width: '100%',
      }}
      src="/buildings.svg"
      alt="Nemeos"
      width={2500}
      height={2133}
    />
  );
};

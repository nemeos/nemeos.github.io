import Image from 'next/image';

export const Header = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/logo.svg" alt="Nemeos Logo" width={56} height={56} style={{ marginRight: 16 }} priority />
        <Image src="/nemeos.svg" alt="Nemeos" width={170} height={24} priority />
      </div>
    </div>
  );
};

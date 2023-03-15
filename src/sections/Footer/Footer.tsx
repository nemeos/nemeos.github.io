import { Text } from '@/components/Text';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        paddingTop: 80,
        paddingBottom: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(4,4,40,1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/logo.svg" alt="Nemeos Logo" width={56} height={56} style={{ marginRight: 16 }} priority />
        <Image src="/nemeos.svg" alt="Nemeos" width={170} height={24} priority />
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: 50, marginBottom: 50 }}>
        <Text style={{ fontWeight: 700, marginRight: 10, marginLeft: 10 }}>Home</Text>
        <Text style={{ fontWeight: 700, marginRight: 10, marginLeft: 10 }}>About</Text>
        <Text style={{ fontWeight: 700, marginRight: 10, marginLeft: 10 }}>Docs</Text>
        <Text style={{ fontWeight: 700, marginRight: 10, marginLeft: 10 }}>Partners</Text>
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginBottom: 50 }}>
        <Image
          style={{ marginRight: 10, marginLeft: 10 }}
          src="/github.svg"
          alt="Nemeos"
          width={30}
          height={30}
          priority
        />
        <Image
          style={{ marginRight: 10, marginLeft: 10 }}
          src="/linkedin.svg"
          alt="Nemeos"
          width={30}
          height={30}
          priority
        />
      </div>
      <Text style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>©️ Copyright 2023 Nemeos</Text>
    </div>
  );
};

import { Text } from '@/components/Text';
import Image from 'next/image';
import Link from 'next/link';

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
        <Image src="/nemeos.png" alt="Nemeos" width={170} height={24} priority />
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: 50, marginBottom: 50 }}>
        <Link href="/" passHref>
          <Text style={{ fontWeight: 700, marginRight: 10, marginLeft: 10 }}>Home</Text>
        </Link>
        <Link href="/" passHref>
          <Text style={{ fontWeight: 700, marginRight: 10, marginLeft: 10 }}>About</Text>
        </Link>
        <Link href="/" passHref>
          <Text style={{ fontWeight: 700, marginRight: 10, marginLeft: 10 }}>Docs</Text>
        </Link>
        <Link href="/" passHref>
          <Text style={{ fontWeight: 700, marginRight: 10, marginLeft: 10 }}>Partners</Text>
        </Link>
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginBottom: 50 }}>
        <Link href="https://github.com/nemeos" passHref>
          <Image
            style={{ marginRight: 10, marginLeft: 10 }}
            src="/github.svg"
            alt="Nemeos"
            width={30}
            height={30}
            priority
          />
        </Link>
        <Link href="https://www.linkedin.com/company/nemeos-finance/about/" passHref>
          <Image
            style={{ marginRight: 10, marginLeft: 10 }}
            src="/linkedin.svg"
            alt="Nemeos"
            width={30}
            height={30}
            priority
          />
        </Link>
        <Link href="https://twitter.com/Nemeos_Finance" passHref>
          <Image
            style={{ marginRight: 10, marginLeft: 10 }}
            src="/twitter.svg"
            alt="Nemeos"
            width={30}
            height={30}
            priority
          />
        </Link>
      </div>
      <Text style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>©️ Copyright 2023 Nemeos</Text>
    </div>
  );
};

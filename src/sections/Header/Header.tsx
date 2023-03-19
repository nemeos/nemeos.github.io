import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 180px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/logo.svg" alt="Nemeos Logo" width={56} height={56} style={{ marginRight: 16 }} priority />
        <Image src="/nemeos.svg" alt="Nemeos" width={170} height={24} priority />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Link href="/" passHref>
          <Text style={{ fontSize: 16, marginRight: 16 }}>Products</Text>
        </Link>
        <Link href="/" passHref>
          <Text style={{ fontSize: 16, marginRight: 16 }}>Resources</Text>
        </Link>
        <Link href="mailto:francois@nemeos.finance" passHref>
          <Button>
            <Text style={{ fontSize: 16, color: '#fff' }}>Contact Us</Text>
          </Button>
        </Link>
      </div>
    </div>
  );
};

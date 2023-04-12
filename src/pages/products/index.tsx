import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LandingPage from '../index';

const ProductsSection = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/products') {
      const target = document.getElementById('products');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);

  return <LandingPage />;
};

export default ProductsSection;

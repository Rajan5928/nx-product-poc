import { useEffect, useState } from 'react';
import { ProductCard } from '@nx-product-poc/shared-ui';
import { Product } from '@nx-product-poc/shared-types';
import {
  addToCart,
  getCartCount,
  clearCart,
} from '@nx-product-poc/shared-utils';

const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15',
    price: 80000,
    image: 'https://picsum.photos/300?1',
  },
  {
    id: '2',
    name: 'MacBook Air',
    price: 120000,
    image: 'https://picsum.photos/300?2',
  },
  {
    id: '3',
    name: 'AirPods Pro',
    price: 25000,
    image: 'https://picsum.photos/300?3',
  },
  {
    id: '4',
    name: 'iPad Pro',
    price: 90000,
    image: 'https://picsum.photos/300?4',
  },
];

export function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const handleBuy = (product: Product) => {
    addToCart(product);
    setCount(getCartCount());
    setMessage(`${product.name} added to cart ✅`);

    setTimeout(() => setMessage(''), 2000);
  };

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      {/* HEADER */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <h1>🛍️ Product Store</h1>

        <div style={{ display: 'flex', gap: '10px' }}>
          <span>Cart: {count}</span>
          <button onClick={() => { clearCart(); setCount(0); }}>
            Clear
          </button>
        </div>
      </div>

      {/* MESSAGE */}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      {/* GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
}
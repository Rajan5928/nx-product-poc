import { useState } from 'react';
import { Product } from '@nx-product-poc/shared-types';
import { Button } from './Button';

export const ProductCard = ({
  product,
  onBuy,
}: {
  product: Product;
  onBuy: (p: Product) => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'white',
        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
        transition: '0.3s',
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={product.image}
        style={{
          width: '100%',
          height: '140px',
          objectFit: 'cover',
        }}
      />

      <div style={{ padding: '16px' }}>
        <h3>{product.name}</h3>
        <p style={{ fontWeight: 'bold' }}>₹{product.price}</p>

        <Button label="Buy Now" onClick={() => onBuy(product)} />
      </div>
    </div>
  );
};
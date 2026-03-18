import { Product } from '@nx-product-poc/shared-types';
import { Button } from '@nx-product-poc/shared-ui';

const products: Product[] = [
  { id: '1', name: 'iPhone 15', price: 80000, image: '' },
  { id: '2', name: 'MacBook Air', price: 120000, image: '' },
];

export function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      {/* SIDEBAR */}
      <div
        style={{
          width: '220px',
          background: '#111',
          color: 'white',
          padding: '20px',
        }}
      >
        <h2>Admin</h2>
        <p>Dashboard</p>
        <p>Products</p>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, padding: '20px', background: '#f5f5f5' }}>
        <h1>📊 Dashboard</h1>

        {/* ACTION */}
        <div style={{ marginBottom: '20px' }}>
          <Button label="Add Product" onClick={() => alert('Add clicked')} />
        </div>

        {/* CARDS */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={card}>Total: {products.length}</div>
          <div style={card}>Revenue: ₹2,00,000</div>
        </div>

        {/* LIST */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '12px' }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: '1px solid #eee',
              }}
            >
              <span>{p.name}</span>
              <span>₹{p.price}</span>

              <div style={{ display: 'flex', gap: '10px' }}>
                <Button label="Edit" />
                <Button label="Delete" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const card = {
  background: 'white',
  padding: '20px',
  borderRadius: '12px',
};
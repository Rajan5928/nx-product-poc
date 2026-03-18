type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 16px',
        background: '#111',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};
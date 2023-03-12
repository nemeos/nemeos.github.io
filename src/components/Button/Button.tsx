import React from 'react';

interface Props {
  children: React.ReactNode;
  width?: number;
}

export const Button = ({ children, width }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #E7ECF6',
        borderRadius: 32,
        height: 40,
        padding: 16,
        boxShadow: '0px 0px 40px rgba(4, 4, 40, 0.56)',
        background: 'linear-gradient(263.73deg, #00F0FF 4.64%, #7F18E7 107.69%)',
        ...{ width },
      }}
    >
      {children}
    </div>
  );
};

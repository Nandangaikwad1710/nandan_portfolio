import React from 'react';

export default function PageLoader() {
  return (
    <div
      style={{
        minHeight: '80vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#09090b',
        color: '#ffffff'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span
          style={{
            fontFamily: "var(--_typography---font-family--heading-font, 'Bebas Neue', sans-serif)",
            fontSize: '28px',
            letterSpacing: '0.08em',
            color: '#ab9bff'
          }}
        >
          // NANDAN GAIKWAD
        </span>
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            animation: 'pulse 1s infinite alternate'
          }}
        />
      </div>
    </div>
  );
}

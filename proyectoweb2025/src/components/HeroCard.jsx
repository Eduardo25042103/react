import React, { useState } from 'react';

const HeroCard = ({ styles, agregarAlCarrito, setCurrentPage }) => {
  const [agregado, setAgregado] = useState(false);

  const cevichemixto = {
    id: 'hero-cev-mixto',
    name: 'Ceviche Mixto',
    description: 'Pescado fresco, mixto, cebolla',
    price: 'S/ 52.00',
    image: require('../assets/cevichemixto.png')
  };

  const handleOrdenarAhora = () => {
    if (agregarAlCarrito) {
      agregarAlCarrito(cevichemixto);
      setAgregado(true);
      
      setTimeout(() => {
        setAgregado(false);
      }, 2000);
    }
  };

  const handleVerMenu = () => {
    if (setCurrentPage) {
      setCurrentPage('menu');
    }
  };

  return (
    <div style={{
      ...styles.heroCard,
      position: 'relative'
    }}>
      {agregado && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: '#4CAF50',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: '600',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
          animation: 'slideInDown 0.3s'
        }}>
          ✓ Agregado al carrito
        </div>
      )}

      <div style={styles.heroContent}>
        <h2 style={styles.heroTitle}>Ceviche<br />Mixto</h2>
        <div style={styles.heroPrice}>S/ 52.00</div>
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={handleOrdenarAhora}
            style={{
              ...styles.btnOrder,
              background: agregado ? '#4CAF50' : 'white',
              transform: agregado ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s'
            }}
          >
            {agregado ? '✓ Agregado' : 'Ordenar ahora'}
          </button>
          <button 
            onClick={handleVerMenu}
            style={{
              background: 'transparent',
              color: 'white',
              padding: '10px 26px',
              border: '2px solid white',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#5A8277';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            Ver menú completo
          </button>
        </div>
      </div>
      <div style={styles.heroImage}>
        <img src={require('../assets/cevichemixto.png')} alt="Ceviche Mixto" />
      </div>

      <style>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroCard;
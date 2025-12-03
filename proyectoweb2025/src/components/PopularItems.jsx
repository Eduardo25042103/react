import React, { useState } from 'react';
import lomoImage from '../assets/lomosaltado.webp';
import ajiImage from '../assets/gallinaaji.png';

const PopularItems = ({ styles, agregarAlCarrito }) => {
  const [itemAgregado, setItemAgregado] = useState(null);

  const items = [
    { 
      id: 'pop-lomo',
      name: 'Lomo saltado', 
      description: 'Carne de res papas, tomate, cebolla',
      price: 'S/ 42.00',
      image: lomoImage
    },
    { 
      id: 'pop-aji',
      name: 'Ají de gallina',
      description: 'Pollo deshilachado, crema de ají amarillo',
      oldPrice: 'S/ 43.00', 
      price: 'S/ 32.00',
      image: ajiImage
    }
  ];

  const handleAgregarAlCarrito = (item) => {
    if (agregarAlCarrito) {
      agregarAlCarrito(item);
      setItemAgregado(item.id);
      
      setTimeout(() => {
        setItemAgregado(null);
      }, 2000);
    }
  };

  return (
    <div style={styles.popularSection}>
      <div style={styles.sectionTitle}>
        <span>⭐</span>
        <span>MÁS POPULARES</span>
      </div>

      {items.map((item, idx) => (
        <div 
          key={idx} 
          className="popular-item-hover"
          style={{
            ...styles.popularItem,
            position: 'relative',
            background: itemAgregado === item.id ? '#F0FFF4' : 'transparent',
            transition: 'all 0.3s ease'
          }}
        >
          {itemAgregado === item.id && (
            <div style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: '#4CAF50',
              color: 'white',
              padding: '4px 10px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '600',
              zIndex: 10,
              animation: 'slideInDown 0.3s'
            }}>
              ✓ Agregado
            </div>
          )}

          <div style={{
            ...styles.popularImage,
            background: 'none',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img 
              src={item.image} 
              alt={item.name}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={styles.popularInfo}>
            <div style={styles.popularName}>{item.name}</div>
            {item.oldPrice && (
              <div style={styles.popularDiscount}>{item.oldPrice}</div>
            )}
            <div style={styles.popularPrice}>{item.price}</div>
          </div>
          <button 
            onClick={() => handleAgregarAlCarrito(item)}
            className="btn-add-hover"
            style={{
              ...styles.btnAdd,
              background: itemAgregado === item.id ? '#4CAF50' : '#E89A5F',
              transform: itemAgregado === item.id ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.3s'
            }}
          >
            {itemAgregado === item.id ? '✓' : '+'}
          </button>
        </div>
      ))}

      <style>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .popular-item-hover:hover {
          background: #F9F9F9 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .popular-item-hover:hover .btn-add-hover {
          transform: scale(1.15);
          box-shadow: 0 4px 8px rgba(232, 154, 95, 0.3);
        }
      `}</style>
    </div>
  );
};

export default PopularItems;
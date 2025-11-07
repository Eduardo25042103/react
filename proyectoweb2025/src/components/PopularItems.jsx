import React from 'react';
import lomoImage from '../assets/lomosaltado.webp';
import ajiImage from '../assets/gallinaaji.png';

const PopularItems = ({ styles }) => {
  const items = [
    { 
      name: 'Lomo saltado', 
      price: 'S/ 42.00',
      image:  lomoImage
    },
    { 
      name: 'Ají de gallina', 
      oldPrice: 'S/ 43.00', 
      price: 'S/ 32.00',
      image: ajiImage
    }
  ];

  return (
    <div style={styles.popularSection}>
      <div style={styles.sectionTitle}>
        <span>⭐</span>
        <span>MÁS POPULARES</span>
      </div>

      {items.map((item, idx) => (
        <div key={idx} style={styles.popularItem}>
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
          <button style={styles.btnAdd}>+</button>
        </div>
      ))}
    </div>
  );
};

export default PopularItems;
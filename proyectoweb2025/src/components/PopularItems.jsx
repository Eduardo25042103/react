import React from 'react';

const PopularItems = ({ styles }) => {
  const items = [
    { icon: '🥩', name: 'Lomo saltado', price: 'S/ 42.00' },
    { icon: '🍗', name: 'Ají de gallina', oldPrice: 'S/ 43.00', price: 'S/ 32.00' }
  ];

  return (
    <div style={styles.popularSection}>
      <div style={styles.sectionTitle}>
        <span>⭐</span>
        <span>MÁS POPULARES</span>
      </div>

      {items.map((item, idx) => (
        <div key={idx} style={styles.popularItem}>
          <div style={styles.popularImage}>{item.icon}</div>
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
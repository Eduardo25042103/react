import React from 'react';

const Categories = ({ styles }) => {
  const categories = [
    { icon: '🐟', name: 'Ceviches' },
    { icon: '🥘', name: 'Criollos' },
    { icon: '🍰', name: 'Postres' }
  ];

  return (
    <div style={styles.categoriesSection}>
      <div style={styles.sectionTitle}>
        <span>🛒</span>
        <span>CATEGORÍAS</span>
      </div>
      <div style={styles.categoriesGrid}>
        {categories.map((cat, idx) => (
          <div key={idx} style={styles.categoryItem}>
            <div style={styles.categoryIcon}>{cat.icon}</div>
            <div style={styles.categoryName}>{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
import React from 'react';
import ceviches from '../assets/ceviches.png'; 
import criollos from '../assets/criollo.png';
import postres from '../assets/postre.webp';


const Categories = ({ styles }) => {
  const categories = [
    { 
      name: 'Ceviches',
      bg: '#C5E5E0',
      image: ceviches,
    },
    { 
      name: 'Criollos',
      bg: '#FFE8CC',
      image: criollos,
    },
    { 
      name: 'Postres',
      bg: '#FFD4E5',
      image: postres,
    }
  ];

 return (
    <div style={styles.categoriesSection}>
      <div style={styles.sectionTitle}>
        <span>CATEGORIAS</span>
      </div>
      <div style={styles.categoriesGrid}>
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            style={{
              ...styles.categoryItem,
              background: cat.bg
            }}
          >
            <div style={styles.categoryIcon}>
              <img 
                src={cat.image} 
                alt={cat.name}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div style={styles.categoryName}>{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
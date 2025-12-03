import React from 'react';
import ceviches from '../assets/ceviches.png'; 
import criollos from '../assets/criollo.png';
import postres from '../assets/postre.webp';

const Categories = ({ styles, setCurrentPage }) => {
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

  const handleCategoryClick = () => {
    if (setCurrentPage) {
      setCurrentPage('menu');
    }
  };

  return (
    <div style={styles.categoriesSection}>
      <div style={styles.sectionTitle}>
        <span>CATEGORIAS</span>
      </div>
      <div style={styles.categoriesGrid}>
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            onClick={handleCategoryClick}
            style={{
              ...styles.categoryItem,
              background: cat.bg,
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
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
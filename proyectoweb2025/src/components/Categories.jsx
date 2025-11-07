import React from 'react';

const Categories = ({ styles }) => {
  const categories = [
    { 
      name: 'Ceviches',
      bg: '#C5E5E0',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pez */}
          <ellipse cx="35" cy="30" rx="18" ry="12" fill="#2C5F5D"/>
          <path d="M17 30L10 24L17 26L10 36L17 34Z" fill="#2C5F5D"/>
          <circle cx="42" cy="28" r="2" fill="white"/>
          <circle cx="42" cy="28" r="1" fill="#1a3a38"/>
          <path d="M45 20C45 20 48 22 50 25" stroke="#2C5F5D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M45 40C45 40 48 38 50 35" stroke="#2C5F5D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M30 25C30 25 32 27 35 27" stroke="#1a3a38" strokeWidth="1" strokeLinecap="round"/>
          <path d="M30 32C30 32 32 34 35 34" stroke="#1a3a38" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      name: 'Criollos',
      bg: '#FFE8CC',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Causa Limeña */}
          <ellipse cx="30" cy="44" rx="20" ry="4" fill="#D4824B" opacity="0.2"/>
          <rect x="15" y="35" width="30" height="8" rx="1" fill="#F4D03F"/>
          <rect x="15" y="27" width="30" height="8" rx="1" fill="#E8B44C"/>
          <rect x="15" y="19" width="30" height="8" rx="1" fill="#F4D03F"/>
          <ellipse cx="30" cy="19" rx="15" ry="3" fill="#F9E79F"/>
          <circle cx="25" cy="23" r="1.5" fill="#8B4513"/>
          <circle cx="30" cy="31" r="1.5" fill="#8B4513"/>
          <circle cx="35" cy="39" r="1.5" fill="#8B4513"/>
          <path d="M20 16C20 16 18 14 20 12C22 10 24 12 24 12" stroke="#82E0AA" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M22 16L22 12" stroke="#82E0AA" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      name: 'Postres',
      bg: '#FFD4E5',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Helado */}
          <path d="M25 35L23 48C23 48 24 50 30 50C36 50 37 48 37 48L35 35" fill="#F4A460"/>
          <path d="M25 35L27 36L30 48L33 36L35 35Z" fill="#D2691E"/>
          <circle cx="30" cy="28" r="8" fill="#FFB6D9"/>
          <circle cx="25" cy="22" r="6" fill="#FF69B4"/>
          <circle cx="35" cy="22" r="6" fill="#FFB6D9"/>
          <ellipse cx="30" cy="20" rx="10" ry="8" fill="#FFC9E3"/>
          <path d="M25 15C25 15 27 12 30 12C33 12 35 15 35 15" stroke="#FF1493" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <circle cx="28" cy="20" r="1" fill="#FF1493"/>
          <circle cx="32" cy="20" r="1" fill="#FF1493"/>
          <circle cx="30" cy="24" r="1" fill="#FF1493"/>
        </svg>
      )
    }
  ];

  return (
    <div style={styles.categoriesSection}>
      <div style={styles.sectionTitle}>
        <span>🛒</span>
        <span>CATEGORÍAS</span>
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
            <div style={styles.categoryIcon}>{cat.icon}</div>
            <div style={styles.categoryName}>{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
import React from 'react';

const HeroCard = ({ styles }) => {
  return (
    <div style={styles.heroCard}>
      <div style={styles.heroContent}>
        <h2 style={styles.heroTitle}>Ceviche<br />Mixto</h2>
        <div style={styles.heroPrice}>S/ 52.00</div>
        <button style={styles.btnOrder}>Ordenar ahora</button>
      </div>
      <div style={styles.heroImage}>
        <img src={require('../assets/cevichemixto.png')} alt="Ceviche Mixto" />
      </div>
    </div>
  );
};

export default HeroCard;
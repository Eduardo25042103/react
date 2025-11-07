import React from 'react';

const Navbar = ({ onLogout, styles }) => {
  const PINE_IMAGE_URL = "/assets/pino.webp";

  return (
    <nav style={styles.navbar}>
      <div style={styles.navLogo}>
        <img src={PINE_IMAGE_URL} alt="El Pino" style={styles.navIcon} />
        <span style={styles.navText}>El Pino</span>
      </div>

      <div style={styles.navLinks}>
        <a href="#" style={styles.navLink}>Inicio</a>
        <a href="#" style={styles.navLink}>Menú</a>
        <a href="#" style={styles.navLink}>Nosotros</a>
        <a href="#" style={styles.navLink}>Reservas</a>
        <a href="#" style={styles.navLink}>Contacto</a>
      </div>

      <div style={styles.navActions}>
        <button onClick={onLogout} style={styles.btnSalir}>
          <span>⬅</span>
          <span>Salir</span>
        </button>
        <div style={styles.userAvatar}>M</div>
      </div>
    </nav>
  );
};

export default Navbar;
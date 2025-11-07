import React from 'react';

const Navbar = ({ onLogout, styles, setCurrentPage }) => {
  const PINE_IMAGE_URL = "/assets/pino.webp";

  const handleNavClick = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navLogo}>
        <img src={PINE_IMAGE_URL} alt="El Pino" style={styles.navIcon} />
        <span style={styles.navText}>El Pino</span>
      </div>

      <div style={styles.navLinks}>
        <button
          onClick={() => handleNavClick('home')}
          style={{
            ...styles.navLink,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit'
          }}
        >
          Inicio
        </button>
        <button
          onClick={() => handleNavClick('menu')}
          style={{
            ...styles.navLink,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit'
          }}
        >
          Menú
        </button>
        <button
          onClick={() => handleNavClick('nosotros')}
          style={{
            ...styles.navLink,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit'
          }}
        >
          Nosotros
        </button>
        <button
          onClick={() => handleNavClick('reservas')}
          style={{
            ...styles.navLink,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit'
          }}
        >
          Reservas
        </button>
        <button
          style={{
            ...styles.navLink,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit'
          }}
        >
          Contacto
        </button>
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
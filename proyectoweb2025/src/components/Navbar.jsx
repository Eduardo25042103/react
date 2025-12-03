import React from 'react';
import imagenelPino from '../assets/pino.png';

const Navbar = ({ onLogout, styles, setCurrentPage, carrito, setMostrarCarrito }) => {

  const handleNavClick = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  const cantidadTotal = carrito ? carrito.reduce((total, item) => total + item.cantidad, 0) : 0;

  return (
    <nav style={styles.navbar}>
      <div style={styles.navLogo}>
        <img src={imagenelPino} alt="El Pino" style={styles.navIcon} />
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
          onClick={() => handleNavClick('contacto')}
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
        {/* Botón del carrito */}
        {setMostrarCarrito && (
          <button
            onClick={() => setMostrarCarrito(true)}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span>Carrito</span>
            
            {/* Badge con cantidad */}
            {cantidadTotal > 0 && (
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#E89A5F',
                color: 'white',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: '700',
                border: '2px solid #2C5F4F',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
              }}>
                {cantidadTotal}
              </div>
            )}
          </button>
        )}

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
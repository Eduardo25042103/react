import React, { useState } from 'react';
import imagenelPino from '../assets/pino.png';

const Navbar = ({ onLogout, styles, setCurrentPage, carrito, setMostrarCarrito, userName, isGuest }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleNavClick = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  const cantidadTotal = carrito ? carrito.reduce((total, item) => total + item.cantidad, 0) : 0;

  // Obtener la inicial del nombre o mostrar ícono de invitado
  const getUserDisplay = () => {
    if (isGuest || !userName) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      );
    }
    return userName.charAt(0).toUpperCase();
  };

  const getUserLabel = () => {
    if (isGuest || !userName) {
      return 'Invitado';
    }
    return userName;
  };

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

        {/* Menú de usuario mejorado */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              padding: '6px 12px 6px 6px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
          >
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#E89A5F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '16px'
            }}>
              {getUserDisplay()}
            </div>
            <span>{getUserLabel()}</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{
                transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s'
              }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {/* Menú desplegable */}
          {showUserMenu && (
            <>
              {/* Overlay para cerrar el menú al hacer clic fuera */}
              <div 
                onClick={() => setShowUserMenu(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 998
                }}
              />
              
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 10px)',
                right: 0,
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                minWidth: '220px',
                overflow: 'hidden',
                zIndex: 999,
                animation: 'slideDown 0.2s ease-out'
              }}>
                {/* Info del usuario */}
                <div style={{
                  padding: '16px',
                  borderBottom: '1px solid #f0f0f0',
                  background: '#f9f9f9'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#E89A5F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '20px',
                      color: 'white'
                    }}>
                      {getUserDisplay()}
                    </div>
                    <div>
                      <div style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '2px'
                      }}>
                        {getUserLabel()}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#999'
                      }}>
                        {isGuest || !userName ? 'Sesión de invitado' : 'Usuario registrado'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opciones del menú */}
                {!isGuest && userName && (
                  <>
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        handleNavClick('perfil');
                      }}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: 'none',
                        background: 'transparent',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f9f9f9'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      Mi Perfil
                    </button>

                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        handleNavClick('mis-reservas');
                      }}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: 'none',
                        background: 'transparent',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f9f9f9'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      Mis Reservas
                    </button>
                  </>
                )}

                {/* Botón de cerrar sesión */}
                <div style={{
                  borderTop: '1px solid #f0f0f0',
                  padding: '8px'
                }}>
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onLogout();
                    }}
                    style={{
                      width: '100%',
                      padding: '10px 16px',
                      border: 'none',
                      background: 'transparent',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#e74c3c',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontWeight: '500',
                      borderRadius: '6px',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#fff5f5'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                      <polyline points="16 17 21 12 16 7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
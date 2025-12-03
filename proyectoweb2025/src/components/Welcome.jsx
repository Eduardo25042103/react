import React from 'react';
import imagenelPino from '../assets/pino.png';
import restaurantBg from '../assets/restaurant-bg.png'; 

const Welcome = ({ onEnter, styles }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurantBg}) center/cover`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Overlay con blur */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: 'blur(3px)',
        zIndex: 1
      }} />

      {/* Contenido principal */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
        maxWidth: '800px',
        padding: '40px 20px'
      }}>
        {/* Logo del pino */}
        <div style={{
          width: '120px',
          height: '120px',
          margin: '0 auto 30px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}>
          <img 
            src={imagenelPino} 
            alt="El Pino" 
            style={{
              width: '80px',
              height: 'auto',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
            }} 
          />
        </div>

        {/* Nombre del restaurante */}
        <h1 style={{
          fontSize: '72px',
          fontWeight: '300',
          fontStyle: 'italic',
          fontFamily: 'Brush Script MT, cursive',
          margin: '0 0 10px 0',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          letterSpacing: '2px'
        }}>
          El Pino
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: '24px',
          fontStyle: 'italic',
          color: '#E89A5F',
          marginBottom: '40px',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          fontWeight: '500'
        }}>
          El sabor peruano
        </p>

        {/* Divider decorativo */}
        <div style={{
          width: '100px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #E89A5F, transparent)',
          margin: '0 auto 30px',
          opacity: 0.8
        }} />

        {/* Título de bienvenida */}
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          marginBottom: '20px',
          textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)'
        }}>
          Bienvenido
        </h2>

        {/* Descripción */}
        <p style={{
          fontSize: '18px',
          lineHeight: '1.8',
          marginBottom: '50px',
          maxWidth: '600px',
          margin: '0 auto 50px',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          opacity: 0.95
        }}>
          Descubre nuestra selección de platos elaborados con ingredientes
          frescos y de temporada. Una experiencia gastronómica mediterránea que
          deleitará tus sentidos.
        </p>

        {/* Botón Ingresar */}
        <button
          onClick={onEnter}
          style={{
            padding: '18px 60px',
            fontSize: '18px',
            fontWeight: '600',
            background: '#E89A5F',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 8px 24px rgba(232, 154, 95, 0.4)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 32px rgba(232, 154, 95, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 24px rgba(232, 154, 95, 0.4)';
          }}
        >
          Ingresar
        </button>

        {/* Información adicional */}
        <div style={{
          marginTop: '60px',
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#E89A5F',
              marginBottom: '5px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }}>20+</div>
            <div style={{
              fontSize: '14px',
              opacity: 0.9,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}>Años de experiencia</div>
          </div>

          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#E89A5F',
              marginBottom: '5px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }}>45+</div>
            <div style={{
              fontSize: '14px',
              opacity: 0.9,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}>Platos únicos</div>
          </div>

          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#E89A5F',
              marginBottom: '5px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }}>4.8</div>
            <div style={{
              fontSize: '14px',
              opacity: 0.9,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}>Calificación</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
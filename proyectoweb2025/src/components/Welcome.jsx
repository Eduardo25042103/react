import React from 'react';
import imagenelPino from '../assets/pino.png';
import restaurantBg from '../assets/restaurant-bg.png'; 

const Welcome = ({ onEnter}) => {
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
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
        maxWidth: '700px',
        padding: '60px 50px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        margin: '20px'
      }}>
        
        <div style={{
          width: '110px',
          height: '110px',
          margin: '0 auto 25px',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}>
          <img 
            src={imagenelPino} 
            alt="El Pino" 
            style={{
              width: '75px',
              height: 'auto',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
            }} 
          />
        </div>

        
        <h1 style={{
          fontSize: '64px',
          fontWeight: '300',
          fontStyle: 'italic',
          fontFamily: 'Brush Script MT, cursive',
          margin: '0 0 5px 0',
          textShadow: '0 2px 15px rgba(0, 0, 0, 0.6)',
          letterSpacing: '1px'
        }}>
          El Pino
        </h1>

        <p style={{
          fontSize: '20px',
          fontStyle: 'italic',
          color: '#E89A5F',
          marginBottom: '30px',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
          fontWeight: '500'
        }}>
          El sabor peruano
        </p>

        
        <div style={{
          width: '100px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(232, 154, 95, 0.8), transparent)',
          margin: '0 auto 25px',
          opacity: 0.9
        }} />

        
        <h2 style={{
          fontSize: '28px',
          fontWeight: '600',
          marginBottom: '15px',
          textShadow: '0 2px 12px rgba(0, 0, 0, 0.6)',
          color: 'white'
        }}>
          Bienvenido
        </h2>

        
        <p style={{
          fontSize: '16px',
          lineHeight: '1.7',
          marginBottom: '35px',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
          color: 'rgba(255, 255, 255, 0.95)',
          padding: '0 20px'
        }}>
          Descubre nuestra selección de platos elaborados con ingredientes
          frescos y de temporada. Una experiencia gastronómica mediterránea que
          deleitará tus sentidos.
        </p>

       
        <button
          onClick={onEnter}
          style={{
            padding: '15px 50px',
            fontSize: '16px',
            fontWeight: '600',
            background: '#E89A5F',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 4px 20px rgba(232, 154, 95, 0.4)',
            textTransform: 'capitalize',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 25px rgba(232, 154, 95, 0.5)';
            e.target.style.background = '#D4824B';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(232, 154, 95, 0.4)';
            e.target.style.background = '#E89A5F';
          }}
        >
          Ingresar
        </button>

      </div>
    </div>
  );
};

export default Welcome;
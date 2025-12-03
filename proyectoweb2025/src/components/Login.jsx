import React, { useState } from 'react';
import imagenelPino from '../assets/pino.png';

const Login = ({ onLogin, onAdminLogin, onGuestLogin, styles }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar validación
    onLogin();
  };

  return (
    <div style={styles.loginScreen}>
      <div style={styles.loginContainer}>
        <div style={styles.loginFormBox}>
          <h1 style={styles.loginTitle}>Login</h1>

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Correo electrónico:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.formInput}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.formInput}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" style={styles.btnLogin}>
              Iniciar sesión
            </button>

            <a style={styles.forgotLink}>¿Olvidaste tu contraseña?</a>
          </form>

          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '30px 0 20px',
            gap: '10px'
          }}>
            <div style={{
              flex: 1,
              height: '1px',
              background: '#ddd'
            }} />
            <span style={{
              fontSize: '13px',
              color: '#999',
              fontWeight: '500'
            }}>O</span>
            <div style={{
              flex: 1,
              height: '1px',
              background: '#ddd'
            }} />
          </div>

          {/* Botón de continuar como invitado */}
          <button
            onClick={onGuestLogin}
            style={{
              width: '100%',
              padding: '14px',
              background: 'white',
              color: '#666',
              border: '2px solid #E89A5F',
              borderRadius: '4px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#FFF5EE';
              e.target.style.borderColor = '#D4824B';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'white';
              e.target.style.borderColor = '#E89A5F';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Continuar como invitado
          </button>

          {/* Texto informativo */}
          <p style={{
            fontSize: '12px',
            color: '#999',
            textAlign: 'center',
            marginTop: '15px',
            lineHeight: '1.5'
          }}>
            Como invitado podrás explorar el menú y hacer reservas sin necesidad de crear una cuenta
          </p>
        </div>

        <div style={styles.loginBrand}>
          <img src={imagenelPino} alt="El Pino" style={styles.brandIcon} />
          <div style={styles.brandName}>El Pino</div>
          <div style={styles.brandTagline}>El sabor peruano</div>
        </div>
      </div>

      {/* Botones de acceso rápido (solo para desarrollo) */}
      <div style={styles.loginFooter}>
        <button 
          onClick={onAdminLogin}
          style={styles.footerBtn}
        >
          admin
        </button>
        <button 
          onClick={onLogin}
          style={styles.footerBtn}
        >
          client
        </button>
      </div>
    </div>
  );
};

export default Login;
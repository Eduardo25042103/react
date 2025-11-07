import React from 'react';
import imagenelPino from '../assets/pino.png';

const Login = ({ onLogin, onAdminLogin, styles }) => {

  return (
    <div style={styles.loginScreen}>
      <div style={styles.loginContainer}>
        <div style={styles.loginFormBox}>
          <h1 style={styles.loginTitle}>Login</h1>

          <div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Correo electronico:</label>
              <input
                type="email"
                style={styles.formInput}
                placeholder="Value"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Contraseña:</label>
              <input
                type="password"
                style={styles.formInput}
                placeholder="Value"
              />
            </div>

            <button onClick={onLogin} style={styles.btnLogin}>
              Iniciar sesión
            </button>

            <a style={styles.forgotLink}>Olvidaste tu contraseña?</a>
          </div>
        </div>

        <div style={styles.loginBrand}>
          <img src={imagenelPino} alt="El Pino" style={styles.brandIcon} />
          <div style={styles.brandName}>El Pino</div>
          <div style={styles.brandTagline}>El sabor peruano</div>
        </div>
      </div>

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
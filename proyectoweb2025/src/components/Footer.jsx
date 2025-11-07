import React from 'react';

const Footer = ({ styles }) => {
  const PINE_IMAGE_URL = "/assets/pino.webp";

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div>
          <div style={styles.footerLogo}>
            <img src={PINE_IMAGE_URL} alt="El Pino" style={styles.footerIcon} />
            <span>El Pino</span>
          </div>
          <div style={styles.footerDescription}>
            Inicio<br />Menú<br />Nosotros<br />Reservas
          </div>
          <div style={styles.socialIcons}>
            {['📘', '📷', '🐦', '📹'].map((icon, idx) => (
              <div key={idx} style={styles.socialIcon}>{icon}</div>
            ))}
          </div>
        </div>

        <div>
          <div style={styles.footerTitle}>Inicio</div>
          <a href="#" style={styles.footerLink}>Menú</a>
          <a href="#" style={styles.footerLink}>Nosotros</a>
          <a href="#" style={styles.footerLink}>Reservas</a>
        </div>

        <div>
          <div style={styles.footerTitle}>Contacto</div>
          <div style={styles.footerLink}>+51 987654321</div>
          <div style={styles.footerLink}>info@elpino.pe</div>
          <div style={styles.footerLink}>Lima, Perú</div>
        </div>

        <div>
          <div style={styles.footerTitle}>Horarios</div>
          <div style={styles.footerLink}>L-V: 12:00m-10:00am</div>
          <div style={styles.footerLink}>S-D: 12-9:00am</div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        © 2025 El Pino. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const Nosotros = ({ styles }) => {
  const PINE_IMAGE_URL = "/assets/pino.webp";

  return (
    <div style={{
      background: '#F5F5F5',
      minHeight: 'calc(100vh - 70px)'
    }}>
      {/* Hero Section */}
      <div style={{
        background: '#5A8277',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: '600',
          marginBottom: '10px'
        }}>Nuestra Historia</h1>
        <p style={{
          fontSize: '16px',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto'
        }}>Más de 20 años sirviendo la auténtica gastronomía peruana con pasión y dedicación</p>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '50px 20px'
      }}>
        {/* About Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '60px'
        }}>
          <div>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '20px'
            }}>Somos El Pino</h2>
            
            <p style={{
              fontSize: '15px',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '15px'
            }}>
              Desde 2003, El Pino ha sido sinónimo de calidad y tradición culinaria peruana. Nuestro restaurante nació del sueño de compartir los sabores auténticos de nuestra tierra con el mundo.
            </p>
            
            <p style={{
              fontSize: '15px',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '15px'
            }}>
              Ubicados en el corazón de Lima, nos enorgullece cada platillo, desde el fresco ceviche hasta los más tradicionales platos criollos. Utilizamos solo ingredientes de la más alta calidad y recetas que han pasado de generación en generación.
            </p>
            
            <p style={{
              fontSize: '15px',
              color: '#666',
              lineHeight: '1.8'
            }}>
              Nuestro compromiso es ofrecer no solo comida excepcional, sino una experiencia completa que resalta la riqueza de nuestra cultura gastronómica, junto con un servicio que hace que cada cliente se sienta como en casa.
            </p>
          </div>

          <div style={{
            background: '#5A8277',
            borderRadius: '16px',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px'
          }}>
            <img src={PINE_IMAGE_URL} alt="El Pino" style={{
              width: '150px',
              height: 'auto',
              marginBottom: '20px'
            }} />
            <div style={{
              fontSize: '48px',
              fontWeight: '300',
              fontStyle: 'italic',
              color: 'white',
              fontFamily: 'Brush Script MT, cursive',
              marginBottom: '10px'
            }}>EL PINO</div>
            <div style={{
              fontSize: '18px',
              color: 'white',
              fontStyle: 'italic',
              opacity: 0.9
            }}>El sabor peruano</div>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {[
            { value: '20+', label: 'Años de Experiencia' },
            { value: '50K+', label: 'Clientes Satisfechos' },
            { value: '4.8', label: 'Calificación Promedio' },
            { value: '45+', label: 'Platos Únicos' }
          ].map((stat, idx) => (
            <div key={idx} style={{
              background: 'white',
              padding: '30px 20px',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#D4824B',
                marginBottom: '8px'
              }}>{stat.value}</div>
              <div style={{
                fontSize: '13px',
                color: '#666',
                fontWeight: '500'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#333',
            textAlign: 'center',
            marginBottom: '40px'
          }}>Nuestros Valores</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '30px'
          }}>
            {[
              { icon: '⭐', title: 'Calidad Superior', description: 'Usamos ingredientes cuidadosamente seleccionados para garantizar el mejor sabor en cada plato.' },
              { icon: '🤝', title: 'Servicio Excepcional', description: 'Nuestro equipo está comprometido en brindar una experiencia memorable a cada cliente.' },
              { icon: '🌱', title: 'Sostenibilidad', description: 'Trabajamos con proveedores locales y prácticas responsables con el medio ambiente.' },
              { icon: '🎯', title: 'Tradición', description: 'Respetamos y preservamos las recetas tradicionales de nuestra rica cultura gastronómica.' },
              { icon: '❤️', title: 'Pasión', description: 'Cada platillo es preparado con amor y dedicación, reflejando nuestra pasión por la cocina.' },
              { icon: '🏆', title: 'Excelencia', description: 'Buscamos superar las expectativas en cada aspecto de nuestro servicio y cocina.' }
            ].map((value, idx) => (
              <div key={idx} style={{
                background: 'white',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '15px'
                }}>{value.icon}</div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '10px'
                }}>{value.title}</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.6'
                }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
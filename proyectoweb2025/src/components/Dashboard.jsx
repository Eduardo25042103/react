import React, { useState } from 'react';

const Dashboard = ({ styles, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');
  
  const statsData = {
    reservasHoy: 24,
    clientesHoy: 86,
    ventasHoy: 3420,
    calificacion: 4.8
  };

  const reservasRecientes = [
    { id: 1, cliente: 'María González', mesa: 5, hora: '7:30 PM', personas: 4, estado: 'confirmada' },
    { id: 2, cliente: 'Juan Pérez', mesa: 3, hora: '8:00 PM', personas: 2, estado: 'pendiente' },
    { id: 3, cliente: 'Ana Torres', mesa: 7, hora: '6:30 PM', personas: 6, estado: 'confirmada' },
    { id: 4, cliente: 'Carlos Ruiz', mesa: 2, hora: '9:00 PM', personas: 4, estado: 'cancelada' },
    { id: 5, cliente: 'Laura Díaz', mesa: 8, hora: '7:00 PM', personas: 3, estado: 'confirmada' }
  ];

  const mesasEstado = [
    { numero: 1, capacidad: 4, estado: 'ocupada', ambiente: 'interior' },
    { numero: 2, capacidad: 4, estado: 'disponible', ambiente: 'interior' },
    { numero: 3, capacidad: 4, estado: 'reservada', ambiente: 'interior' },
    { numero: 4, capacidad: 4, estado: 'disponible', ambiente: 'interior' },
    { numero: 5, capacidad: 6, estado: 'ocupada', ambiente: 'interior' },
    { numero: 6, capacidad: 4, estado: 'disponible', ambiente: 'terraza' },
    { numero: 7, capacidad: 6, estado: 'reservada', ambiente: 'terraza' },
    { numero: 8, capacidad: 6, estado: 'disponible', ambiente: 'terraza' }
  ];

  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'disponible': return '#4CAF50';
      case 'ocupada': return '#f44336';
      case 'reservada': return '#FF9800';
      case 'confirmada': return '#4CAF50';
      case 'pendiente': return '#FF9800';
      case 'cancelada': return '#f44336';
      default: return '#999';
    }
  };

  const renderOverview = () => (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: '#FFE8CC',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '15px',
            fontSize: '24px'
          }}>📋</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#333', marginBottom: '5px' }}>
            {statsData.reservasHoy}
          </div>
          <div style={{ fontSize: '13px', color: '#666' }}>Reservas Hoy</div>
        </div>

        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: '#E3F2FD',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '15px',
            fontSize: '24px'
          }}>👥</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#333', marginBottom: '5px' }}>
            {statsData.clientesHoy}
          </div>
          <div style={{ fontSize: '13px', color: '#666' }}>Reservas Hoy</div>
        </div>

        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: '#E8F5E9',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '15px',
            fontSize: '24px'
          }}>💰</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#333', marginBottom: '5px' }}>
            S/ {statsData.ventasHoy.toLocaleString()}
          </div>
          <div style={{ fontSize: '13px', color: '#666' }}>Reservas Hoy</div>
        </div>

        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: '#FFF3E0',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '15px',
            fontSize: '24px'
          }}>⭐</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#333', marginBottom: '5px' }}>
            {statsData.calificacion}
          </div>
          <div style={{ fontSize: '13px', color: '#666' }}>Reservas Hoy</div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '20px'
      }}>
        
        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '20px'
          }}>Reservas Recientes</h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #f0f0f0' }}>
                  <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '13px', fontWeight: '600', color: '#666' }}>Cliente</th>
                  <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '13px', fontWeight: '600', color: '#666' }}>Mesa</th>
                  <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '13px', fontWeight: '600', color: '#666' }}>Hora</th>
                  <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '13px', fontWeight: '600', color: '#666' }}>Personas</th>
                  <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '13px', fontWeight: '600', color: '#666' }}>Estado</th>
                </tr>
              </thead>
              <tbody>
                {reservasRecientes.map((reserva) => (
                  <tr key={reserva.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '12px 8px', fontSize: '14px', color: '#333' }}>{reserva.cliente}</td>
                    <td style={{ padding: '12px 8px', fontSize: '14px', color: '#333' }}>Mesa {reserva.mesa}</td>
                    <td style={{ padding: '12px 8px', fontSize: '14px', color: '#333' }}>{reserva.hora}</td>
                    <td style={{ padding: '12px 8px', fontSize: '14px', color: '#333' }}>{reserva.personas}</td>
                    <td style={{ padding: '12px 8px' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: `${getEstadoColor(reserva.estado)}15`,
                        color: getEstadoColor(reserva.estado)
                      }}>
                        {reserva.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '20px'
          }}>Estado de Mesas</h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>
            {mesasEstado.map((mesa) => (
              <div key={mesa.numero} style={{
                padding: '15px',
                borderRadius: '8px',
                background: '#f9f9f9',
                border: `2px solid ${getEstadoColor(mesa.estado)}30`
              }}>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px'
                }}>Mesa {mesa.numero}</div>
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  marginBottom: '8px'
                }}>
                  {mesa.capacidad} personas • {mesa.ambiente}
                </div>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: '600',
                  background: getEstadoColor(mesa.estado),
                  color: 'white'
                }}>
                  {mesa.estado}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: '#F5F5F5', minHeight: '100vh' }}>
      
      <div style={{
        background: '#5A8277',
        padding: '0 40px',
        height: '70px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{ fontSize: '24px' }}>🌲</div>
          <span style={{ fontSize: '22px', fontStyle: 'italic' }}>El Pino</span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <button
            onClick={onLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: '1px solid white',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            <span>⬅</span>
            <span>Salir</span>
          </button>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#E89A5F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            fontSize: '16px'
          }}>A</div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        
        <div style={{
          width: '260px',
          background: '#2C5F5D',
          minHeight: 'calc(100vh - 70px)',
          padding: '30px 0'
        }}>
          <div style={{ padding: '0 20px', marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.6)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '15px'
            }}>Panel de administración</h2>
          </div>

          <nav>
            {[
              { id: 'overview', icon: '📊', label: 'Dashboard' },
              { id: 'calendar', icon: '📅', label: 'Calendario' },
              { id: 'reservas', icon: '📋', label: 'Gestión de Reservas' },
              { id: 'mesas', icon: '🪑', label: 'Mesas' },
              { id: 'clientes', icon: '👥', label: 'Clientes' },
              { id: 'config', icon: '⚙️', label: 'Configuración' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  background: activeSection === item.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: 'none',
                  borderLeft: activeSection === item.id ? '4px solid #E89A5F' : '4px solid transparent',
                  color: 'white',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '14px',
                  transition: 'all 0.2s'
                }}
              >
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        
        <div style={{ flex: 1, padding: '30px 40px' }}>
          <div style={{ marginBottom: '30px' }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '5px'
            }}>Dashboard</h1>
            <p style={{ fontSize: '14px', color: '#666' }}>
              Octubre 2025 - Vista Rápida
            </p>
          </div>

          {activeSection === 'overview' && renderOverview()}
          {activeSection !== 'overview' && (
            <div style={{
              background: 'white',
              padding: '60px',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚧</div>
              <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '10px' }}>
                Sección en desarrollo
              </h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Esta funcionalidad estará disponible próximamente
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
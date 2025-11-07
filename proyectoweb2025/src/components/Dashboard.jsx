import React, { useState } from 'react';

const Dashboard = ({ styles, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedFilter, setSelectedFilter] = useState('todas');
  const [selectedDate, setSelectedDate] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');
  
  const statsData = {
    reservasHoy: 24,
    clientesHoy: 86,
    ventasHoy: 3420,
    calificacion: 4.8
  };

  const reservasData = {
    todas: [
      { id: 1, hora: '7:30 pm', nombre: 'María García', telefono: '+51 987653765', personas: 4, mesa: 12, email: 'maria@email.com', estado: 'confirmada', pagado: 50 },
      { id: 2, hora: '7:30 pm', nombre: 'Carlos Ruiz', telefono: '+51 984423765', personas: 2, mesa: 5, email: 'carlos@email.com', estado: 'pendiente', pagado: 50 },
      { id: 3, hora: '7:30 pm', nombre: 'Ana Martínez', telefono: '+51 987265785', personas: 2, mesa: 12, email: 'ana@email.com', estado: 'confirmada', pagado: 50 }
    ],
    confirmadas: [
      { id: 1, hora: '7:30 pm', nombre: 'María García', telefono: '+51 987653765', personas: 4, mesa: 12, email: 'maria@email.com', estado: 'confirmada', pagado: 50 },
      { id: 3, hora: '7:30 pm', nombre: 'Ana Martínez', telefono: '+51 987265785', personas: 2, mesa: 12, email: 'ana@email.com', estado: 'confirmada', pagado: 50 }
    ],
    pendientes: [
      { id: 2, hora: '7:30 pm', nombre: 'Carlos Ruiz', telefono: '+51 984423765', personas: 2, mesa: 5, email: 'carlos@email.com', estado: 'pendiente', pagado: 50 }
    ],
    canceladas: []
  };

  const mesasOcupacion = [
    { hora: '12:00 PM', mesa12: true, mesa12_2: true, mesa12_3: true, mesa12_4: true },
    { hora: '12:00 PM', mesa12: true, mesa12_2: true, mesa12_3: true, mesa12_4: false },
    { hora: '12:00 PM', mesa12: true, mesa12_2: true, mesa12_3: true, mesa12_4: true },
    { hora: '12:00 PM', mesa12: true, mesa12_2: true, mesa12_3: true, mesa12_4: true },
    { hora: '12:00 PM', mesa12: true, mesa12_2: true, mesa12_3: true, mesa12_4: true },
    { hora: '12:00 PM', mesa12: true, mesa12_2: true, mesa12_3: true, mesa12_4: false }
  ];

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

  const getEstadoBadgeColor = (estado) => {
    switch(estado) {
      case 'confirmada': return { bg: '#C8E6C9', text: '#2E7D32' };
      case 'pendiente': return { bg: '#FFE8CC', text: '#E65100' };
      case 'cancelada': return { bg: '#FFCDD2', text: '#C62828' };
      default: return { bg: '#E0E0E0', text: '#424242' };
    }
  };

  const renderGestionReservas = () => {
    const currentReservas = reservasData[selectedFilter] || reservasData.todas;

    return (
      <div style={{ background: '#F8F9FA' }}>
        {/* Header con tabs */}
        <div style={{
          background: 'white',
          padding: '20px 30px',
          borderRadius: '12px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#333',
              margin: 0
            }}>Gestión de reservas</h2>
            
            <button style={{
              background: '#E89A5F',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>+</span>
              Nueva Reserva
            </button>
          </div>

          {/* Filtros */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {[
              { id: 'todas', label: 'Todas', color: '#E89A5F' },
              { id: 'confirmadas', label: 'Confirmadas', color: '#4CAF50' },
              { id: 'pendientes', label: 'Pendientes', color: '#FF9800' },
              { id: 'canceladas', label: 'Canceladas', color: '#f44336' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  background: selectedFilter === filter.id ? filter.color : '#F5F5F5',
                  color: selectedFilter === filter.id ? 'white' : '#666',
                  transition: 'all 0.2s'
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Buscador */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="🔍 Buscar reserva..."
              style={{
                width: '100%',
                padding: '10px 16px',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* Grid principal */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '20px'
        }}>
          {/* Lista de reservas */}
          <div>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '20px'
              }}>Reservas del {selectedDate} de Octubre</h3>

              {/* Tarjetas de reservas */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {currentReservas.map((reserva) => {
                  const badgeColor = getEstadoBadgeColor(reserva.estado);
                  return (
                    <div key={reserva.id} style={{
                      background: reserva.estado === 'confirmada' ? '#E8F5E9' : 
                                 reserva.estado === 'pendiente' ? '#FFF5EE' : '#F5F5F5',
                      border: `2px solid ${reserva.estado === 'confirmada' ? '#81C784' : 
                                          reserva.estado === 'pendiente' ? '#FFB74D' : '#E0E0E0'}`,
                      borderRadius: '12px',
                      padding: '16px',
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr auto',
                      gap: '16px',
                      alignItems: 'center'
                    }}>
                      {/* Hora */}
                      <div style={{
                        background: 'white',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        minWidth: '80px'
                      }}>
                        <div style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#333'
                        }}>{reserva.hora}</div>
                      </div>

                      {/* Info */}
                      <div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '8px'
                        }}>
                          <span style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#333'
                          }}>{reserva.nombre}</span>
                          <span style={{
                            padding: '3px 10px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '600',
                            background: badgeColor.bg,
                            color: badgeColor.text
                          }}>
                            {reserva.estado}
                          </span>
                        </div>

                        <div style={{
                          display: 'flex',
                          gap: '16px',
                          fontSize: '13px',
                          color: '#666'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span>👥</span>
                            <span>{reserva.personas} Personas</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span>🪑</span>
                            <span>Mesa {reserva.mesa}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span>📧</span>
                            <span>{reserva.email}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span>💰</span>
                            <span>Pagado S/.{reserva.pagado}</span>
                          </div>
                        </div>
                      </div>

                      {/* Acciones */}
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{
                          padding: '8px 12px',
                          background: '#2196F3',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          fontWeight: '600'
                        }}>Editar</button>
                        <button style={{
                          padding: '8px 12px',
                          background: '#f44336',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          fontWeight: '600'
                        }}>Cancelar</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar derecho */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Timeline de ocupación */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '15px'
              }}>Timeline de Ocupación</h3>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {mesasOcupacion.map((slot, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#666',
                      minWidth: '65px'
                    }}>{slot.hora}</div>
                    
                    <div style={{
                      flex: 1,
                      display: 'flex',
                      gap: '4px'
                    }}>
                      {Object.entries(slot).filter(([key]) => key !== 'hora').map(([key, value], i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: '30px',
                            borderRadius: '4px',
                            background: value ? '#FFB74D' : '#E0E0E0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            fontWeight: '600',
                            color: value ? 'white' : '#999'
                          }}
                        >
                          Mesa 12
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendario mini */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  margin: 0
                }}>Octubre 2025</h3>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button style={{
                    width: '28px',
                    height: '28px',
                    border: '1px solid #e5e5e5',
                    background: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>‹</button>
                  <button style={{
                    width: '28px',
                    height: '28px',
                    border: '1px solid #e5e5e5',
                    background: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>›</button>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '4px',
                textAlign: 'center'
              }}>
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, idx) => (
                  <div key={idx} style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#999',
                    padding: '6px 0'
                  }}>{day}</div>
                ))}
                
                <div></div>
                <div></div>
                
                {[...Array(19)].map((_, idx) => {
                  const dayNum = idx + 1;
                  return (
                    <button
                      key={dayNum}
                      onClick={() => setSelectedDate(dayNum)}
                      style={{
                        aspectRatio: '1',
                        border: 'none',
                        background: selectedDate === dayNum ? '#E89A5F' : 'transparent',
                        color: selectedDate === dayNum ? 'white' : '#333',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: selectedDate === dayNum ? '600' : '400'
                      }}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
          <div style={{ fontSize: '13px', color: '#666' }}>Clientes Hoy</div>
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
          <div style={{ fontSize: '13px', color: '#666' }}>Ventas Hoy</div>
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
          <div style={{ fontSize: '13px', color: '#666' }}>Calificación</div>
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
            }}>
              {activeSection === 'overview' && 'Dashboard'}
              {activeSection === 'calendar' && 'Calendario de Reservas'}
              {activeSection === 'reservas' && 'Gestión de Reservas'}
              {activeSection === 'mesas' && 'Gestión de Mesas'}
              {activeSection === 'clientes' && 'Gestión de Clientes'}
              {activeSection === 'config' && 'Configuración'}
            </h1>
            <p style={{ fontSize: '14px', color: '#666' }}>
              {activeSection === 'overview' && 'Octubre 2025 - Vista Rápida'}
              {(activeSection === 'calendar' || activeSection === 'reservas') && 'Administra y visualiza todas las reservas del restaurante'}
              {activeSection === 'mesas' && 'Administra las mesas del restaurante'}
              {activeSection === 'clientes' && 'Administra la información de los clientes'}
              {activeSection === 'config' && 'Configura las opciones del sistema'}
            </p>
          </div>

          {activeSection === 'overview' && renderOverview()}
          {(activeSection === 'calendar' || activeSection === 'reservas') && renderGestionReservas()}
          {activeSection !== 'overview' && activeSection !== 'calendar' && activeSection !== 'reservas' && (
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
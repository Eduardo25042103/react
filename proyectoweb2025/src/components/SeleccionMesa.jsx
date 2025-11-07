import React, { useState } from 'react';

const SeleccionMesa = ({ styles, reservaData, onBack, onConfirm }) => {
  const [selectedMesa, setSelectedMesa] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    personas: reservaData?.numPersonas || 4
  });

  // Datos de mesas según la imagen
  const mesas = [
    { id: 1, numero: 1, capacidad: 4, disponible: true, ambiente: 'interior' },
    { id: 2, numero: 2, capacidad: 4, disponible: false, ambiente: 'interior' },
    { id: 3, numero: 3, capacidad: 4, disponible: true, ambiente: 'interior' },
    { id: 4, numero: 4, capacidad: 4, disponible: true, ambiente: 'interior' },
    { id: 5, numero: 5, capacidad: 6, disponible: true, ambiente: 'interior' },
    { id: 6, numero: 6, capacidad: 4, disponible: true, ambiente: 'terraza' },
    { id: 7, numero: 7, capacidad: 6, disponible: true, ambiente: 'terraza' },
    { id: 8, numero: 8, capacidad: 6, disponible: true, ambiente: 'terraza' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContinue = () => {
    if (selectedMesa && formData.nombre && formData.apellido) {
      const reservaCompleta = {
        ...reservaData,
        mesa: selectedMesa,
        nombre: formData.nombre,
        apellido: formData.apellido,
        personas: formData.personas
      };
      onConfirm?.(reservaCompleta);
    } else {
      alert('Por favor completa todos los campos y selecciona una mesa');
    }
  };

  const getMesaIcon = (mesa) => {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="15" y="20" width="30" height="25" rx="2" fill={mesa.disponible ? '#D4824B' : '#999'} />
        <circle cx="20" cy="50" r="3" fill={mesa.disponible ? '#8B4513' : '#666'} />
        <circle cx="40" cy="50" r="3" fill={mesa.disponible ? '#8B4513' : '#666'} />
        <rect x="18" y="45" width="2" height="5" fill={mesa.disponible ? '#8B4513' : '#666'} />
        <rect x="40" y="45" width="2" height="5" fill={mesa.disponible ? '#8B4513' : '#666'} />
        {/* Sillas alrededor */}
        <circle cx="30" cy="15" r="4" fill={mesa.disponible ? '#C8A882' : '#888'} />
        <circle cx="30" cy="50" r="4" fill={mesa.disponible ? '#C8A882' : '#888'} />
        <circle cx="10" cy="32" r="4" fill={mesa.disponible ? '#C8A882' : '#888'} />
        <circle cx="50" cy="32" r="4" fill={mesa.disponible ? '#C8A882' : '#888'} />
      </svg>
    );
  };

  return (
    <div style={{
      background: '#F5F0E8',
      minHeight: 'calc(100vh - 70px)',
      padding: '40px 20px'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: '600',
          color: '#333',
          marginBottom: '10px'
        }}>Selecciona tu mesa</h1>
        <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px'
        }}>
          Elige la mesa que prefieras para tu reserva del {reservaData?.selectedDate} de Octubre a las {reservaData?.selectedTime}
        </p>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: '30px'
      }}>
        {/* Mesas Grid */}
        <div>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '25px'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#333'
              }}>Mesas disponibles</h3>
              
              {/* Leyenda */}
              <div style={{
                display: 'flex',
                gap: '20px',
                fontSize: '13px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    background: '#C5E5E0',
                    borderRadius: '4px'
                  }} />
                  <span style={{ color: '#666' }}>Disponible</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    background: '#FFE5E5',
                    borderRadius: '4px'
                  }} />
                  <span style={{ color: '#666' }}>No Disponible</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    background: '#FFE8CC',
                    border: '2px solid #E89A5F',
                    borderRadius: '4px'
                  }} />
                  <span style={{ color: '#666' }}>Tu selección</span>
                </div>
              </div>
            </div>

            {/* Grid de Mesas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '15px'
            }}>
              {mesas.map((mesa) => (
                <div
                  key={mesa.id}
                  onClick={() => mesa.disponible && setSelectedMesa(mesa)}
                  style={{
                    background: !mesa.disponible 
                      ? '#FFE5E5' 
                      : selectedMesa?.id === mesa.id 
                        ? '#FFE8CC' 
                        : '#C5E5E0',
                    padding: '20px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    cursor: mesa.disponible ? 'pointer' : 'not-allowed',
                    border: selectedMesa?.id === mesa.id ? '2px solid #E89A5F' : '2px solid transparent',
                    transition: 'all 0.3s',
                    opacity: !mesa.disponible ? 0.6 : 1
                  }}
                >
                  <div style={{ marginBottom: '10px' }}>
                    {getMesaIcon(mesa)}
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#333',
                    marginBottom: '4px'
                  }}>
                    Mesa {mesa.numero}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '4px'
                  }}>
                    👥 {mesa.capacidad} personas
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#666',
                    fontWeight: '500',
                    padding: '4px 8px',
                    background: 'rgba(255,255,255,0.5)',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginBottom: '6px'
                  }}>
                    {mesa.ambiente === 'interior' ? '🏠 Interior' : '🌳 Terraza'}
                  </div>
                  {!mesa.disponible && (
                    <div style={{
                      fontSize: '11px',
                      color: '#e74c3c',
                      fontWeight: '600'
                    }}>
                      ❌ Ocupada
                    </div>
                  )}
                  {mesa.disponible && selectedMesa?.id === mesa.id && (
                    <div style={{
                      fontSize: '11px',
                      color: '#E89A5F',
                      fontWeight: '600'
                    }}>
                      ✓ Seleccionada
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Información adicional */}
          <div style={{
            background: 'white',
            padding: '20px 25px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            fontSize: '13px',
            color: '#666',
            lineHeight: '1.6'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px'
            }}>
              <span style={{ fontSize: '18px' }}>ℹ️</span>
              <strong style={{ color: '#333' }}>Información importante:</strong>
            </div>
            <ul style={{ margin: 0, paddingLeft: '30px' }}>
              <li>🕐 Reserva válida por 15 minutos desde la hora seleccionada</li>
              <li>📋 Ambiente tranquilo. Zero control: Sin ruido</li>
              <li>⏰ Ambiente tamaño: 8 personas</li>
              <li>💳 Costo de reserva: S/ 0.00</li>
            </ul>
          </div>
        </div>

        {/* Panel lateral - Resumen y Form */}
        <div>
          {/* Resumen de reserva */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            marginBottom: '20px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '20px'
            }}>Resumen de reserva</h3>

            {/* Mesa seleccionada */}
            {selectedMesa && (
              <div style={{
                background: '#FFF5EE',
                padding: '15px',
                borderRadius: '10px',
                marginBottom: '20px',
                border: '1px solid #FFE8CC'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#E89A5F',
                  marginBottom: '8px'
                }}>
                  ✓ Mesa {selectedMesa.numero} seleccionada
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Capacidad: {selectedMesa.capacidad} personas<br />
                  Ambiente: {selectedMesa.ambiente === 'interior' ? '🏠 Interior' : '🌳 Terraza'}
                </div>
              </div>
            )}

            {/* Formulario */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#333',
                marginBottom: '6px'
              }}>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#333',
                marginBottom: '6px'
              }}>Apellido</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Ingresa tu apellido"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#333',
                marginBottom: '6px'
              }}>Número de personas</label>
              <input
                type="number"
                name="personas"
                value={formData.personas}
                onChange={handleChange}
                min="1"
                max="8"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Detalles adicionales */}
            <div style={{
              paddingTop: '15px',
              borderTop: '1px solid #e5e5e5',
              fontSize: '13px',
              color: '#666',
              marginBottom: '20px'
            }}>
              <div style={{ marginBottom: '8px' }}>
                📅 <strong>Fecha:</strong> {reservaData?.selectedDate} de Octubre 2025
              </div>
              <div style={{ marginBottom: '8px' }}>
                🕐 <strong>Hora:</strong> {reservaData?.selectedTime}
              </div>
              <div>
                💰 <strong>Costo:</strong> S/ 0.00
              </div>
            </div>

            {/* Botones */}
            <button
              onClick={handleContinue}
              style={{
                width: '100%',
                padding: '14px',
                background: '#E89A5F',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '10px',
                transition: 'all 0.3s'
              }}
            >
              Continuar al pago →
            </button>

            <button
              onClick={onBack}
              style={{
                width: '100%',
                padding: '14px',
                background: 'transparent',
                color: '#666',
                border: '1px solid #e5e5e5',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              ← Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeleccionMesa;
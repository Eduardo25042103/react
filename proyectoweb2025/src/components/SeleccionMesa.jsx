import React, { useState } from 'react';

const SeleccionMesa = ({reservaData, onBack, onConfirm }) => {
  const [selectedMesa, setSelectedMesa] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    personas: reservaData?.numPersonas || 4
  });

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

  // SVG Icons
  const PersonasIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );

  const HomeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );

  const TreeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L3 14h4v6h10v-6h4L12 2z"/>
      <line x1="12" y1="20" x2="12" y2="24"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );

  const InfoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );

  const CalendarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );

  const MoneyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  );

  const getMesaIcon = (mesa) => {
    const color = mesa.disponible ? '#8B6F47' : '#999';
    const plateColor = mesa.disponible ? '#E8D5C4' : '#ccc';
    
    return (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="25" width="50" height="30" rx="4" fill={color} stroke={color} strokeWidth="1.5"/>
        <line x1="15" y1="30" x2="55" y2="30" stroke={plateColor} strokeWidth="0.5" opacity="0.3"/>
        <line x1="15" y1="35" x2="55" y2="35" stroke={plateColor} strokeWidth="0.5" opacity="0.3"/>
        <line x1="15" y1="45" x2="55" y2="45" stroke={plateColor} strokeWidth="0.5" opacity="0.3"/>
        <line x1="15" y1="50" x2="55" y2="50" stroke={plateColor} strokeWidth="0.5" opacity="0.3"/>
        <rect x="15" y="55" width="5" height="10" rx="1" fill={color}/>
        <rect x="50" y="55" width="5" height="10" rx="1" fill={color}/>
        <circle cx="35" cy="40" r="6" fill="white" opacity="0.8" stroke={plateColor} strokeWidth="1"/>
        <circle cx="35" cy="40" r="4" fill="none" stroke={plateColor} strokeWidth="0.5"/>
      </svg>
    );
  };

  return (
    <div style={{
      background: '#F5F0E8',
      minHeight: 'calc(100vh - 70px)',
      padding: '40px 20px'
    }}>
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

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: '30px'
      }}>
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
                  <div style={{ 
                    marginBottom: '10px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
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
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}>
                    <PersonasIcon /> {mesa.capacidad} personas
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#666',
                    fontWeight: '500',
                    padding: '4px 8px',
                    background: 'rgba(255,255,255,0.5)',
                    borderRadius: '4px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginBottom: '6px'
                  }}>
                    {mesa.ambiente === 'interior' ? (
                      <>
                        <HomeIcon /> Interior
                      </>
                    ) : (
                      <>
                        <TreeIcon /> Terraza
                      </>
                    )}
                  </div>
                  {!mesa.disponible && (
                    <div style={{
                      fontSize: '11px',
                      color: '#e74c3c',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px'
                    }}>
                      <CloseIcon /> Ocupada
                    </div>
                  )}
                  {mesa.disponible && selectedMesa?.id === mesa.id && (
                    <div style={{
                      fontSize: '11px',
                      color: '#E89A5F',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px'
                    }}>
                      <CheckIcon /> Seleccionada
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

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
              <InfoIcon />
              <strong style={{ color: '#333' }}>Información importante:</strong>
            </div>
            <ul style={{ margin: 0, paddingLeft: '30px' }}>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ClockIcon /> Reserva válida por 15 minutos desde la hora seleccionada
              </li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <PersonasIcon /> Capacidad máxima: 8 personas por mesa
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MoneyIcon /> Costo de reserva: S/ 50.00
              </li>
            </ul>
          </div>
        </div>

        <div>
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
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <CheckIcon /> Mesa {selectedMesa.numero} seleccionada
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Capacidad: {selectedMesa.capacidad} personas<br />
                  Ambiente: {selectedMesa.ambiente === 'interior' ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <HomeIcon /> Interior
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <TreeIcon /> Terraza
                    </span>
                  )}
                </div>
              </div>
            )}

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

            <div style={{
              paddingTop: '15px',
              borderTop: '1px solid #e5e5e5',
              fontSize: '13px',
              color: '#666',
              marginBottom: '20px'
            }}>
              <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CalendarIcon /> <strong>Fecha:</strong> {reservaData?.selectedDate} de Octubre 2025
              </div>
              <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ClockIcon /> <strong>Hora:</strong> {reservaData?.selectedTime}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MoneyIcon /> <strong>Costo:</strong> S/ 50.00
              </div>
            </div>

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
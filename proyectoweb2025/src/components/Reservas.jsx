import React, { useState } from 'react';

const Reservas = ({ styles }) => {
  const [selectedDate, setSelectedDate] = useState(10);
  const [selectedTime, setSelectedTime] = useState('7:30 PM');
  const [numPersonas, setNumPersonas] = useState(4);

  const timeSlots = [
    ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM'],
    ['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'],
    ['8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM']
  ];

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDay = 3; // Octubre 2025 empieza en miércoles

  return (
    <div style={{
      background: '#F5F0E8',
      minHeight: 'calc(100vh - 70px)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '10px'
          }}>Reserva tu mesa</h1>
          <p style={{
            fontSize: '15px',
            color: '#666'
          }}>Selecciona la fecha, hora y número de personas para tu reserva</p>
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '30px',
          alignItems: 'start'
        }}>
          {/* Left Column - Calendar and Time */}
          <div>
            {/* Calendar */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '16px',
              marginBottom: '25px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '25px'
              }}>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#333'
                }}>Octubre 2025</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{
                    width: '32px',
                    height: '32px',
                    border: '1px solid #ddd',
                    background: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: '#666'
                  }}>‹</button>
                  <button style={{
                    width: '32px',
                    height: '32px',
                    border: '1px solid #ddd',
                    background: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: '#666'
                  }}>›</button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '8px'
              }}>
                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, idx) => (
                  <div key={idx} style={{
                    textAlign: 'center',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#999',
                    padding: '10px 0'
                  }}>{day}</div>
                ))}
                
                {/* Empty cells for days before month starts */}
                {Array.from({ length: startDay }).map((_, idx) => (
                  <div key={`empty-${idx}`}></div>
                ))}
                
                {/* Days */}
                {daysInMonth.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    style={{
                      aspectRatio: '1',
                      border: 'none',
                      background: selectedDate === day ? '#E89A5F' : 'transparent',
                      color: selectedDate === day ? 'white' : '#333',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: selectedDate === day ? '600' : '400',
                      transition: 'all 0.2s'
                    }}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '20px'
              }}>Selecciona un horario</h3>

              {timeSlots.map((row, rowIdx) => (
                <div key={rowIdx} style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  {row.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      style={{
                        padding: '12px',
                        border: selectedTime === time ? '2px solid #E89A5F' : '1px solid #e5e5e5',
                        background: selectedTime === time ? '#FFF5EE' : 'white',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: selectedTime === time ? '600' : '400',
                        color: selectedTime === time ? '#E89A5F' : '#333',
                        transition: 'all 0.2s'
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Reservation Summary */}
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '25px'
            }}>Resumen de Reserva</h3>

            {/* Fecha */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontSize: '12px',
                color: '#999',
                marginBottom: '6px'
              }}>Fecha</div>
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#333'
              }}>Viernes, {selectedDate} de Octubre 2025</div>
            </div>

            {/* Hora */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontSize: '12px',
                color: '#999',
                marginBottom: '6px'
              }}>Hora</div>
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#333'
              }}>{selectedTime}</div>
            </div>

            {/* Número de personas */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontSize: '12px',
                color: '#999',
                marginBottom: '10px'
              }}>Número de personas</div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '15px'
              }}>
                <button
                  onClick={() => setNumPersonas(Math.max(1, numPersonas - 1))}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: 'none',
                    background: '#E89A5F',
                    color: 'white',
                    fontSize: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  -
                </button>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#333'
                }}>{numPersonas}</div>
                <button
                  onClick={() => setNumPersonas(numPersonas + 1)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: 'none',
                    background: '#E89A5F',
                    color: 'white',
                    fontSize: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Mesa */}
            <div style={{ marginBottom: '25px' }}>
              <div style={{
                fontSize: '12px',
                color: '#999',
                marginBottom: '6px'
              }}>Mesa</div>
              <div style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333'
              }}>Mesa para {numPersonas} personas</div>
            </div>

            {/* Costo */}
            <div style={{
              marginBottom: '25px',
              paddingTop: '20px',
              borderTop: '1px solid #e5e5e5'
            }}>
              <div style={{
                fontSize: '12px',
                color: '#999',
                marginBottom: '6px'
              }}>Costo de reserva</div>
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#E89A5F'
              }}>S/ 0.00</div>
            </div>

            {/* Button */}
            <button style={{
              width: '100%',
              padding: '16px',
              background: '#E89A5F',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservas;
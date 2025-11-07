import React, { useState } from 'react';
import yape from '../assets/yape.png';
import plin from '../assets/plin.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import efectivo from '../assets/efectivo.png';

const ConfirmarPago = ({reservaData, onBack, onConfirm }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [cardData, setCardData] = useState({
    numero: '',
    vencimiento: '',
    cvv: '',
    titular: ''
  });

  const paymentMethods = [
    { 
      id: 'yape', 
      name: 'Yape', 
      image: yape,
    },
    { 
      id: 'plin', 
      name: 'Plin', 
      image: plin,
    },
    { 
      id: 'visa', 
      name: 'Visa', 
      image: visa,
    },
    { 
      id: 'mastercard', 
      name: 'Mastercard', 
      image: mastercard
    },
    { 
      id: 'efectivo', 
      name: 'Pago en efectivo', 
      image: efectivo
    }
  ];

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'numero') {
      const cleaned = value.replace(/\s/g, '');
      if (cleaned.length <= 16) {
        const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
        setCardData({ ...cardData, [name]: formatted });
      }
    } else if (name === 'vencimiento') {
      const cleaned = value.replace(/\//g, '');
      if (cleaned.length <= 4) {
        const formatted = cleaned.length >= 2 
          ? cleaned.slice(0, 2) + '/' + cleaned.slice(2) 
          : cleaned;
        setCardData({ ...cardData, [name]: formatted });
      }
    } else if (name === 'cvv') {
      if (value.length <= 3) {
        setCardData({ ...cardData, [name]: value });
      }
    } else {
      setCardData({ ...cardData, [name]: value });
    }
  };

  const handleConfirm = () => {
    if (!selectedPayment) {
      alert('Por favor selecciona un método de pago');
      return;
    }

    if (selectedPayment !== 'efectivo' && (!cardData.numero || !cardData.vencimiento || !cardData.cvv || !cardData.titular)) {
      alert('Por favor completa todos los datos de la tarjeta');
      return;
    }

    onConfirm?.({
      ...reservaData,
      paymentMethod: selectedPayment,
      cardData: selectedPayment !== 'efectivo' ? cardData : null
    });
  };

  const needsCardData = selectedPayment && selectedPayment !== 'efectivo' && selectedPayment !== 'yape' && selectedPayment !== 'plin';

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
        <div style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '10px'
          }}>Confirma tu reserva</h1>
          <p style={{
            fontSize: '14px',
            color: '#666'
          }}>Estas a un paso de asegurar tu mesa en El Pino</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 450px',
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
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333',
                  margin: 0
                }}>Metodos de pago</h3>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '20px'
              }}>
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      background: selectedPayment === method.id ? '#FFF5EE' : 'white',
                      border: selectedPayment === method.id ? '2px solid #E89A5F' : '1px solid #e5e5e5',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      fontSize: '14px',
                      fontWeight: selectedPayment === method.id ? '600' : '400',
                      color: '#333'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '40px',
                      background: 'white',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={method.image} 
                        alt={method.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    {method.name}
                  </button>
                ))}
              </div>
            </div>

            {needsCardData && (
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
                }}>Datos de tarjeta</h3>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: '8px'
                  }}>Numero de tarjeta</label>
                  <input
                    type="text"
                    name="numero"
                    value={cardData.numero}
                    onChange={handleCardChange}
                    placeholder="1234 5678 9123 4567"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#333',
                      marginBottom: '8px'
                    }}>Fecha de vencimiento</label>
                    <input
                      type="text"
                      name="vencimiento"
                      value={cardData.vencimiento}
                      onChange={handleCardChange}
                      placeholder="MM/AA"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#333',
                      marginBottom: '8px'
                    }}>CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={cardData.cvv}
                      onChange={handleCardChange}
                      placeholder="123"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: '8px'
                  }}>Nombre del titular</label>
                  <input
                    type="text"
                    name="titular"
                    value={cardData.titular}
                    onChange={handleCardChange}
                    placeholder="Nombre"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          <div>
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
              }}>Resumen de reserva</h3>

              <div style={{
                background: '#F9F9F9',
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #e5e5e5'
                }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>Nombre</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                    {reservaData?.nombre} {reservaData?.apellido}
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #e5e5e5'
                }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>Fecha</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                    {reservaData?.selectedDate} Octubre 2025
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #e5e5e5'
                }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>Hora</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                    {reservaData?.selectedTime}
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #e5e5e5'
                }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>Mesa</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                    Mesa {reservaData?.mesa?.numero}
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #e5e5e5'
                }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>Personas</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                    {reservaData?.personas} personas
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>Ambiente</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                    {reservaData?.mesa?.ambiente === 'interior' ? 'Interior' : 'Terraza'}
                  </span>
                </div>
              </div>

              <div style={{
                background: '#FFF5EE',
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '25px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '13px',
                  color: '#666',
                  marginBottom: '8px'
                }}>Total a pagar</div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#E89A5F'
                }}>S/50.00</div>
              </div>

              <button
                onClick={handleConfirm}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: '#E89A5F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  transition: 'all 0.3s'
                }}
              >
                Confirmar y pagar S/50.00
              </button>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                fontSize: '11px',
                color: '#999',
                marginBottom: '12px'
              }}>
                <span>Tus datos estan protegidos</span>
              </div>

              <div style={{
                fontSize: '11px',
                color: '#999',
                textAlign: 'center'
              }}>
                Transaccion segura y encriptada
              </div>

              <button
                onClick={onBack}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'transparent',
                  color: '#666',
                  border: '1px solid #e5e5e5',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  marginTop: '15px',
                  transition: 'all 0.3s'
                }}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmarPago;
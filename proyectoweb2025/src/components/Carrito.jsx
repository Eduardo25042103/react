import React from 'react';

const Carrito = ({ 
  carrito, 
  onClose, 
  actualizarCantidad, 
  eliminarDelCarrito,
  vaciarCarrito,
  calcularTotal 
}) => {
  
  const handleConfirmarPedido = () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    
    const detallesPedido = carrito.map(item => 
      `${item.name} x${item.cantidad} - ${item.price}`
    ).join('\n');
    
    alert(
      `¡Pedido confirmado!\n\n` +
      `Detalles:\n${detallesPedido}\n\n` +
      `Total: S/ ${calcularTotal().toFixed(2)}\n\n` +
      `Tu pedido será preparado y estará listo en tu mesa.`
    );
    
    vaciarCarrito();
    onClose();
  };

  return (
    <>
      {/* Overlay oscuro */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 999,
          animation: 'fadeIn 0.3s'
        }}
      />

      {/* Panel del carrito */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '450px',
        height: '100vh',
        background: 'white',
        zIndex: 1000,
        boxShadow: '-4px 0 20px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideInRight 0.3s'
      }}>
        {/* Header */}
        <div style={{
          padding: '25px 30px',
          borderBottom: '1px solid #e5e5e5',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#5A8277'
        }}>
          <div>
            <h2 style={{
              fontSize: '22px',
              fontWeight: '600',
              color: 'white',
              margin: 0
            }}>Tu Pedido</h2>
            <p style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.8)',
              margin: '4px 0 0 0'
            }}>{carrito.length} {carrito.length === 1 ? 'plato' : 'platos'}</p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              border: 'none',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              transition: 'all 0.2s'
            }}
          >
            ✕
          </button>
        </div>

        {/* Lista de items */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 30px'
        }}>
          {carrito.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#999'
            }}>
              <div style={{
                fontSize: '64px',
                marginBottom: '15px',
                opacity: 0.3
              }}>🍽️</div>
              <p style={{
                fontSize: '16px',
                fontWeight: '500',
                marginBottom: '8px',
                color: '#666'
              }}>Tu carrito está vacío</p>
              <p style={{
                fontSize: '13px',
                color: '#999'
              }}>Agrega algunos platos deliciosos</p>
            </div>
          ) : (
            <>
              {carrito.map((item) => (
                <div key={item.id} style={{
                  background: '#F9F9F9',
                  padding: '18px',
                  borderRadius: '12px',
                  marginBottom: '12px',
                  border: '1px solid #f0f0f0'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    marginBottom: '12px'
                  }}>
                    {/* Imagen del plato */}
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      background: 'white'
                    }}>
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      ) : (
                        <div style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '32px'
                        }}>🍽️</div>
                      )}
                    </div>

                    {/* Info del plato */}
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#333',
                        margin: '0 0 6px 0'
                      }}>{item.name}</h4>
                      <p style={{
                        fontSize: '12px',
                        color: '#666',
                        margin: '0 0 8px 0'
                      }}>{item.description}</p>
                      <div style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#E89A5F'
                      }}>{item.price}</div>
                    </div>

                    {/* Botón eliminar */}
                    <button
                      onClick={() => eliminarDelCarrito(item.id)}
                      style={{
                        width: '32px',
                        height: '32px',
                        border: 'none',
                        background: '#FFE5E5',
                        color: '#f44336',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      🗑️
                    </button>
                  </div>

                  {/* Controles de cantidad */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid #e5e5e5'
                  }}>
                    <span style={{
                      fontSize: '13px',
                      color: '#666',
                      fontWeight: '500'
                    }}>Cantidad:</span>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: 'white',
                      padding: '6px 10px',
                      borderRadius: '8px',
                      border: '1px solid #e5e5e5'
                    }}>
                      <button
                        onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                        style={{
                          width: '28px',
                          height: '28px',
                          border: 'none',
                          background: '#F5F5F5',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#666',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        −
                      </button>
                      
                      <span style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#333',
                        minWidth: '25px',
                        textAlign: 'center'
                      }}>{item.cantidad}</span>
                      
                      <button
                        onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                        style={{
                          width: '28px',
                          height: '28px',
                          border: 'none',
                          background: '#E89A5F',
                          color: 'white',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '16px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Botón para vaciar carrito */}
              {carrito.length > 0 && (
                <button
                  onClick={vaciarCarrito}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'transparent',
                    border: '1px dashed #ddd',
                    borderRadius: '8px',
                    color: '#999',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    marginTop: '10px',
                    transition: 'all 0.2s'
                  }}
                >
                  🗑️ Vaciar carrito
                </button>
              )}
            </>
          )}
        </div>

        {/* Footer con total y botón */}
        {carrito.length > 0 && (
          <div style={{
            padding: '25px 30px',
            borderTop: '2px solid #e5e5e5',
            background: '#F9F9F9'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <span style={{
                fontSize: '15px',
                color: '#666',
                fontWeight: '500'
              }}>Subtotal:</span>
              <span style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#E89A5F'
              }}>S/ {calcularTotal().toFixed(2)}</span>
            </div>

            <button
              onClick={handleConfirmarPedido}
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
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(232, 154, 95, 0.3)'
              }}
            >
              Confirmar Pedido
            </button>

            <p style={{
              fontSize: '11px',
              color: '#999',
              textAlign: 'center',
              margin: '12px 0 0 0',
              lineHeight: '1.4'
            }}>
              Tu pedido será preparado y servido en tu mesa
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { 
            transform: translateX(100%);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Carrito;
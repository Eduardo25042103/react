import React, { useState } from 'react';

const Menu = ({ styles }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas las categorías');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = {
    ceviches: [
      { name: 'Ceviche clásico', description: 'Pescado fresco, limón, cebolla', price: 'S/ 45.00', icon: '🐟' },
      { name: 'Ceviche Langostino y pescado', description: 'Mezcla de pescado y camarón', price: 'S/ 40.00', icon: '🦐' },
      { name: 'Ceviche Mixto', description: 'Pescado fresco, mixto, cebolla', price: 'S/ 47.00', icon: '🍤' },
      { name: 'Ceviche carrellero', description: 'Pescado fresco, limón, cebolla', price: 'S/ 44.00', icon: '🐟' }
    ],
    criollos: [
      { name: 'Ají de gallina', description: 'Pollo deshilachado, crema de ají amarillo', price: 'S/ 32.00', icon: '🍗' },
      { name: 'Arroz con mariscos', description: 'Arroz, mariscos mixtos de la casa', price: 'S/ 28.00', icon: '🦐' },
      { name: 'Causa limeña', description: 'Papa, palta amarillo, crema, tunto', price: 'S/ 24.00', icon: '🥔' },
      { name: 'Lomo saltado', description: 'Carne de res papas, tomate, cebolla', price: 'S/ 42.00', icon: '🥩' }
    ],
    postres: [
      { name: 'Suspiro Limeño', description: 'Dulce de leche, merengue italiano', price: 'S/ 17.50', icon: '🍮' },
      { name: 'Pudín de Jalea de Fresa', description: 'Fresa, leche, pan con jamón', price: 'S/ 14.50', icon: '🍓' },
      { name: 'Mazamorra Morada', description: 'Fruta morada, azúcar', price: 'S/ 15.50', icon: '🍇' },
      { name: 'Arroz Zambito', description: 'Arroz con leche, caramelo', price: 'S/ 17.50', icon: '🍚' },
      { name: 'Tarta de chocolate', description: 'Chocolate y ingredientes', price: 'S/ 16.50', icon: '🍫' },
      { name: 'Queso Helado', description: 'Crema leche, queso', price: 'S/ 18.50', icon: '🍨' }
    ]
  };

  const categories = ['Todas las categorías', 'Ceviches', 'Criollos', 'Postres'];

  const getFilteredItems = () => {
    let items = [];
    if (selectedCategory === 'Todas las categorías') {
      items = [...menuItems.ceviches, ...menuItems.criollos, ...menuItems.postres];
    } else if (selectedCategory === 'Ceviches') {
      items = menuItems.ceviches;
    } else if (selectedCategory === 'Criollos') {
      items = menuItems.criollos;
    } else if (selectedCategory === 'Postres') {
      items = menuItems.postres;
    }

    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return items;
  };

  const getCategorySection = (categoryName, items) => {
    return (
      <div key={categoryName} style={{ marginBottom: '40px' }}>
        <h3 style={{
          fontSize: '14px',
          fontWeight: '700',
          color: '#333',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '20px',
          borderBottom: '2px solid #5A8277',
          paddingBottom: '8px'
        }}>{categoryName}</h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {items.map((item, idx) => (
            <div key={idx} style={{
              background: 'white',
              border: '1px solid #e5e5e5',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-2px)'
              }
            }}>
              <div style={{
                width: '100%',
                height: '120px',
                background: 'linear-gradient(135deg, #FFE8CC, #FFD9A3)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '50px',
                marginBottom: '15px'
              }}>
                {item.icon}
              </div>
              
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>{item.name}</h4>
              
              <p style={{
                fontSize: '13px',
                color: '#666',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>{item.description}</p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#D4824B'
                }}>{item.price}</span>
                
                <button style={{
                  background: '#E89A5F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  width: '36px',
                  height: '36px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{
      background: '#F5F5F5',
      padding: '30px 20px',
      minHeight: 'calc(100vh - 70px)'
    }}>
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '12px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          marginBottom: '25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#333',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>NUESTRO MENÚ</h2>
          
          <div style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center'
          }}>
            <input
              type="text"
              placeholder="🔍 Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '10px 16px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                width: '200px',
                outline: 'none'
              }}
            />
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '10px 16px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                cursor: 'pointer',
                background: 'white'
              }}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {selectedCategory === 'Todas las categorías' ? (
          <>
            {getCategorySection('CEVICHES', menuItems.ceviches)}
            {getCategorySection('CRIOLLOS', menuItems.criollos)}
            {getCategorySection('POSTRES', menuItems.postres)}
          </>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {getFilteredItems().map((item, idx) => (
              <div key={idx} style={{
                background: 'white',
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                <div style={{
                  width: '100%',
                  height: '120px',
                  background: 'linear-gradient(135deg, #FFE8CC, #FFD9A3)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '50px',
                  marginBottom: '15px'
                }}>
                  {item.icon}
                </div>
                
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '8px'
                }}>{item.name}</h4>
                
                <p style={{
                  fontSize: '13px',
                  color: '#666',
                  marginBottom: '12px',
                  lineHeight: '1.5'
                }}>{item.description}</p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#D4824B'
                  }}>{item.price}</span>
                  
                  <button style={{
                    background: '#E89A5F',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    width: '36px',
                    height: '36px',
                    fontSize: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>+</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
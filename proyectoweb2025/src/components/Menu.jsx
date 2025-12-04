import React, { useState, useEffect } from 'react';
import ceviche_clasico from '../assets/CEVICHE.png';
import ceviche_langostino from '../assets/cevichee.jpg';
import ceviche_mixto from '../assets/cevichemixto.png';
import ceviche_carretillero from '../assets/carretillero.jpg';
import aji_gallina from '../assets/gallinaaji.png';
import arroz_mariscos from '../assets/mariscos.png';
import causa_limena from '../assets/causa.png';
import lomo_saltado from '../assets/lomosaltado.webp';
import suspiro_limeno from '../assets/suspiro.webp';
import pudin_fresa from '../assets/fresap.jpg';
import mazamorra_morada from '../assets/mazamorra.jpg';
import arroz_zambito from '../assets/arrozzambito.jpg';
import torta_chocolate from '../assets/chocolatetorta.jpg';
import queso_helado from '../assets/quesohelado.jpg';

const Menu = ({ agregarAlCarrito }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas las categorías');
  const [searchTerm, setSearchTerm] = useState('');
  const [itemAgregado, setItemAgregado] = useState(null);

  // Leer la categoría seleccionada desde localStorage al cargar
  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
      setSelectedCategory(savedCategory);
      // Limpiar el localStorage después de leer
      localStorage.removeItem('selectedCategory');
    }
  }, []);

  const menuItems = {
    ceviches: [
      { 
        id: 'cev-1',
        name: 'Ceviche clásico', 
        description: 'Pescado fresco, limón, cebolla', 
        price: 'S/ 45.00', 
        image: ceviche_clasico,
      },
      { 
        id: 'cev-2',
        name: 'Ceviche de langostino y pescado', 
        description: 'Mezcla de pescado y camarón', 
        price: 'S/ 40.00', 
        image: ceviche_langostino,
      },
      { 
        id: 'cev-3',
        name: 'Ceviche mixto', 
        description: 'Pescado fresco, mixto, cebolla', 
        price: 'S/ 47.00', 
        image: ceviche_mixto,
      },
      { 
        id: 'cev-4',
        name: 'Ceviche carretillero', 
        description: 'Pescado fresco, limón, cebolla', 
        price: 'S/ 44.00', 
        image: ceviche_carretillero,
      }
    ],
    criollos: [
      { 
        id: 'cri-1',
        name: 'Ají de gallina', 
        description: 'Pollo deshilachado, crema de ají amarillo', 
        price: 'S/ 32.00', 
        image: aji_gallina
      },
      { 
        id: 'cri-2',
        name: 'Arroz con mariscos', 
        description: 'Arroz, mariscos mixtos de la casa', 
        price: 'S/ 28.00', 
        image: arroz_mariscos,
      },
      { 
        id: 'cri-3',
        name: 'Causa limeña', 
        description: 'Papa, palta amarillo, crema, tunto', 
        price: 'S/ 24.00', 
        image: causa_limena,
      },
      { 
        id: 'cri-4',
        name: 'Lomo saltado', 
        description: 'Carne de res papas, tomate, cebolla', 
        price: 'S/ 42.00', 
        image: lomo_saltado,
      }
    ],
    postres: [
      { 
        id: 'pos-1',
        name: 'Suspiro Limeño', 
        description: 'Dulce de leche, merengue italiano', 
        price: 'S/ 17.50', 
        image: suspiro_limeno,
      },
      { 
        id: 'pos-2',
        name: 'Pudín de Jalea de Fresa', 
        description: 'Fresa, leche, pan con jamón', 
        price: 'S/ 14.50', 
        image: pudin_fresa,
      },
      { 
        id: 'pos-3',
        name: 'Mazamorra Morada', 
        description: 'Fruta morada, azúcar', 
        price: 'S/ 15.50', 
        image: mazamorra_morada,
      },
      { 
        id: 'pos-4',
        name: 'Arroz Zambito', 
        description: 'Arroz con leche, caramelo', 
        price: 'S/ 17.50', 
        image: arroz_zambito,
      },
      { 
        id: 'pos-5',
        name: 'Torta de chocolate', 
        description: 'Chocolate y ingredientes', 
        price: 'S/ 16.50', 
        image: torta_chocolate,
      },
      { 
        id: 'pos-6',
        name: 'Queso Helado', 
        description: 'Crema leche, queso', 
        price: 'S/ 18.50', 
        image: queso_helado,
      }
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

  const handleAgregarAlCarrito = (item) => {
    agregarAlCarrito(item);
    setItemAgregado(item.id);
    
    setTimeout(() => {
      setItemAgregado(null);
    }, 2000);
  };

  const renderMenuItem = (item, idx) => (
    <div 
      key={idx} 
      className="menu-item-card"
      style={{
        background: 'white',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative'
      }}
    >
      {itemAgregado === item.id && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: '#4CAF50',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '600',
          zIndex: 10,
          boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)',
          animation: 'slideInDown 0.3s'
        }}>
          ✓ Agregado
        </div>
      )}

      <div style={{
        width: '100%',
        height: '180px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img 
          src={item.image} 
          alt={item.name}
          className="menu-item-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
      
      <div style={{ padding: '20px' }}>
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
          
          <button 
            onClick={() => handleAgregarAlCarrito(item)}
            className="menu-btn-add"
            style={{
              background: itemAgregado === item.id ? '#4CAF50' : '#E89A5F',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              fontSize: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              transform: itemAgregado === item.id ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            {itemAgregado === item.id ? '✓' : '+'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .menu-item-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12);
          border-color: #E89A5F;
        }

        .menu-item-card:hover .menu-item-image {
          transform: scale(1.05);
        }

        .menu-item-card:hover .menu-btn-add {
          transform: scale(1.2) rotate(90deg);
          box-shadow: 0 4px 12px rgba(232, 154, 95, 0.4);
        }

        .menu-item-card .menu-btn-add {
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );

  const getCategorySection = (categoryName, items) => (
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
        {items.map(renderMenuItem)}
      </div>
    </div>
  );

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
              placeholder="🔍 Buscar plato..."
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
            {getFilteredItems().map(renderMenuItem)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
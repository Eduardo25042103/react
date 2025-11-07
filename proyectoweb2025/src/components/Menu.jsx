import React, { useState } from 'react';
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

const Menu = ({ styles }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas las categorías');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = {
    ceviches: [
      { 
        name: 'Ceviche clásico', 
        description: 'Pescado fresco, limón, cebolla', 
        price: 'S/ 45.00', 
        image: ceviche_clasico,
      },
      { 
        name: 'Ceviche de langostino y pescado', 
        description: 'Mezcla de pescado y camarón', 
        price: 'S/ 40.00', 
        image: ceviche_langostino,
      },
      { 
        name: 'Ceviche mixto', 
        description: 'Pescado fresco, mixto, cebolla', 
        price: 'S/ 47.00', 
        image: ceviche_mixto,
      },
      { 
        name: 'Ceviche carretillero', 
        description: 'Pescado fresco, limón, cebolla', 
        price: 'S/ 44.00', 
        image: ceviche_carretillero,
      }
    ],
    criollos: [
      { 
        name: 'Ají de gallina', 
        description: 'Pollo deshilachado, crema de ají amarillo', 
        price: 'S/ 32.00', 
        image: aji_gallina
      },
      { 
        name: 'Arroz con mariscos', 
        description: 'Arroz, mariscos mixtos de la casa', 
        price: 'S/ 28.00', 
        image: arroz_mariscos,
      },
      { 
        name: 'Causa limeña', 
        description: 'Papa, palta amarillo, crema, tunto', 
        price: 'S/ 24.00', 
        image: causa_limena,
      },
      { 
        name: 'Lomo saltado', 
        description: 'Carne de res papas, tomate, cebolla', 
        price: 'S/ 42.00', 
        image: lomo_saltado,
      }
    ],
    postres: [
      { 
        name: 'Suspiro Limeño', 
        description: 'Dulce de leche, merengue italiano', 
        price: 'S/ 17.50', 
        image: suspiro_limeno,
      },
      { 
        name: 'Pudín de Jalea de Fresa', 
        description: 'Fresa, leche, pan con jamón', 
        price: 'S/ 14.50', 
        image: pudin_fresa,
      },
      { 
        name: 'Mazamorra Morada', 
        description: 'Fruta morada, azúcar', 
        price: 'S/ 15.50', 
        image: mazamorra_morada,
      },
      { 
        name: 'Arroz Zambito', 
        description: 'Arroz con leche, caramelo', 
        price: 'S/ 17.50', 
        image: arroz_zambito,
      },
      { 
        name: 'Torta de chocolate', 
        description: 'Chocolate y ingredientes', 
        price: 'S/ 16.50', 
        image: torta_chocolate,
      },
      { 
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

  const renderMenuItem = (item, idx) => (
    <div key={idx} style={{
      background: 'white',
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s'
    }}>
      <div style={{
        width: '100%',
        height: '180px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img 
          src={item.image} 
          alt={item.name}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          display: 'none',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #FFE8CC, #FFD9A3)',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '60px'
        }}>
          {item.icon}
        </div>
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
              placeholder="Buscar"
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
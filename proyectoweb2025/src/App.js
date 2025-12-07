import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Menu from './components/Menu';
import Nosotros from './components/Nosotros';
import Reservas from './components/Reservas';
import SeleccionMesa from './components/SeleccionMesa';
import ConfirmarPago from './components/ConfirmarPago';
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Carrito from './components/Carrito';
import { useAuth } from './hooks/useAuth';
import { styles } from './styles/styles';

function App() {
  const { isLoggedIn, isAdmin, login, loginAsAdmin, logout } = useAuth();
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDay, setSelectedDay] = useState(10);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [reservaData, setReservaData] = useState(null);
  
  // Estado del usuario
  const [userName, setUserName] = useState('');
  const [isGuest, setIsGuest] = useState(true);
  
  // Estado del carrito
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const handleEnterFromWelcome = () => {
    setShowWelcome(false);
    setIsGuest(true);
    setUserName('');
    login();
    setCurrentPage('home');
  };

  const handleGuestLogin = () => {
    setIsGuest(true);
    setUserName('');
    login();
  };

  const handleUserLogin = (name) => {
    setIsGuest(false);
    setUserName(name);
    login();
  };

  // Funciones del carrito
  const agregarAlCarrito = (item) => {
    const itemExistente = carrito.find(i => i.id === item.id);
    
    if (itemExistente) {
      setCarrito(carrito.map(i => 
        i.id === item.id 
          ? { ...i, cantidad: i.cantidad + 1 }
          : i
      ));
    } else {
      setCarrito([...carrito, { ...item, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (itemId) => {
    setCarrito(carrito.filter(item => item.id !== itemId));
  };

  const actualizarCantidad = (itemId, cantidad) => {
    if (cantidad <= 0) {
      eliminarDelCarrito(itemId);
    } else {
      setCarrito(carrito.map(item =>
        item.id === itemId ? { ...item, cantidad } : item
      ));
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => {
      const precio = parseFloat(item.price.replace('S/ ', ''));
      return total + (precio * item.cantidad);
    }, 0);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <Home
            onLogout={logout}
            styles={styles}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
            setCurrentPage={setCurrentPage}
            carrito={carrito}
            setMostrarCarrito={setMostrarCarrito}
            agregarAlCarrito={agregarAlCarrito}
            userName={userName}
            isGuest={isGuest}
          />
        );
      case 'menu':
        return (
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar 
              onLogout={logout} 
              styles={styles} 
              setCurrentPage={setCurrentPage}
              carrito={carrito}
              setMostrarCarrito={setMostrarCarrito}
              userName={userName}
              isGuest={isGuest}
            />
            <Menu 
              styles={styles}
              agregarAlCarrito={agregarAlCarrito}
            />
            <Footer styles={styles} />
          </div>
        );
      case 'nosotros':
        return (
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar 
              onLogout={logout} 
              styles={styles} 
              setCurrentPage={setCurrentPage}
              carrito={carrito}
              setMostrarCarrito={setMostrarCarrito}
              userName={userName}
              isGuest={isGuest}
            />
            <Nosotros styles={styles} />
            <Footer styles={styles} />
          </div>
        );
case 'reservas':
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        onLogout={logout} 
        styles={styles} 
        setCurrentPage={setCurrentPage}
        carrito={carrito}
        setMostrarCarrito={setMostrarCarrito}
        userName={userName}
        isGuest={isGuest}
      />
      <Reservas 
        styles={styles} 
        setCurrentPage={setCurrentPage}
        selectedDay={selectedDay}
        selectedPayment={selectedPayment}
        carrito={carrito}
        onContinue={(data) => {
          setReservaData({
            ...data,
            selectedPayment,
            carrito
          });
          setCurrentPage('seleccion-mesa');
        }}
      />
      <Footer styles={styles} />
    </div>
  );

case 'seleccion-mesa':
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        onLogout={logout} 
        styles={styles} 
        setCurrentPage={setCurrentPage}
        carrito={carrito}
        setMostrarCarrito={setMostrarCarrito}
        userName={userName}
        isGuest={isGuest}
      />
      <SeleccionMesa 
        styles={styles}
        reservaData={reservaData}
        onBack={() => setCurrentPage('reservas')}
        onConfirm={(data) => {
          setReservaData({
            ...data,
            selectedPayment,
            carrito
          });
          setCurrentPage('confirmar-pago');
        }}
      />
      <Footer styles={styles} />
    </div>
  );

case 'confirmar-pago':
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        onLogout={logout} 
        styles={styles} 
        setCurrentPage={setCurrentPage}
        carrito={carrito}
        setMostrarCarrito={setMostrarCarrito}
        userName={userName}
        isGuest={isGuest}
      />
<ConfirmarPago 
        styles={styles}
        reservaData={reservaData}
        selectedPayment={selectedPayment}
        carrito={carrito}
        onBack={() => setCurrentPage('seleccion-mesa')}
        onConfirm={(data) => {
          setReservaData(data);
          
          // Construir mensaje de confirmación
          let mensaje = '¡Reserva confirmada exitosamente!\n\nDetalles:\n' + 
                `Mesa: ${data.mesa.numero}\n` +
                `Fecha: ${data.selectedDate} de Octubre\n` +
                `Hora: ${data.selectedTime}\n` +
                `Personas: ${data.personas}\n` +
                `Cliente: ${data.nombre} ${data.apellido}\n` +
                `Pago: ${data.paymentMethod}\n`;
          
          // Agregar detalles del menú si hay
          if (carrito && carrito.length > 0) {
            mensaje += '\nMenú seleccionado:\n';
            carrito.forEach(item => {
              mensaje += `- ${item.name} x${item.cantidad}\n`;
            });
            
            const totalMenu = carrito.reduce((total, item) => {
              const precio = parseFloat(item.price.replace('S/ ', ''));
              return total + (precio * item.cantidad);
            }, 0);
            
            mensaje += `\nTotal menú: S/ ${totalMenu.toFixed(2)}\n`;
            mensaje += `Total reserva: S/ 50.00\n`;
            mensaje += `Total a pagar: S/ ${(totalMenu + 50).toFixed(2)}`;
          } else {
            mensaje += `\nTotal: S/ 50.00`;
          }
          
          alert(mensaje);
          
          // Limpiar carrito después de confirmar
          vaciarCarrito();
          setCurrentPage('home');
        }}
      />
            <Footer styles={styles} />
          </div>
        );
      case 'contacto':
        return (
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar 
              onLogout={logout} 
              styles={styles} 
              setCurrentPage={setCurrentPage}
              carrito={carrito}
              setMostrarCarrito={setMostrarCarrito}
              userName={userName}
              isGuest={isGuest}
            />
            <Contacto styles={styles} />
            <Footer styles={styles} />
          </div>
        );
      default:
        return (
          <Home
            onLogout={logout}
            styles={styles}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
            setCurrentPage={setCurrentPage}
            carrito={carrito}
            setMostrarCarrito={setMostrarCarrito}
            agregarAlCarrito={agregarAlCarrito}
            userName={userName}
            isGuest={isGuest}
          />
        );
    }
  };

  if (showWelcome) {
    return <Welcome onEnter={handleEnterFromWelcome} styles={styles} />;
  }

  if (!isLoggedIn) {
    return (
      <Login 
        onLogin={(name) => handleUserLogin(name)} 
        onAdminLogin={loginAsAdmin}
        onGuestLogin={handleGuestLogin}
        styles={styles} 
      />
    );
  }

  if (isAdmin) {
    return (
      <Dashboard 
        styles={styles}
        onLogout={logout}
      />
    );
  }

  return (
    <div>
      {renderPage()}
      
      {/* Carrito flotante */}
      {mostrarCarrito && (
        <Carrito
          carrito={carrito}
          onClose={() => setMostrarCarrito(false)}
          actualizarCantidad={actualizarCantidad}
          eliminarDelCarrito={eliminarDelCarrito}
          vaciarCarrito={vaciarCarrito}
          calcularTotal={calcularTotal}
          selectedPayment={selectedPayment}
        />
      )}
    </div>
  );
}

export default App;
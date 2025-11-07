import React, { useState } from 'react';
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
import { useAuth } from './hooks/useAuth';
import { styles } from './styles/styles';

function App() {
  const { isLoggedIn, isAdmin, login, loginAsAdmin, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDay, setSelectedDay] = useState(10);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [reservaData, setReservaData] = useState(null);

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
          />
        );
      case 'menu':
        return (
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar onLogout={logout} styles={styles} setCurrentPage={setCurrentPage} />
            <Menu styles={styles} />
            <Footer styles={styles} />
          </div>
        );
      case 'nosotros':
        return (
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar onLogout={logout} styles={styles} setCurrentPage={setCurrentPage} />
            <Nosotros styles={styles} />
            <Footer styles={styles} />
          </div>
        );
      case 'reservas':
        return (
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar onLogout={logout} styles={styles} setCurrentPage={setCurrentPage} />
            <Reservas 
              styles={styles} 
              setCurrentPage={setCurrentPage}
              onContinue={(data) => {
                setReservaData(data);
                setCurrentPage('seleccion-mesa');
              }}
            />
            <Footer styles={styles} />
          </div>
        );
      case 'seleccion-mesa':
        return (
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar onLogout={logout} styles={styles} setCurrentPage={setCurrentPage} />
            <SeleccionMesa 
              styles={styles}
              reservaData={reservaData}
              onBack={() => setCurrentPage('reservas')}
              onConfirm={(data) => {
                setReservaData(data);
                setCurrentPage('confirmar-pago');
              }}
            />
            <Footer styles={styles} />
          </div>
        );
      case 'confirmar-pago':
        return (
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar onLogout={logout} styles={styles} setCurrentPage={setCurrentPage} />
            <ConfirmarPago 
              styles={styles}
              reservaData={reservaData}
              onBack={() => setCurrentPage('seleccion-mesa')}
              onConfirm={(data) => {
                setReservaData(data);
                alert('¡Reserva confirmada exitosamente!\n\nDetalles:\n' + 
                      `Mesa: ${data.mesa.numero}\n` +
                      `Fecha: ${data.selectedDate} de Octubre\n` +
                      `Hora: ${data.selectedTime}\n` +
                      `Personas: ${data.personas}\n` +
                      `Cliente: ${data.nombre} ${data.apellido}\n` +
                      `Pago: ${data.paymentMethod}`);
                setCurrentPage('home');
              }}
            />
            <Footer styles={styles} />
          </div>
        );
      case 'contacto':
        return (
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar onLogout={logout} styles={styles} setCurrentPage={setCurrentPage} />
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
          />
        );
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login 
          onLogin={login} 
          onAdminLogin={loginAsAdmin}
          styles={styles} 
        />
      ) : isAdmin ? (
        <Dashboard 
          styles={styles}
          onLogout={logout}
        />
      ) : (
        renderPage()
      )}
    </div>
  );
}

export default App;
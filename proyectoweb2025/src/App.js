import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Menu from './components/Menu';
import Nosotros from './components/Nosotros';
import Reservas from './components/Reservas';
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { useAuth } from './hooks/useAuth';
import { styles } from './styles/styles';

function App() {
  const { isLoggedIn, login, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDay, setSelectedDay] = useState(10);
  const [selectedPayment, setSelectedPayment] = useState(null);

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
         <Reservas styles={styles} />
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
          />
        );
        
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={login} styles={styles} />
      ) : (
        renderPage()
      )}
    </div>
  );
}

export default App;
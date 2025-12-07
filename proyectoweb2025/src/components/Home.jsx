import React from 'react';
import Navbar from './Navbar';
import HeroCard from './HeroCard';
import Categories from './Categories';
import PopularItems from './PopularItems';
import Calendar from './Calendar';
import PaymentMethods from './PaymentMethods';
import Footer from './Footer';

const Home = ({ 
  onLogout, 
  styles, 
  selectedDay, 
  setSelectedDay, 
  selectedPayment, 
  setSelectedPayment,
  setCurrentPage,
  carrito,
  setMostrarCarrito,
  agregarAlCarrito,
  userName,
  isGuest
}) => {
  const handleDateSelect = (day) => {
    setCurrentPage('reservas');
  };

  return (
    <div style={styles.homeScreen}>
      <Navbar 
        onLogout={onLogout} 
        styles={styles}
        setCurrentPage={setCurrentPage}
        carrito={carrito}
        setMostrarCarrito={setMostrarCarrito}
        userName={userName}
        isGuest={isGuest}
      />

      <div style={styles.mainContent}>
        <div>
          <HeroCard 
            styles={styles}
            agregarAlCarrito={agregarAlCarrito}
            setCurrentPage={setCurrentPage}
          />
          <Categories 
            styles={styles}
            setCurrentPage={setCurrentPage}
          />
          <PopularItems 
            styles={styles}
            agregarAlCarrito={agregarAlCarrito}
          />
        </div>

        <div style={styles.sidebar}>
          <Calendar 
            styles={styles} 
            selectedDay={selectedDay} 
            setSelectedDay={setSelectedDay}
            onDateSelect={handleDateSelect}
          />
          <PaymentMethods 
            styles={styles} 
            selectedPayment={selectedPayment} 
            setSelectedPayment={setSelectedPayment} 
          />
        </div>
      </div>

      <Footer styles={styles} />
    </div>
  );
};

export default Home;
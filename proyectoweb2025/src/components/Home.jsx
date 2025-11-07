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
  setCurrentPage  // <-- Agregar esta línea
}) => {
  return (
    <div style={styles.homeScreen}>
      <Navbar 
        onLogout={onLogout} 
        styles={styles}
        setCurrentPage={setCurrentPage}  // <-- Agregar esta línea
      />

      <div style={styles.mainContent}>
        <div>
          <HeroCard styles={styles} />
          <Categories styles={styles} />
          <PopularItems styles={styles} />
        </div>

        <div style={styles.sidebar}>
          <Calendar 
            styles={styles} 
            selectedDay={selectedDay} 
            setSelectedDay={setSelectedDay} 
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
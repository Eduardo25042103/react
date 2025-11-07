import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { useAuth } from './hooks/useAuth';
import { styles } from './styles/styles';

function App() {
  const { isLoggedIn, login, logout } = useAuth();
  const [selectedDay, setSelectedDay] = useState(10);
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={login} styles={styles} />
      ) : (
        <Home
          onLogout={logout}
          styles={styles}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
        />
      )}
    </div>
  );
}

export default App;
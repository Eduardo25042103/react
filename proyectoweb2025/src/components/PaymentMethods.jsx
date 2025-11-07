import React from 'react';
import yape from '../assets/yape.png';
import visa from '../assets/visa.png';
import plin from '../assets/plin.png';
import mastercard from '../assets/mastercard.png';
import efectivo from '../assets/efectivo.png';

const PaymentMethods = ({ styles, selectedPayment, setSelectedPayment }) => {
  const payments = [
    { 
      id: 'yape',
      name: 'Yape',
      image: yape,
    },
    { 
      id: 'visa',
      name: 'Visa',
      image: visa,
    },
    { 
      id: 'plin',
      name: 'Plin',
      image: plin,
    },
    { 
      id: 'mastercard',
      name: 'Mastercard',
      image: mastercard,
    },
    { 
      id: 'efectivo',
      name: 'Pago en efectivo',
      image: efectivo,
    }
  ];

  return (
    <div style={styles.paymentWidget}>
      <div style={styles.sectionTitle}>
        <span>💳</span>
        <span>Métodos de pago:</span>
      </div>
      <div style={styles.paymentMethods}>
        {payments.map((payment, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedPayment(idx)}
            style={{
              ...styles.paymentItem,
              ...(selectedPayment === idx ? styles.paymentItemSelected : {})
            }}
          >
            <div style={{
              width: '45px',
              height: '45px',
              background: 'white',
              borderRadius: '8px',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #f0f0f0',
              flexShrink: 0
            }}>
              <img 
                src={payment.image}
                alt={payment.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div style={styles.paymentName}>{payment.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
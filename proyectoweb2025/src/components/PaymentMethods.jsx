import React from 'react';
import yape from '../assets/yape.png';
import visa from '../assets/visa.png';
import plin from '../assets/plin.png';
import mastercard from '../assets/mastercard.png';
import efectivo from '../assets/efectivo.png';

const PaymentMethods = ({ styles, selectedPayment, setSelectedPayment }) => {
  const payments = [
    { 
      id: 0,
      name: 'Yape',
      image: yape,
    },
    { 
      id: 1,
      name: 'Visa',
      image: visa,
    },
    { 
      id: 2,
      name: 'Plin',
      image: plin,
    },
    { 
      id: 3,
      name: 'Mastercard',
      image: mastercard,
    },
    { 
      id: 4,
      name: 'Efectivo',
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
        {payments.map((payment) => (
          <div
            key={payment.id}
            onClick={() => {
              console.log('Método de pago seleccionado:', payment.id, payment.name);
              setSelectedPayment(payment.id);
            }}
            style={{
              ...styles.paymentItem,
              ...(selectedPayment === payment.id ? styles.paymentItemSelected : {})
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
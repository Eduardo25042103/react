import React from 'react';

const PaymentMethods = ({ styles, selectedPayment, setSelectedPayment }) => {
  const payments = [
    { icon: '💳', name: 'Yape' },
    { icon: '💳', name: 'Visa', hasLogo: true },
    { icon: '💳', name: 'Plin' },
    { icon: '💳', name: 'Mastercard', hasLogo: true },
    { icon: '💵', name: 'Pago en efectivo' }
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
            <div style={styles.paymentIconWrapper}>
              <span>{payment.icon}</span>
            </div>
            <div style={styles.paymentName}>{payment.name}</div>
            {payment.hasLogo && (
              <div style={styles.paymentLogos}>
                <div style={styles.paymentLogo}>💳</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
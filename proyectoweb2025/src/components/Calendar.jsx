import React from 'react';

const Calendar = ({ styles, selectedDay, setSelectedDay, onDateSelect }) => {
  const handleDayClick = (day) => {
    setSelectedDay(day);
    if (onDateSelect) {
      onDateSelect(day);
    }
  };

  return (
    <div style={styles.calendarWidget}>
      <div style={styles.calendarHeader}>
        <div style={styles.monthName}>Octubre 2025</div>
        <div style={styles.calendarNav}>
          <button style={styles.navArrow}>‹</button>
          <button style={styles.navArrow}>›</button>
        </div>
      </div>
      <div style={styles.calendarGrid}>
        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, idx) => (
          <div key={idx} style={styles.dayLabel}>{day}</div>
        ))}
        <div style={styles.dayCell}></div>
        <div style={styles.dayCell}></div>
        {[...Array(31)].map((_, idx) => {
          const dayNum = idx + 1;
          return (
            <div
              key={dayNum}
              onClick={() => handleDayClick(dayNum)}
              style={{
                ...styles.dayCell,
                ...(selectedDay === dayNum ? styles.dayCellSelected : {})
              }}
            >
              {dayNum}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
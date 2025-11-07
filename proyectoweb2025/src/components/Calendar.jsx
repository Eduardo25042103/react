import React from 'react';

const Calendar = ({ styles, selectedDay, setSelectedDay }) => {
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
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
          <div key={idx} style={styles.dayLabel}>{day}</div>
        ))}
        <div style={styles.dayCell}></div>
        <div style={styles.dayCell}></div>
        {[...Array(31)].map((_, idx) => {
          const dayNum = idx + 1;
          return (
            <div
              key={dayNum}
              onClick={() => setSelectedDay(dayNum)}
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
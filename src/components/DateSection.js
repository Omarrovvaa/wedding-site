import React from 'react';
import './DateSection.css';

const DateSection = () => {
  return (
    <section className="date-section">
      <p>Дата мероприятия: 19 июня 2024</p>
      <div className="calendar">
        <p>Июнь 2024</p>
        <div className="calendar-days">
          {Array.from({ length: 30 }, (_, i) => (
            <div className={`day ${i === 18 ? 'selected' : ''}`} key={i}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <p>Время: 16:00</p>
    </section>
  );
};

export default DateSection;

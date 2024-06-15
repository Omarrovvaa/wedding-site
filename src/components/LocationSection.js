import React from 'react';
import './LocationSection.css';
import gisIcon from './2.png'; // Импортируем иконку 2ГИС

const LocationSection = () => {
  return (
    <section className="location-section">
      <p>Место: Ресторан “Достук”, г. Токмок, ул. Дунларова 137а</p>
      <a href="https://2gis.kg/bishkek/geo/70000001030406610" target="_blank" rel="noopener noreferrer">
        <img src={gisIcon} alt="2ГИС" className="gis-icon" />
      </a>
    </section>
  );
};

export default LocationSection;

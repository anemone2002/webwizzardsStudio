import React, { useState } from 'react';
import './Services.css';
import backgroundImage from '../assets/images/bgc.jpg'

const Services = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия списка

  const toggleList = () => {
    setIsOpen(!isOpen); // Изменяем состояние на противоположное
  };

  return (
    <div className="services-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="centered-text">
        <h2>Мы разрушаем границы, чтобы создавать необычайные опыты.</h2>
      </div>
      <div className="services-section">
        <h3 >Услуги, которые вы получите:</h3>
       
      </div>
      <div className="services">
        <div className="service">
           <h4 onClick={toggleList}>SEO сайты</h4> 
        {isOpen && ( 
          <ul className="service-list">
            <li>Первая страница поисковой системы</li>
            <li>Можно обойтись без платной рекламы</li>
            <li>2х посетителей вместе с рекламой</li>
            <li> Отчет каждую неделю</li>
          </ul>
        )}
        </div>
        <div className="service"><h4 onClick={toggleList}>Дизайн</h4> 
        {isOpen && ( 
          <ul className="service-list">
            <li>Первая страница поисковой системы</li>
            <li>Можно обойтись без платной рекламы</li>
            <li>2х посетителей вместе с рекламой</li>
            <li> Отчет каждую неделю</li>
          </ul>
        )}
        </div>
        <div className="service">Услуга 3</div>
        <div className="service">Услуга 4</div>
      </div>
    </div>
  );
};

export default Services;


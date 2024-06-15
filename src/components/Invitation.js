import React from 'react';
import './Invitation.css';
import frameImage from './foto.jpg'; // Импортируем изображение

const Invitation = () => {
  return (
    <section className="invitation">
      <div className="invitation-content">
        <p>Уважаемые гости,</p>
        <p>С большим удовольствием приглашаем вас стать почетными гостями в этот важный день для нас!</p>
      </div>
      <div className="invitation-image-frame">
        <img src={frameImage} alt="Красивая картинка" className="invitation-image" />
      </div>
    </section>
  );
};

export default Invitation;

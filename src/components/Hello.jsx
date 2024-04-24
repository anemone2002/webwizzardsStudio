import React from 'react';
import './Hello.css' ;

const Hello = () => {
  return (
    <div className="hello-container">
      <div className="text-container">
        <div className="title">Добро пожаловать в студию Webwizards!</div>
        <div className="description">Преобразуйте свой бизнес с помощью набора мощных инструментов!</div>
      </div>
      <video controls width="500">
          <source src="https://rno1.com/assets/images/revolve/revolve_section_2020.mp4" type="video/mp4" />
          
         
        </video>
    </div>
  );
};

export default Hello;

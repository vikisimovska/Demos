import React from 'react';
import './CarouselPanel.css';

const CarouselPanel = (props) => {
  return (
    <div className={`cpanel_base`}
         style={{backgroundColor: `${props.color}`}}>

    </div>
  );
}

export default CarouselPanel;

import React from 'react';
import './CarouselButton.css'

const CarouselButton = (props) => {
  function click() {
    props.handleClick(props.change);
  }

  return (
    <div className="cbutton_base" onClick={click}>
      {props.text}
    </div>
  );
}

export default CarouselButton;

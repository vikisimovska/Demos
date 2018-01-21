import React from 'react';
import './CarouselButton.css'

const CarouselButton = (props) => {
  function click() {
    props.handleClick(props.change);
  }

  return (
    <div >
      <button className="cbutton_base" onClick={click}>
        {props.text}
      </button>
    </div>
  );
}

export default CarouselButton;

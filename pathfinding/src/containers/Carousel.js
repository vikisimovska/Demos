import React, {Component} from 'react';
import './Carousel.css';
import CarouselPanel from '../components/CarouselPanel';
import CarouselButton from '../components/CarouselButton';

const LOAD_LIMIT=3;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: ['black', 'yellow', 'blue', 'green', 'red', 'brown'],
      current: 0,
      next: 0,
      canShift: true,
      animClass: ''
    }

    this.shiftPanels = this.shiftPanels.bind(this);
  }

  // add an event listener for when the slider is done animating
  componentDidMount() {
    document
      .getElementById('carousel_base')
      .addEventListener('transitionend', (event) => {
        this.resetSlider();
      });
  }

  // clean up that event listener
  componentWillUnmount() {
    document
      .getElementById('carousel_base')
      .removeEventListener('transitionend');
  }

  buildCurrentPanels() {
    let panels = [];
    let current = this.state.current;

    for (let i = -1; i <  LOAD_LIMIT - 1; ++i) {
      let content = null;

      // if item is within bounds, build it!
      if (current + i >= 0 || current < this.state.slides.length) {
        let color = this.state.slides[current + i];
        content = <CarouselPanel color={color}/>;
      }

      panels.push(
        <div  className="carousel_panel"
              key={current + i}>
          {content}
        </div>
      );
    }
    return panels;
  }

  // 1 for going right, -1 for going left
  setCurrent(shift) {
    // try shifting what *should* be visible
    let newCurrent = this.state.current + shift;

    // no shifting out of bounds!
    if (newCurrent < 0 || newCurrent >= this.state.slides.length) {
      return false;
    }

    // this.setState({current: newCurrent});
    return newCurrent;
  }

  // 1 for going right, -1 for going left
  shiftPanels(shift) {
    // prevent clicking too quickly
    if (this.state.canShift === false) { return; }

    let newCurrent = this.setCurrent(shift);
    if (newCurrent === false) { return; }

    // change the animclass
    let animClass = (shift === -1) ?
                    ' carousel_pnls--left' :
                    ' carousel_pnls--right';
    this.setState({
      animClass,
      canShift: false,
      next: newCurrent
    });
  }

  resetSlider() {
    this.setState({
      current: this.state.next,
      canShift: true,
      animClass: ''
    });
  }

  render() {
    let animClass = 'carousel_pnls' + this.state.animClass;
    return (
      <div id="carousel_base" className="carousel_base">
        <div className={animClass}>
          {this.buildCurrentPanels()}
        </div>
        <div className="carousel_btns">
          <CarouselButton text="Prev"
                          handleClick={this.shiftPanels}
                          change={-1}/>
          <CarouselButton text="Next"
                          handleClick={this.shiftPanels}
                          change={1}/>
        </div>
      </div>
    );
  }
}

export default Carousel;

/* Code below used when maintaining Panel components in an array
    class member variable (this.panels). It worked and would be
    better for situations where content is loaded in via AJAX.
    Additional cacheing solutions, too!

// // set up the classes appropriately
    // if (shift === -1) { // current moves left
    //   if (this.panels.length === 3) { this.panels.pop(); }

    //   // the remaing two (0, 1) need to be set to
    //   //  "left" and "center" class

    // } else { // current moves right
    //   if (this.panels.length === 3) { this.panels.shift(); }

    //   // the remaing two (0, 1) need to be set to
    //   //  "center" and "right" class

    // }

    // determine which panel to add to the queue, and how:
    // let newItemIdx = newCurrent + shift;
    // let appendClass = (shift === -1) ? 'carousel_pnls--left' : 'carousel_pnls--right';
    // let newPanel = this.buildCurrentPanels(newItemIdx, appendClass, this.state.slides[newItemIdx]);

    // if (shift === -1) {
    //   this.panels.unshift(newPanel);
    // } else {
    //   this.panels.push(newPanel);
    // }

*/

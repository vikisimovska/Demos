import React, {Component} from 'react';
import './Carousel.css';
import CarouselPanel from '../components/CarouselPanel';
import CarouselButton from '../components/CarouselButton';

const LOAD_LIMIT=3;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: ['yellow', 'blue', 'green'],
      current: 0,
      canShift: true
    }

    this.viewClasses = ['carousel_pnls--left',
                        'carousel_pnls--center',
                        'carousel_pnls--right']

    this.shiftPanels = this.shiftPanels.bind(this);
    this.setCurrent = this.setCurrent.bind(this);
  }

  // NOTE: possible refactor to remove viewClasses
  componentWillMount() {
    // As this is the very first time we're building panels,
    //  only 2 are needed (center, right)
    this.buildCurrentPanels();
  }

  buildCurrentPanels() {
    let panels = [];
    let current = this.state.current;

    for (let i = -1; i <  LOAD_LIMIT - 1; ++i) {
      let content;

      // NOTE: a less legit but cleaner way is 'if (!this.state.slides[i])' : can be ternary
      // let content = (this.state.slides[i]) ? <CarouselPanel color={color}/> : null;
      if (current + i < 0 || current >= this.state.slides.length) {
        content = null;
      } else {
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
  shiftPanels(shift) {
    let newCurrent = this.setCurrent(shift);
    if (newCurrent === false) { return; }

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

  }

  // 1 for going right, -1 for going left
  setCurrent(shift) {
    // try shifting what *should* be visible
    let newCurrent = this.state.current + shift;
    if (newCurrent < 0 || newCurrent >= this.state.slides.length) { return false; }

    this.setState({current: newCurrent});
    return newCurrent;
  }

  render() {
    return (
      <div className="carousel_base">
        <div className="carousel_pnls">
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

var React = require('react');

var SliderList = require('./sliderList');
var CarouselList = require('./carouselList');

class Home extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section id="home" className="padbot0">
        <SliderList/>
        <CarouselList/>
      </section>
    ); //déclarer l'élément enfant
  }
}

module.exports = Home;

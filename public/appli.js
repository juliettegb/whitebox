var React = require('react');
var Site = require('./site');

class Appli extends React.Component { //ajouter enfant Carousel

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Whitebox</h1>
        <Site/>
      </div>
    );
  }
}

module.exports = Appli;

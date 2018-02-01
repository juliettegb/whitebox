var React = require('react');

var Title = require('./title');
var Home = require('./home');

class Site extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title/>
        <Home/>
      </div>
    ); //déclarer l'élément enfant (ou les)
  }
}

module.exports = Site;

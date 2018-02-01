var connect   = require('react-redux').connect;
var React = require('react');

class Carousel extends React.Component { //ajouter enfant Carousel

  constructor() {
    super();
  }

  render() {
    return (
      <li onClick={this.props.onSelectedClick} data-target={this.props.target} className= {this.props.classActive}><img src={this.props.imageName} alt=""/></li>
    );
  }
}


function mapDispatchToProps(dispatch, props) {
  return {
    onSelectedClick: function() {
      dispatch({type: 'selectedCarousel', target: props.target})
    }
  }
}

var CarouselRedux = connect(
    null,
    mapDispatchToProps
)(Carousel);

module.exports = CarouselRedux;

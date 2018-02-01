//avec fetch
var React = require('react');
var CarouselRedux = require('./carousel');
var connect   = require('react-redux').connect;

class CarouselList extends React.Component { //ajouter enfant Carousel

  constructor() {
    super();
  }

  render() {

    var data= [
      {target:"slide1", imageName:"images/slider/slide1_bg.jpg"},
      {target:"slide2", imageName:"images/slider/slide2_bg.jpg"},
      {target:"slide3", imageName:"images/slider/slide3_bg.jpg"}
    ];

    var carousels=[];

    var classActiveValue;

    for(var i=0; i<data.length; i++){
      if(data[i].target == this.props.currentTarget){
        classActiveValue = "flex-active-slide";
      } else {
        classActiveValue = null;
      }
      carousels.push(<CarouselRedux target={data[i].target} classActive={classActiveValue} imageName={data[i].imageName}/>);
    }
    return (
      <div id="carousel">
        <ul className="slides">
          {carousels}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {currentTarget: state.target}
}

var CarouselListRedux = connect(
    mapStateToProps,
    null
)(CarouselList);

module.exports = CarouselListRedux;

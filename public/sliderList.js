var React = require('react');
var connect   = require('react-redux').connect;
var Slider = require('./slider');

class SliderList extends React.Component { //ajouter enfant Slider

  constructor() {
    super();
  }

  render() {

    const data = [ //on centralise les infos brutes qu'on va déverser dans chacun des composants
      {classInfo1:"slide1", classInfo2:"title1 captionDelay2 FromTop", content1:"Lyon", content2: "Été", content3: "2017", content4: "Vacances au calme dans une petite maison de campagne"},
      {classInfo1:"slide2", classInfo2:"title1 captionDelay6 FromLeft", content1:"Bretagne", content2: "Weekend de mai", content3: "2016", content4: "Un moment de détente en famille"},
      {classInfo1:"slide3", classInfo2:"title1 captionDelay1 FromBottom", content1:"Biarritz", content2: "Anniversaire Théo", content3: "2015", content4: "Surf and fun entre amis"}
    ]

    var sliders = [];
    var classActiveValue;
    for(var i=0; i<data.length;i++){
      if(data[i].classInfo1 == this.props.currentTarget){
        classActiveValue = "flex-active-slide";
      } else {
        classActiveValue = null;
      }
        sliders.push(<Slider classInfo1={data[i].classInfo1+' '+classActiveValue} classInfo2={data[i].classInfo2} content1={data[i].content1} content2={data[i].content2} content3={data[i].content3} content4={data[i].content4}/>);
    }

    return (
      <div className="flexslider top_slider">
        <ul className="slides">
          {sliders}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {currentTarget: state.target}
}

var SliderListRedux = connect(
    mapStateToProps,
    null
)(SliderList);

module.exports = SliderListRedux;

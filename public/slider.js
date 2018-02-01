var React = require('react');

class Slider extends React.Component {

  constructor() {
    super();
  }

  render() {
    return ( //className captionDelay = effets visuels, on devrait les ajouter dans datas pour affichage dynamique
      <li className={this.props.classInfo1}>
      <div className="flex_caption1">
      <p className={this.props.classInfo2}>{this.props.content1}</p>
      <p className="title2 captionDelay4 FromTop">{this.props.content2}</p>
      <p className="title3 captionDelay6 FromTop">{this.props.content3}</p>
      <p className="title4 captionDelay7 FromTop">{this.props.content4}</p>
      </div>
      </li>
    );
  }
}

module.exports = Slider;

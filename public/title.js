var React = require('react');

class Title extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <div className="menu_block">
          <div className="container clearfix">
            <div className="logo pull-left">
              <a href="index.html" ><span className="b1">w</span><span className="b2">h</span><span className="b3">i</span><span className="b4">t</span><span className="b5">e</span> <span className="b4">box</span></a>
            </div>
          </div>
        </div>
      </header>
    ); //déclarer l'élément enfant
  }
}

module.exports = Title;

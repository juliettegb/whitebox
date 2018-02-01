var React    = require('react');
var ReactDOM = require('react-dom');
var Router   = require('react-router-dom').BrowserRouter;
var Route    = require('react-router-dom').Route;

var createStore =  require('redux').createStore;
var Provider    =  require('react-redux').Provider;

function carouselReducer(state, action) {
  if(action.type == 'selectedCarousel') {
      return { target: action.target }
  } else {
      return { target: state.target }
  }
}

const store = createStore(carouselReducer, { target: "slide1"});

//var Site     = require('./site');
var Appli    = require('./appli');

ReactDOM.render(
  <Provider store = {store}>
    <Appli/>
  </Provider>
  ,
  document.getElementById('page')
);

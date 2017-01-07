import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component
// some html
const App = function(){
  return <div>Hi!</div>;
}
// take this components generated html and put it
//on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));

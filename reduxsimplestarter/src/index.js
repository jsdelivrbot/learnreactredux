import React from 'react';
import ReactDOM from 'react-dom';
import * as keys from './apiKeys';
import SearchBar from './components/search_bar'

// Create a new component
// some html
const App = function(){
  return <div>
    <SearchBar />
  </div>;
}
// take this components generated html and put it
//on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));

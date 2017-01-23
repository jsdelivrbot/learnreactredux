import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiJquery from 'chai-jquery';

import reducers from '../src/reducers';

// setup testing environment to run like a browser in the command license
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}
// build helper for simulating events

$.fn.simulate = function(eventName, eventValue) {
  if(eventValue) {
    this.val(eventValue);
  }

  TestUtils.Simulate[eventName](this[0]);
};
// set up chai-jquery
chaiJquery(chai, chai.util, $);
export { renderComponent, expect };

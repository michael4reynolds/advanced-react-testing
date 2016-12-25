import 'jsdom-global/register';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../App';
import reducers from '../../reducers';

chai.use(chaiEnzyme());

describe('App', () => {
  let component;

  beforeEach(() => {
    const store = createStore(reducers);
    component = mount(
      <Provider store={store}>
        <App/>
      </Provider>,
      );
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box'));
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});

describe('app', () => {
  let app;

  beforeEach(() => {
    const store = createStore(reducers);
    app = shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('renders', () => {
    expect(app.find('App')).toBeDefined;
  });
});

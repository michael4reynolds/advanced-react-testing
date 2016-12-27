import React from 'react';
import { mount, shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../App';
import reducers from '../../reducers';

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
    expect(component.find('.comment-box').length).toBeGreaterThan(0);
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list').length).toBeGreaterThan(0);
  });
});

describe('app', () => {
  let app;

  beforeEach(() => {
    const store = createStore(reducers);
    app = shallow(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
  });

  it('renders', () => {
    expect(app.find('App')).not.toBeNull();
    expect(app.find('App').length).toBeGreaterThan(0);
  });
});

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { CommentList } from '../CommentList';
import reducers from '../../reducers';

describe('app', () => {
  let component;
  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment'] };
    const store = createStore(reducers);
    component = mount(
      <Provider store={store}>
        <CommentList {...props}/>
      </Provider>,
    );
  });

  it('show an LI for each comment', () => {
    expect(component.find('li').length).toBe(2);
  });

  it('shows each comment that is provided', () => {
    expect(component.find('li').at(0).text()).toBe('New Comment');
    expect(component.find('li').at(1).text()).toBe('Other New Comment');
  });
});

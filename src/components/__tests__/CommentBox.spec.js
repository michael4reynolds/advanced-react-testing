import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import CommentBoxConnect from '../CommentBox';
import reducers from '../../reducers';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    const props = {};
    const state = {};
    component = mount(
      <Provider store={createStore(reducers, state)}>
        <CommentBoxConnect {...props}/>
      </Provider>,
    ).find('form');
  });

  it('has the correct class', () => {
    expect(component.hasClass('comment-box')).toBe(true);
  });

  it('has a text area', () => {
    expect(component.find('textarea').length).toBe(1);
  });

  it('has a button', () => {
    expect(component.find('button').length).toBe(1);
  });


  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', { target: { value: 'new comment' } });
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea').text()).toBe('new comment');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea').text()).toBe('');
    });
  });
});

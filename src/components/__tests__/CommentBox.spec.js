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
    );
  });

  it('has the correct class', () => {
    expect(component).to.have.className('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });


  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', { target: { value: 'new comment' } });
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.text('new comment');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.text('');
    });
  });
});

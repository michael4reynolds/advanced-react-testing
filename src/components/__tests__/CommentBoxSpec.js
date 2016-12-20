import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CommentBox/>);
  });

  it('has the correct class', () => {
    expect(component.hasClass('comment-box')).toBe(true);
  });

  it('has a text area', () => {
    expect(component.find('textarea').length).toBe(1);
  });

  it('has a button', () => {
    expect(component.find('button').length).toBeTruthy();
  });
});

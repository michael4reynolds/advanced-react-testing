import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';


describe('CommentBox', () => {
  it('has the correct class', () => {
    const component = shallow(<CommentBox/>);
    expect(component.hasClass('comment-box')).toBe(true);
  });

  it('has a text area', () => {
    const component = shallow(<CommentBox/>);
    expect(component.find('textarea').length).toBe(1);
  });


  it('has a button', () => {
    const component = shallow(<CommentBox/>);
    expect(component.find('button').length).toBeTruthy();
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';


describe('App', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App/>);
  });
  it('shows a comment box', () => {
    expect(component.find('CommentBox').length).toBe(1);
    component = mount(<App/>);
    expect(component.find('.comment-box').length).toBeGreaterThan(0);
  });
});

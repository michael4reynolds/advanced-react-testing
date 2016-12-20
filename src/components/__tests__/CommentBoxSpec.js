import 'jsdom-global/register';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';

chai.use(chaiEnzyme());

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CommentBox/>);
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
});

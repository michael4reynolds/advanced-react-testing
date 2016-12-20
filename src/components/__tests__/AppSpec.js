import 'jsdom-global/register';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

chai.use(chaiEnzyme());

describe('App', () => {
  let component;

  beforeEach(() => {
    component = mount(<App/>);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});

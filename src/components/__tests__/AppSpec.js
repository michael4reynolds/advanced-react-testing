import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';


describe('App', () => {
  it('shows the correct text', () => {
    const component = shallow(<App />);
    expect(component.text()).toBe('React simple starter');
  });
});

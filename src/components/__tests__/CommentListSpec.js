import 'jsdom-global/register';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { CommentList } from '../CommentList';
import reducers from '../../reducers';

chai.use(chaiEnzyme());

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
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component.find('li').at(0).text()).equals('New Comment');
    expect(component.find('li').at(1).text()).equals('Other New Comment');
  });
});

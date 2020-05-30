import React from 'react';import { shallow } from 'enzyme';
import Studachi from './studachi';

describe('Renders  Without crashing', () => {

    it(' loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Studachi/>); 
      
      var state1={count:1};
      
    wrapper.setState(state1)      
      expect(wrapper.state('count')).toEqual(1)
    });
});





import React from 'react';import { shallow } from 'enzyme';
import Dash from './studash';

describe('Test cases for Student Achievements Without crashing', () => {

    it('Faculty Pass loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Dash />);
    
    
      var state1={count:1};
    
      wrapper.setState(state1)
    
      expect(wrapper.state('count')).toEqual(1)
    
    });
    
    

});
    
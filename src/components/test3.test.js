import React from 'react';import { shallow } from 'enzyme';
import Facpass from './facpass';

describe('Renders Faculty Pass Without crashing', () => {

    it('Faculty Pass loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Facpass />);
    
     
      var state1={count:1,isToggleOn: [],status : "APPROVE", listUI : []};
    
      wrapper.setState({'status':'APPROVE'})
     
      expect(wrapper.state('status')).toEqual('APPROVE')
    
    
    });
    
    

});

import React from 'react';import { shallow } from 'enzyme';
import Dash from './studash';

describe('Renders Dashboard Without crashing', () => {

    it('Dashboard loading correctly', () => {
      window.alert = jest.fn();
          let assignMock = jest.fn();
          delete window.location;
          window.location = { pushState: assignMock,reload:jest.fn() };
        window.reload= jest.fn();
      var wrapper = shallow(<Dash />);
    
     // window.alert = jest.fn();
      var state1={stu_name: "test1", stu_id: "1", gender:"M",email:"test@gmail.com",dob:"20-01-2001",
      mobile:"818181",addr:"test",school:"HSJS",percent:"34",branch:"ECE",sec:"B",cur_sem:"6",cgpa:"9.20"}

      wrapper.setState(state1)
      // delete window.location;
      // window.location = { pushState: jest.fn(),reload:jest.fn() };
      // window.reload= jest.fn()
      expect(wrapper.state('stu_name')).toEqual('test1')
      expect(wrapper.state('stu_name')).not.toEqual('test2')
    //   expect(wrapper.state('pwd')).toEqual('17464')
    
    });
    });
    
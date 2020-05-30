import React from 'react';import { shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import Dash from './studash';
import Facpass from './facpass';
import Studachi from './studachi';
import Facdash from './facdash.jsx';
import Applypass from './applypass.jsx';
import Passhist from './passhist.jsx';



describe('Renders Fac Dashboard Without crashing', () => {

    it('Fac Dash loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Facdash/>); 
      
      var state1={ fac_name: "", fac_id: "", gender:"Male",email:"",qual:"",
      dob:"",mobile:"",addr:"",advisor_for:""};
      const div = document.createElement('div');
    ReactDOM.render(<Facdash />, div);
    
    ReactDOM.unmountComponentAtNode(div);
      
      wrapper.setState(state1)     
      expect(wrapper.state("gender")).toEqual('Male')
    });
});



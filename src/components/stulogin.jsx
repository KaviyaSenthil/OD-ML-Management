import React, { Component } from 'react';
import './stulogincss.css';
import image from './amrita_round_2019.jpg'

class Stulogin extends Component {
  state = { uid: "", pwd: "",status:"",error:{val:false,msg:""}};

  studentlogin = event => {
    event.preventDefault();
    
    var value=this;

    if(this.state.uname===''||this.state.pwd==='')
    {
      alert('Enter something!')
      value.setState({error:{val:true,msg:"Enter Something!"}}) 
      
    }
    
    fetch('http://localhost:8000/login', {
      method: 'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        uname:this.state.uname,
        pwd:this.state.pwd
      })
    }).then(function (response) {
      
      return response.json();

    }).then(function (json) {
      // console.log(json)
      
      value.setState({ status: json[0].su },function(){console.log(this.Trigger())})
    })
     
  };
  
  Trigger =()=>{
  const value=this
    if(this.state.status==="fail")
    {
      
      // console.log("HE1RE")
      alert('Incorrect username or password')
      this.setState({error:{val:true,msg:"Wrong User or Pass"}})
    }
    else
    {
      
      value.setState({error:{val:false,msg:""}})
      sessionStorage.setItem('uname', value.state.status);
      if(value.state.status.startsWith('cb.en.t'))
      {
        window.history.pushState(null, "facdash", "/facdash");
        window.location.reload();
      }
      else
      {
        window.history.pushState(null, "studash", "/studash");
        window.location.reload();
      }
      
    }
  }
  onInputChange = event => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  };


	render() {
		return (
			<div>
          <title>Student Login</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link rel="stylesheet" type="text/css" href="./fonts/iconic/css/material-design-iconic-font.min.css"> */}
          {/* <link rel="stylesheet" type="text/css" href="./css/main.css"> */}
 
          <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'url("https://static.toiimg.com/photo/60387019/.jpg")'}}>
              <div style={{background: 'transparent', float: 'left'}}>
              <img src={image} alt="Amrita Vishwa Vidyapeetham"/>
                <span style={{color: 'black', fontWeight: 900, fontSize: '100px', paddingRight: '150px'}}><br />
                  </span></div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="wrap-login100">
                <form className="login100-form validate-form" id='custrm'>
                  <span className="login100-form-logo">
                    {/* <i class="zmdi zmdi-landscape"></i> */}
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/1082/1082404.svg" alt="No Image" style={{width: '50%'}} />
                  </span>
                  <span className="login100-form-title p-b-34 p-t-27">
                    Log in
                  </span>
                  {this.state.error.val&& <h7>{this.state.error.msg}</h7>}
                  <div className="wrap-input100 validate-input" data-validate="Enter username">
                    <input className="input100" type="text" name="uname" placeholder="Username" onChange={this.onInputChange} required/>
                    <span className="focus-input100" data-placeholder="" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <input className="input100" type="password" name="pwd" placeholder="Password" onChange={this.onInputChange} required/>
                    <span className="focus-input100" data-placeholder="" />
                  </div>
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn" id="submit" onClick={this.studentlogin}>
                  Login
                    </button>
                    {/* <input type="submit"></input> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
		);
	}
}

export default Stulogin;
import React, { Component, Fragment } from 'react';

class achi extends Component {
    state = {count:1};
    
    infoach = () => {
      
      var value=this;
  
      var data= new URLSearchParams();
      data.append('uname',sessionStorage.getItem('uname'));
  
      fetch('http://localhost:8000/achi', {
        method: 'post',
        body:data
      }).then( (response) =>{
        return response.json();
  
      }).then( (json)=> {
        this.setState(()=>{
            return {achList : json}
        })
      }).then(()=>{
        console.log("in achlist",this.state.achList)

        var achUI = this.state.achList.map((element)=>{
          return (
            <Fragment>
              <tr>
                  <td>{value.state.count++}</td>
                  <td>{element.sid}</td>
                  <td>{element.sname}</td>
                  <td>{element.atyp}</td>
                  <td>{element.adesc}</td>
                  <td>{element.alink}</td>
                  <td>{element.adate}</td>
             
              </tr>
              <br></br>
              </Fragment>
          );
          
          })
          console.log(achUI)
          this.setState(()=>{
            return {achUI : achUI}
          })
      })
    };
  
    componentDidMount=()=>{
        
      this.infoach() 
    } 
  
      render() {
          return (
        <div>
            <style dangeruslySetInnerHTML={{__html: "\n\nul {\n  list-style-type: none;\n  margin: -8px;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  padding:10px;\n  float: left;\n}\n\nli a{\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover {\n  background-color: white;\n}\n\nli a.exit:hover{\n    background-color: red;\n}\n\ntable{\n  border: 3px solid black;\n  padding: 20px;\n  background-color: #eca6bb;\n  border-collapse: collapse;\n}\n\nth{\n  border: 3px solid black;\n  text-align: left;\n  padding: 15px;\n  font-size: 20px;\n  border-collapse: collapse;\n}\n\ntd {\n    text-align: left;\n  border: 3px solid black;\n  padding: 15px;\n  border-collapse: collapse;\n}\n\nth.heading{\n    text-align: center;\n    background-color: #b63a60;\n    font-size: 30px;\n}\n\n.personal_info{\n    margin-top: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n.edu_info{\n    margin-top: 50px;\n    margin-bottom: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n" }} />
            <div className="personal_info">
              <br></br>
            <h1><center>Achievements (Perks)</center></h1>
            <br></br>
            <table style={{width: '100%',border:'5px solid black',padding:"12px"}}>
                <tbody>
                  <tr>
                    <th>S.No</th>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Achievement Type</th>
                    <th>Achievement Description</th>
                    <th>Achievement Link</th>
                    <th>Achievement Date</th>
                    
                  </tr>
                  <br></br>
                  {this.state.achUI}
                  
                </tbody></table>
            </div>
            <br />
            <br />
            <hr />
            
        </div>
        );
      }
  }
  
  export default achi;


  
import React, { Component, Fragment  } from 'react';

class Passhist extends Component {
    state = {count:1};
    
    infopass = () => {
      
      var value=this;
  
      var data= new URLSearchParams();
      data.append('uname',sessionStorage.getItem('uname'));
  
      fetch('http://localhost:8000/passhistory', {
        method: 'post',
        body:data
      }).then( (response) =>{
        return response.json();
  
      }).then( (json)=> {
        this.setState(()=>{
            return {passList : json}
        })
      }).then(()=>{
        console.log("in passlist",this.state.passList)

        var listUI = this.state.passList.map((element)=>{
          return (
            <Fragment>
              <tr>
                  <td>{value.state.count++}</td>
                  <td>{parseInt(element.sps)  ? 'ACCEPTED' : 'PENDING'}</td>
                  <td>{element.sid}</td>
                  <td>{element.sn}</td>
                  <td>{element.stype}</td>
                  <td>{element.sf}</td>
                  <td>{element.st}</td>
                  <td>{element.sd}</td>
                  <td>{element.sl}</td>
              </tr>
              <br></br>
            </Fragment>
              
              
          );
          
          })
          console.log(listUI)
          this.setState(()=>{
            return {listUI : listUI}
          })
      })
    };
  
    componentDidMount=()=>{
        
      this.infopass() 
    } 
  
      render() {
          return (
        <div style={{margin:"10px"}}>
            <style dangeruslySetInnerHTML={{__html: "\n\nul {\n  list-style-type: none;\n  margin: -8px;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  padding:10px;\n  float: left;\n}\n\nli a{\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover {\n  background-color: white;\n}\n\nli a.exit:hover{\n    background-color: red;\n}\n\ntable{\n  border: 3px solid black;\n  padding: 20px;\n  background-color: #eca6bb;\n  border-collapse: collapse;\n}\n\nth{\n  border: 3px solid black;\n  text-align: left;\n  padding: 15px;\n  font-size: 20px;\n  border-collapse: collapse;\n}\n\ntd {\n    text-align: left;\n  border: 3px solid black;\n  padding: 15px;\n  border-collapse: collapse;\n}\n\nth.heading{\n    text-align: center;\n    background-color: #b63a60;\n    font-size: 30px;\n}\n\n.personal_info{\n    margin-top: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n.edu_info{\n    margin-top: 50px;\n    margin-bottom: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n" }} />
            <div className="personal_info">
            <br></br>
            <br></br>
            <h1><center>Pass History</center></h1>
            <br></br>
            <br></br>
              <table style={{width: '100%',border:'5px solid black',padding:"12px"}}>
                <tbody>
                  <tr>
                    <th>S.No</th>
                    <th>Pass Status</th>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Pass Type</th>
                    <th>Pass From</th>
                    <th>Pass To</th>
                    <th>Pass Description</th>
                    <th>Proof Link</th>
                  </tr>
                  <br></br>
                  {this.state.listUI}
                  
                </tbody></table>
            </div>
            <br />
            <br />
            <hr />
            
        </div>
        );
      }
  }
  
  export default Passhist;


  
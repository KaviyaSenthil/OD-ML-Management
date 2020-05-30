import React, { Component,Fragment } from 'react';

class Facpass extends Component {
    state = {count:1,isToggleOn: [],status : "APPROVE", listUI : []};
    gebList =()=>{
        console.log("in passlist",this.state.passList)
        
        var listUI = this.state.passList.map((element)=>{
          return element
          })
          var a = new Array(listUI.length);
          for(var i = 0; i<this.state.passList.length; i++)
          {
            console.log(this.state.passList[i])
            if(this.state.passList[i].sps === "0")
            {
              a[i] = false;
            }
            else
            {
              a[i] = true;
            }
          }
          // for (var j = 0; j < a.length; ++j) { a[j] = true; }

          var statustemp = new Array(listUI.length);
          for (i = 0; i < a.length; ++i) {
            if(a[i] === true)
             statustemp[i] = 'CANCEL'; 
            else
          statustemp[i] = 'APPROVE';}

          console.log(listUI)
          this.setState(()=>{
            return {listUI : listUI,
             isToggleOn : [...a],            
              status : [...statustemp]
            }
          })
    }
    passfac = () => {
      
      var value=this;
  
      var data= new URLSearchParams();
      data.append('uname',sessionStorage.getItem('uname'));
  
      fetch('http://localhost:8000/facpasshistory', {
        method: 'post',
        body:data
      }).then( (response) =>{
        return response.json();
  
      }).then( (json)=> {
        this.setState(()=>{
            return {passList : json}
        })
      }).then(()=>{
        this.gebList()
        
      })
    };
  
    componentDidMount=()=>{
        
      this.passfac() 
    } 
  
      render() {
          return (
        <div style={{margin:"2px"}}>
            <style dangeruslySetInnerHTML={{__html: "\n\nul {\n  list-style-type: none;\n  margin: -8px;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  padding:10px;\n  float: left;\n}\n\nli a{\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover {\n  background-color: white;\n}\n\nli a.exit:hover{\n    background-color: red;\n}\n\ntable{\n  border: 3px solid black;\n  padding: 20px;\n  background-color: #eca6bb;\n  border-collapse: collapse;\n}\n\nth{\n  border: 3px solid black;\n  text-align: left;\n  padding: 15px;\n  font-size: 20px;\n  border-collapse: collapse;\n}\n\ntd {\n    text-align: left;\n  border: 3px solid black;\n  padding: 15px;\n  border-collapse: collapse;\n}\n\nth.heading{\n    text-align: center;\n    background-color: #b63a60;\n    font-size: 30px;\n}\n\n.personal_info{\n    margin-top: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n.edu_info{\n    margin-top: 50px;\n    margin-bottom: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n" }} />
            <div className="personal_info">
            <br></br>
            <h1><center>Pass History</center></h1>
            <br></br>
            <table style={{width: '100%',border:'5px solid black',padding:"12px"}}>
                <tbody>
                  <tr>
                    <th>S.No</th>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Pass Type</th>
                    <th>Pass From</th>
                    <th>Pass To</th>
                    <th>Pass Month</th>
                    <th>Pass Description</th>
                    <th>Proof Link</th>
                    <th>Approve/Cancel</th>
                  </tr>
                  <br></br>
                {this.state.listUI !== [] ? this.state.listUI.map((element,index)=>{
                     return ( <Fragment><tr>
                      <td>{this.state.count++}</td>
                      <td>{element.sid}</td>
                      <td>{element.sn}</td>
                      <td>{element.stype}</td>
                      <td>{element.sf}</td>
                      <td>{element.st}</td>
                      <td>{element.sm}</td>
                      <td>{element.sd}</td>
                      <td>{element.sl}</td>
                      <td><button onClick={()=>{

                          console.log("clicked",this.state.isToggleOn)
                          this.setState(() => {
                          let temp = [...this.state.isToggleOn]
                          temp[index] = !temp[index]
                           return {isToggleOn: [...temp]}
                            },()=>{
                this.setState(()=>{
                    let temp = [...this.state.status]
                        temp[index] = this.state.isToggleOn[index] === true ? 'APPROVE' : 'CANCEL'
                    return {status : temp}
                },()=>{
                    this.setState(()=>{
    
                        console.log('hi')
                        var data1= new URLSearchParams();
                        if(this.state.status[index] === 'APPROVE')
                        {
                            data1.append('pstat',0);
                        }
                        else if(this.state.status[index] === 'CANCEL')
                        {
                            data1.append('pstat',1);
                        }
                        data1.append('pid',element.spp);
                        fetch('http://localhost:8000/updatepass', {
                            method: 'post',
                            body:data1
                        })
                    })
                })
            })}}>
            
            {this.state.status[index]}
          </button></td>
                  </tr><br></br></Fragment>) } ) 
                  : "null"}
                </tbody></table>
            </div>
            <br />
            <br />
            <hr />
            
        </div>
        );
      }
  }
  
  export default Facpass;


  
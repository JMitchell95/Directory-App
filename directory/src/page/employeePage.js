import React, { Component} from "react";
import Col from "../component/Col";
import Jumbotron from "../component/Jumbotron";
import Container from "../component/Container";
import Row from "../component/Row";
import Table from "../component/Table";
import api from "../utils/api";



class Employee extends Component{


    state= {


        employee:'',
        // firstName:'',
        // lastName:'',
        // email:'',
        // phone:'',
        // photoId:''
    }

    componentDidMount(){
       this.renderEmployee();
      }

  

      renderEmployee = () => {
          
        api.generateEmployee()
          .then(res => {
              console.log(res.data.results);
              return this.setState({
                  employee: res.data.results
              });
    
            // this.setState({
            //     firstname: res.data.results[i].name.first,
            //     lastname: res.data.results[i].name.last,
            //     photo: res.data.results[i].picture.medium,
            //     // email: res.data.result[i].email,
            //     // phone: res.data.result[i].phone,

            // })
 
        

          })
          .catch(err => console.log(err));
      };
    


    

    
    render(){

          return (
              <Container>
                  <Row>
                      <Jumbotron/>
                      <Col size="md-9">
                            <Table results= {this.state.employee}/>
                      </Col>
                  </Row>
              </Container>
          )
    }  
}

export default Employee;
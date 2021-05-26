import React from "react";

function Table(props){
    return(

        <table class="table">
  <thead>
    <tr>
    <th scope="col">PhotoID</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {props.results &&
    props.results.map(function(employee){
        return <tr> 
        <td >
          <img class='img' src={employee.picture.large}/>
        </td>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.email}</td>
        <td>{employee.phone}</td>
      </tr>
      })}
  </tbody>
</table>
    )
}

export default Table;
import React from "react"
import './tablestyles.css'
function Table({totalData}){
    // console.log(totalData);
    return(
        <table className="table-container">
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Owner Name</th>
            <th>Email ID</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
            {totalData.map((data, index) => (
            <tr key={index}>
              <td>{data.petname}</td>
              <td>{data.pettype}</td>
              <td>{data.breed}</td>
              <td>{data.ownername}</td>
              <td>{data.emailid}</td>
              <td>{data.phone}</td>
            </tr>
          ))}
        </tbody>
        </table>
    )
}
export default Table
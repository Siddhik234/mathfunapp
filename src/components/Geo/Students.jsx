import React from "react";
import { data } from "../../services/studata";

export const Students=()=>{
    console.log(data);
    return(
        <React.Fragment>
            <h1>students list</h1>
           <table className="table">
            <tr>
                <th> Full Name</th>
                <th> Age</th>
                <th> Gender</th>
            </tr>
            {data.map(item=>
                <tr className="tr">
                    <td>{item.fname} {item.lname} </td>
                    <td> {item.age} </td>
                    <td> {item.gender} </td>
                </tr>
                )}
           </table>
        </React.Fragment>
    )
}
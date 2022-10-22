import { NavigateBefore } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import {useNavigate,useLocation} from "react-router-dom"

export const Mycricchild=()=>{
    const recive=useLocation();
    const navigate=useNavigate();
    const handleback=()=>{
        navigate("/myconnect")
    }
    
    return(
        <React.Fragment>
            <Button variant="contained" onClick={handleback}>Back to Player List</Button>
        <h1 id="play">Player Stats </h1>
       <div className="card">
        <h1> Player-@{recive.state.name} </h1>
        <img src={recive.state.image} height={250} width={250} />
        <h1> Role-#{recive.state.role} </h1>
       <table>
        <tr> 
            <th className="">Format</th>
            <th>odi</th>
            <th>test</th>
            <th>t20</th>
            <th>Ipl</th>
        </tr>
        <tr>
            <td >Matches</td>
            <td >{recive.state.matches.odi} </td>
            <td >{recive.state.matches.test} </td>
            <td >{recive.state.matches.t20} </td>
            <td >{recive.state.matches.ipl} </td>
        </tr>
        <tr>
            <td >Runs</td>
            <td >{recive.state.runs.odi} </td>
            <td >{recive.state.runs.test} </td>
            <td >{recive.state.runs.t20} </td>
            <td >{recive.state.runs.ipl} </td>
        </tr>
       </table>
        
       </div>
       </React.Fragment>
    )
}
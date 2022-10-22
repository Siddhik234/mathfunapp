import React,{useState} from "react";
import { Button,Grid } from "@mui/material";
import axios from "axios";
import { Mycolor } from "./myconnect/Mycolor";
import { Myproduct } from "./myconnect/Myproduct";
import { Mycicket } from "./myconnect/Mycicket";


export const Myconnect=()=>{
    const[data,setData]=useState([]);

    const handleGetemp= async()=>{
      const result =await axios.get("http://localhost:3030/emp")
      console.log(result)
       setData(result.data)
    }
    return(
        <React.Fragment>
            <Mycicket/>
            <Myproduct/>
            <Mycolor/>
            <h3> My api connect </h3>
            <Button variant="contained" onClick={handleGetemp} >Get Employees</Button>
            <Grid container spacing={3}>
            {
                data.map((item,ind)=>(
                <Grid item xs={12} key={ind}>
                   {item.fname} {item.lname} {item.empid} {item.age}
                </Grid>
                 ) )
            }
            </Grid>
        </React.Fragment>
    )
}
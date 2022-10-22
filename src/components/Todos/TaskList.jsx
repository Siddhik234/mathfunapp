import React, { useState } from "react";
import {Taskitem} from "./Taskitem";
import { Grid } from "@mui/material";

export const TaskList=()=>{
    const[newtask,setNewtask]=useState("");
    const[data,setData]=useState(["Breakfast","Getting Ready","Goto office","check Email"]);

     const handleAdd=()=>{
     setData([...data,newtask])
    }
    return(
        <React.Fragment>
            <h3>task list</h3>
          <Grid container spacing={2}>
            <Grid item xs={12}>
          <input onChange={(e)=>setNewtask(e.target.value)} />
          <button onClick={handleAdd}>Add </button>
          </Grid>
          
            {data.map((item)=>(
                <Grid item xs={4}>
               <Taskitem item={item} />       
               </Grid> ) ) } 
                </Grid>
        </React.Fragment>
    )
}
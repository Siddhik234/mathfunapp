import React,{useState} from "react";
import { Grid, Button,TextField } from "@mui/material";
import { Techitem } from "./Techitem";

export const Techlist=()=>{
    const[newtec,setNewtec]=useState("");
    const[data,setData]=useState([]);

    const handleAdd=()=>{
        setData([newtec,...data])
    }

    return(
        <React.Fragment>
            <h2>Technologies List</h2>
           <Grid container spacing={3}>
            <Grid item xs={6}>
          <TextField variant="outlined" label="Add technology" fullWidth onChange={(e)=>setNewtec(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
         <Button variant="contained" color="warning" onClick={handleAdd} >Add</Button>
            </Grid>
            {
                data.map(item=>
                <Grid item xs={3}>
                    <Techitem item={item} />
                </Grid>
                )
            }
           </Grid>
        </React.Fragment>
    )
}
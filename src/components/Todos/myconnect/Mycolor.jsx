import React, { useState } from "react";
import { Grid,Button } from "@mui/material";
import axios from "axios";

export const Mycolor=()=>{
    const[data,setData]=useState([]);

    const handlegetcolor=async()=>{
            const result=await axios.get("http://localhost:3030/colors")
            setData(result.data)
    }
    return(
        <React.Fragment>
            <h3>My color</h3>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth onClick={handlegetcolor}>Get Colors </Button>
                </Grid>
             {
                data.map((item)=>
                <Grid item xs={3}>
                 <div className="clr" style={{backgroundColor: item}}>
                   
                 </div>
                </Grid>
                )
             }

            </Grid>
        </React.Fragment>
    )
}
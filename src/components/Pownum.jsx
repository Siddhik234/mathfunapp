import { Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Pownum=()=>{
    const[num,setNum]=useState();
    const[pow,setPow]=useState();
    return(
        <React.Fragment>
            <Card sx={{bgcolor: "brown" }}>
                <CardContent sx={{bgcolor: "grey"}} >
            <Grid container spacing={2}>
             <Grid item xs={4}>
               Num1
             </Grid>
             <Grid item xs={4}>
               Num2
             </Grid>
             <Grid item xs={4}>
               Ans
             </Grid>
             <Grid item xs={4}>
          <TextField variant="outlined" label="Enter Num1" onChange={(e)=>setNum(e.target.value)} />
             </Grid>
             <Grid item xs={4}>
          <TextField variant="outlined" label="Num1" onChange={(e)=>setPow(e.target.value)} />
             </Grid>
             <Grid item xs={4}>
          <h2> {num} to the Power {pow} is {num**pow}   </h2>
             </Grid>
            </Grid>
            </CardContent>
            </Card>
        </React.Fragment>
    )
}
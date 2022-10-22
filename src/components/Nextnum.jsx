import React,{useState} from "react";
import {Grid,TextField ,Card,CardContent,Typography} from "@mui/material";

export const Nextnum=()=>{
    const[num,setNum]=useState(-1);
    return(
    <React.Fragment>
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                 <Grid item xs={6}>
                 Number
                 </Grid>
                 <Grid item xs={6}>
                 Nextnumber
                 </Grid>
                 <Grid item xs={6}>
           <TextField variant="outlined" label="Enter Number" onChange={(e)=>setNum(e.target.value)} />
                 </Grid>
                 <Grid item xs={6}>
                <Typography variant="h2"> {Number(num) + 1} </Typography>
                 </Grid>
                </Grid>
            </CardContent>
        </Card>
    </React.Fragment>
    )
}
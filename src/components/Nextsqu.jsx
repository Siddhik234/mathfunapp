import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React,{useState} from "react";

export const Nextsqu=()=>{
    const[sq,setSq]=useState(0);
    const[qu,setQu]=useState(0);
    return(
    <React.Fragment>
        {/* <Card>
            <CardContent> */}
                <Grid container spacing={3}>
                <Grid item xs={6}>
                Number
                </Grid>
                <Grid item xs={3}>
                Square of your Number 
                </Grid>
                <Grid item xs={3}>
                Qube of your Number 
                </Grid>
                <Grid item xs={6}>
              <TextField variant="outlined" label="enter number to squre" onChange={(e)=>setSq(e.target.value)} />
                </Grid>
                <Grid item xs={3}>
          <Typography variant="h2"> {sq**2 } </Typography>
                </Grid>
                <Grid item xs={3}>
          <Typography variant="h2"> {Number(sq)**3} </Typography>
                </Grid>
                </Grid>
            {/* </CardContent>
        </Card> */}
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                <Grid item xs={6}>
                Number
                </Grid>
                <Grid item xs={6}>
                Cube of your Number 
                </Grid>
                <Grid item xs={6}>
              <TextField variant="outlined" label="enter number to Cube" onChange={(e)=>setQu(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
          <Typography variant="h2"> {Number(qu)**3} </Typography>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
    </React.Fragment>

    )
}
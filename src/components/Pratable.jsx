
import React,{useState} from "react";

import { Grid,TextField,Card,CardContent, Typography } from "@mui/material";

export const Pratable=()=>{
    const[pra,setPra]=useState();
    const[prac,setPrac]=useState();
    return(
        <React.Fragment>
            <Card>
            <CardContent>
                <Grid container spacing={3}>

                <Grid item xs={3}>
                Number1
                </Grid>
                <Grid item xs={3}>
                Number2 
                </Grid>
                <Grid item xs={6}>
                  Final Number
                </Grid>
                <Grid item xs={3}>
             <TextField variant="outlined" label="number1" onChange={()=>setPra()} />
                </Grid>
                <Grid item xs={3}>
             <TextField variant="outlined" label="number2" onChange={()=>setPrac()} />
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h2"> {  Number(pra) * Number(prac) } </Typography>
                </Grid>
                   
                </Grid> 
             </CardContent>
         </Card>
        </React.Fragment>
   );
 };
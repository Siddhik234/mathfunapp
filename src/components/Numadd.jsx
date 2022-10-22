import { Grid,Card,CardContent, TextField,Button } from "@mui/material";
import React from "react";

export const Numadd=()=>{
    
return( 
    <React.Fragment>
            <Card sx={{ bgcolor: "lightgreen"} }>
            <CardContent>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                Number1
                </Grid>
                <Grid item xs={3}>
                Number2 
                </Grid>
                <Grid item xs={6}>
                    comparision
                </Grid>
                <Grid item xs={3}>
                <TextField variant="outlined" label="num1" />
                </Grid>
                <Grid item xs={3}>
                <TextField variant="outlined" label="num2" />
                </Grid>
                <Grid item xs={6}>
              <Button variant="contained"  > Comparision </Button>
                </Grid>
                </Grid>
                </CardContent>
         </Card>
        </React.Fragment>

)
}
import { Card, CardContent, Grid,Badge,Rating, Button, TextField } from "@mui/material";
import React from "react";

export const Productitem=({item})=>{
    return(
      <React.Fragment>
        
        <Badge badgeContent={item.price} color="primary" >
        <Card sx={{bgcolor:"coral"}}>
        <CardContent>
            <Grid container spacing={1}>
                <Grid item xs={12}>
              <Rating value= {item.rating.rate} />
                </Grid>
          <Grid item xs={12}>
         <img src= {item.image} width="200px" height={200} />
          </Grid>
          <Grid item xs={12}>
          <b>{item.title} </b>
          </Grid>
          <Grid item xs={6}>
           <Button variant="contained" color="secondary" >Add to cart</Button>
          </Grid>
          <Grid item xs={6}>
           <Button variant="contained" color="secondary" >Buy now</Button>
          </Grid>
            </Grid>
        </CardContent>
        </Card>
        </Badge>
      </React.Fragment>
    )
}
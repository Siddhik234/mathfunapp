import axios from "axios";
import React,{useState} from "react";
import { Grid,Button,Card, CardContent } from "@mui/material";


export const Myproduct=()=>{
    const[data,setData]=useState([]);

    const handlegetpro=async()=>{
        const result=await axios.get("http://localhost:3030/products")
        console.log(result.data)
        setData(result.data)
    }


    return(
        <React.Fragment>
            <h1>My product </h1>
        <Grid container spacing={3}>
         <Grid item xs={12}>
           <Button variant="contained" fullWidth onClick={handlegetpro}>MY PRODUCTS</Button>
         </Grid>
          {data.map((item)=>
          <Grid item xs={3}>
            <Card>
            <CardContent className="mycard">
                <h1 id="h">{item.category} </h1>
                <img src={item.image} width={250} height={250} />
                <h3> Price {item.price} $ </h3>
                <h2>{item.title}</h2> 
            
            </CardContent>
          </Card>
            </Grid>
          )}
        </Grid>
        </React.Fragment>
    )
}
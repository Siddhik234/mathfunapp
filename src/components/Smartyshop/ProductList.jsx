
import React, { useState,useEffect } from "react";
import axios from "axios";
import {Grid,TextField} from "@mui/material";
import { Productitem } from "./Productitem";
export const ProductList=()=>{
    const[data,setData]=useState([]);
    const[filt,setFilt]=useState([]);

    const handleSearch=(e)=>{
        const filtered=data.filter(item=>item.toUpperCase().includes(e.target.item.toUpperCase()));
        setFilt(filtered);
         console.log(filtered)
        }

    const getData= async()=>{
        const result = await axios.get("https://fakestoreapi.com/products")
        console.log(result.data);
        setData(result.data);
        setFilt(result.data);
    }

     useEffect(()=>{
        getData();
     },[])
    return(
        <React.Fragment>
            <h4 className="ha">Product List</h4>
            <Grid container spacing={3}>
            <Grid item xs={12}>
             <TextField variant="outlined" label="Search here...." onChange={handleSearch} />
              </Grid>
            {
                filt.map(item=>
                  <Grid item xs={3}>
                   <Productitem item={item} />
                  </Grid>
                    )
            }
            </Grid>
        </React.Fragment>
    )
}
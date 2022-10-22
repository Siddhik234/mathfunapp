import React from "react";
import {Card,CardContent,Typography} from "@mui/material";
import { Nextnum } from "./Nextnum";
import { Counter } from "./Numbers/Counter";


export const Numbercomp=()=>{
    return(
        <Card sx={{bgcolor:"success.main"}} >
            <CardContent>
              <Typography  variant="h4"  > Number </Typography> 
              <Counter/>
              <Nextnum/> 
            </CardContent>
        </Card>
    )
}
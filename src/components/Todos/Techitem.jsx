import {Card, CardContent } from "@mui/material";
import React from "react";

export const Techitem=({item})=>{
    return(
        <React.Fragment>
            <Card sx={{bgcolor:"aqua",color:"#ffffff"}}>
                <CardContent> {item} </CardContent>
            </Card>
        </React.Fragment>
    )
}
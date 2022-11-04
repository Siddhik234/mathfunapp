import React from "react";
import { Card,CardContent } from "@mui/material";
import { RectFenc } from "./Geo/RectFenc";

export const Geo=()=>{
    return(
        <React.Fragment>
<Card>
    <CardContent>
        <h2>Geomrty</h2>
        <RectFenc/>
    </CardContent>
</Card>
            
        </React.Fragment>
    )
}
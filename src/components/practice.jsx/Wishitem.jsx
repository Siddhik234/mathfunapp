import React from "react";
import {Button, Card,CardContent} from "@mui/material";

export const Wishitem=({item,handleDelete})=>{
    return(

        <React.Fragment>
          <Card sx={{bgcolor:"darkgray", color:"white"}}>
            <CardContent className="img">
                <p>{item} </p>
                <Button variant="contained" color="success" onClick={()=> handleDelete(item) } >Delete </Button>
            </CardContent>
          </Card>
        </React.Fragment>
    )
}
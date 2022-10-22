import React,{useState} from "react"; 
import {Grid,Card,CardContent,Button} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export const Mycicket=()=>{
    const navigate=useNavigate();
    const[data,setData]=useState([]);

    const handlegetplayer=async()=>{
        const result=await axios.get("http://localhost:3030/cricket")
        console.log(result.data)
        setData(result.data)
    }
     const handleshow=(item)=>{
        navigate("/childcric",{state:item})
     }

    return(
         <React.Fragment>
            <h1>Cricket Players </h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary" fullWidth onClick={handlegetplayer}>Cricket Players</Button>
                </Grid>
                {data.map((item)=>
                    <Grid item xs={4}>
                        <Card className="mycard" onClick={()=> handleshow (item)}>
                            <CardContent>
                                <h1>{item.name} </h1>
                                <h2>{item.country} </h2>
                                <img src={item.image} height={250} width={250} />
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
           
         </React.Fragment>
    )
}
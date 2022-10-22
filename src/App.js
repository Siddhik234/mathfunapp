import React from 'react';
import { Card,CardContent,Typography } from '@mui/material';
import { Home } from './components/Home';
import "./components/common.css";

function App() {
  return (
   <Card>
    <CardContent>
        <Typography variant='h3'  component="h2">Math Fun App </Typography>
        <Home/>
    </CardContent>
   </Card>
  );
}

export default App;

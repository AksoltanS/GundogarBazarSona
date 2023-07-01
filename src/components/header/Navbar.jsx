import React from 'react'
import {Button, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import HomePage from '../../pages/Homepage';
const Navbar = () => {
  const navigator=useNavigate()
  return (
   
       <Stack direction={"row"}
        justifyContent={"center"}
         sx={{p:3}}  /* //p:2  --20px padding diymek */
         spacing={2}>
        <Button onClick={()=>navigator(bla-bla.HomePage)}>Esasy</Button>
        <Button  onClick={()=>navigator(bla-bla.page)}>Bolumler</Button>
        <Button  onClick={()=>navigator(bla-bla.Page)}>Naharhanalar</Button>
        <Button  onClick={()=>navigator(bla-bla.Page)}>Awtoduralgalar</Button>
        
      </Stack>
    
  );
};

export default Navbar
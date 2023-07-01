import Paper from '@mui/material/Paper';


import React from 'react';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import { Button, Stack } from '@mui/material';
import gBazarLogo from  '../../public/logo.png';
import Navbar from './header/Navbar';
import { useNavigate } from 'react-router-dom';

const titleStyle={
fontFamily: 'Clash Display',
fontStyle: 'normal',

fontWeight: '400',
fontSize: '24px',
lineHeight: '30px',
color: '#22202E',
fontFamily:'sanSerif',
cursor:"pointer",

}
const Header=()=>{
  const navigator=useNavigate()
    
    return (
      
      <div style={{padding:'20px 0' }}>
      <Paper sx={{padding:'20px '}}>
        <Stack              ///display flex...yagny paper.e display flex berya
        direction={'row'}
        justifyContent={"space-between"}
        alignItems={'center'}
        >
      <Stack sx={titleStyle} onClick={()=>navigator("/")}> <img src={gBazarLogo} alt=""/></Stack>
      <Navbar/>
        <Stack style={{padding:'40px 40px' }} 
        height={'100%'}
        direction={'row'}
        justifyContent={"space-between"}
        alignItems={"center"}
        // spacing={0.1}
        borderLeft={1}

      
        >
        <LanguageOutlinedIcon />
         <Button>
        <KeyboardArrowDownOutlinedIcon/>
        </Button>
        </Stack>

        </Stack>
      </Paper>
   
      </div>
    
    )
  }
  
  export default Header;
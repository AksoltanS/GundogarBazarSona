import React from "react";

import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {Button, Stack } from "@mui/material";
import gBazarLogo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";
// import { Style } from "@mui/icons-material";

const titleStyle = {

  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "30px",
  color: "#22202E",
  fontFamily: "sanSerif",
  cursor: "pointer"

};

  
  

const FirstPart = () => {
  const navigator = useNavigate();

  return (
    // <div
    //   style={{
    //     padding: "20px 0",
       
    //   }}
    // >
    //   <Box sx={{ padding: "20px "}}> 
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        //   sx={{width:"100%"}}

          
        >
          <Stack sx={titleStyle} onClick={() => navigator("/")}>
            <img src={gBazarLogo} alt="" />
          </Stack>

          <Stack
            
          
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={0.3}
            style={{ padding: "40px 40px" }}
           
          >
            <Button onClick={()=>navigator("facebook.com")}><FacebookSharpIcon /></Button>
            <Button onClick={()=>navigator("instagram.com")}> <InstagramIcon /></Button>
            <Button onClick={()=>navigator("twitter.com")}><TwitterIcon /></Button>
            <Button onClick={()=>navigator("pinterest.com")}><PinterestIcon /></Button>
            <Button onClick={()=>navigator("youtube.com")}> <YouTubeIcon /></Button>
          </Stack>
        </Stack>
    //  </Box>
    // </div>
  )
};

export default FirstPart;


import { Box, Paper, Stack, Typography } from "@mui/material";

import React from "react";

const descrStyle = {
  fontWeight: "380px",
  fontSize: "30px",
  lineHeight: "45px",
  height: "100%",
  width: "600px",
  color: "black",
  

};
const Hero = () => {
  return (
   
    <Paper
      sx={{
        width: "100%",
        height: "100%",   
        m: "auto",
        p: "90px"
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          height: "100%",
          width: "90%",
         
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            width: "50%",
            height: "90%",
            position: "relative",
            left: "40px",
          

          }}
        >
          <Box
            sx={{
              width: "810px",
              height: "520px",
              backgroundImage: `url('public/project gol 1st.png')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              
            }}
          ></Box>
          <Box
            sx={{
              height: "520px",
              width: "810px",
              backgroundImage: `url('public/project gol 2nd.png')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            
            
           
            }}
          >
         </Box>
        </Stack>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundImage: `url('public/bgrectangle.png')`,
            position: "relative",
            right: "40px",
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            paddingleft:'40px',
            paddingInline:'40px',
            paddingTop:'40px',
            paddingBottom:'40px'
  
          
          }}
        >
          <Typography sx={descrStyle}>
            2011-nji ýylyň 17-nji fewralynda açylyp ulanylmaga berlen,
            Türkmenistanyň iň uly bazary bolan «Altyn asyr» Gündogar bazary 100
            gektar meýdany eýeleýär. Bu bazar Merkezi Aziýanyň iň iri söwda
            toplumlarynyň arasynda bäşinji orny eýeleýär. . Bu toplumda 2868
            söwda dükany we 5006 sany söwda orny bolup uzakdan gatnaýan
            söwdagärler üçin myhmanhana we köp sanly naharhanalar bar.
          </Typography>
          <Box sx={descrStyle}>
            <p>Salgymyz:Aşgabat şäheri, Atamyrat Nyýazow köçesi</p>
            <p>Telefon: 92 93 39</p>
          </Box>
        </Box>
      </Stack>
      {/* // </Stack> */}
    </Paper>
  );
};

export default Hero;

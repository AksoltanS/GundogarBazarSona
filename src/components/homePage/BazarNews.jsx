import { Box, Stack, Grid, Typography } from "@mui/material";
import React from "react";
import { componentTitle } from "../../helper/style";
import { useNavigate } from "react-router-dom";
import { sectors } from "../../news/news";

const BazarNews = () => {
    const navigator=useNavigate()
  return (
   <Box sx={{
    width:'100%'
  }}
  spacing={4}

   >
    <Typography variant={"h1"} sx={componentTitle}>
        Bazarda tazelikler
    </Typography>
    <Stack sx={{width:"90%"}}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
    
      <Grid container spacing={3}
      sx>
        {sectors.map((el, i) => {
          return (
            <Grid item lg={4} md={6} sm={6} xs={12} key={i}>
              <Stack spacing={3}>
                <Box
                  sx={{
                    height: "360px",
                    borderRadius: "10px",
                    backgroundRepeat: "no-repeat,"
                  }}
                >
                  <img src={el.img} alt="" />
                </Box>
                <Typography onClick={() => navigator("bla-bla-bla")} >{el.title}</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
    </Box>
  );
};
export default BazarNews;

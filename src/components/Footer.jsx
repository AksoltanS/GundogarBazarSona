import { Box, Stack } from "@mui/material";
import React from "react";
import FirstPart from "./footer/FirstPart";
import SecondPart from "./footer/SecondPart";
import ThirdPart from "./footer/ThirdPart";

const Footer = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundImage: `url("./public/footer.png")`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover"
        }}
      >
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          sx={{ width: "90%", height: "100%" }}
        >
          <Box
            sx={{
              color: "#FFFFFF",
              fontSize: "40px",
              fontWeight: " 600",
              width: "100%"
            }}
          >
            <FirstPart />
          </Box>

          <Box sx={{ width: "100%" }}>
            <SecondPart />
          </Box>
          <Box sx={{ width: "100%" }}>
            <ThirdPart />
          </Box>
          <Stack />
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;

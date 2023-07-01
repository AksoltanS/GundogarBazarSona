import { Stack, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const buttonStyle = {
  color: "#FFFFFF",
  fontWeight: "200",
  fontSize: "20px",
  lineHeight: "48px"
};
const SecondPart = () => {
  const navigator = useNavigate();
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      sx={{
        p: 3
      }}
      spacing={2}
    >
      <Button onClick={() => navigator("bla-bla-bla")} sx={buttonStyle}>
        Esasy
      </Button>
      <Button onClick={() => navigator("bla-bla-bla")} sx={buttonStyle}>
        Bolumler
      </Button>
      <Button onClick={() => navigator("bla-bla-bla")} sx={buttonStyle}>
        Naharhanalar
      </Button>
      <Button onClick={() => navigator("bla-bla-bla")} sx={buttonStyle}>
        Awtoduralgalar
      </Button>
    </Stack>
  );
};

export default SecondPart;

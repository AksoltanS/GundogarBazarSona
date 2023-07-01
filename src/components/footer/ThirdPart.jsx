import { Stack, Typography } from "@mui/material";
import React from "react";
const typogrStyle = {
  color: "#FFFFFF",
  fontize: "40px",
  fontWeight: "400",
  wordWrap: "break-word",
  width: "25%"
};

const ThirdPart = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography sx={typogrStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque
        perspiciatis minima, delectus quas quasi nostrum ut, voluptatum dicta
        laboriosam eveniet, saepe nesciunt laudantium possimus expedita quis
        molestiae iste dolores.
      </Typography>
      <Typography sx={typogrStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia
        earum, dolorem nihil ex adipisci autem voluptatum repellat dignissimos
        necessitatibus saepe perferendis maiores officiis recusandae natus! Sed
        iusto cumque veritatis.
      </Typography>
      <Typography sx={typogrStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
        voluptatum, eum aspernatur laboriosam quasi ipsum animi reiciendis nihil
        velit quaerat dignissimos autem perspiciatis dolores, modi earum
        assumenda. Eveniet, non dolorem?
      </Typography>
    </Stack>
  );
};

export default ThirdPart;

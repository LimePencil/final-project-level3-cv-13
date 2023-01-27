import Typography from "@mui/material/Typography";
import React from "react";

export default function MainDesc({ children }) {
  return (
    <>
      <Typography
        variant="h5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Typography>
      <br />
    </>
  );
}

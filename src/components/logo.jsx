import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  const theme = useTheme();
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
          stroke={theme.palette.primary.dark}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Typography variant="h4"> NavIcon</Typography>
    </>
  );
};

export default Logo;

// project import
import { Box } from "@mui/material";
import NavCard from "./NavCard";
import Navigation from "./Navigation/NavigationIndex";

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Navigation />
    <NavCard />
  </Box>
);

export default DrawerContent;

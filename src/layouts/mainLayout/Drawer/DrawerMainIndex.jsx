import { drawerWidth } from "@/config";
import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import { Sidebar } from "react-pro-sidebar";
import MenuItemsList from "./MenuItemsList";

// eslint-disable-next-line react/prop-types
const DrawerMainIndex = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const width = `${drawerWidth}px`;

  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      {!matchDownMD && (
        <Box
          display={"flex"}
          height={"100%"}
          maxHeight={"100vh"}
          sx={{ overflowY: "auto" }}
          width={open ? "40px" : drawerWidth}
          className="scroll"
        >
          <Sidebar
            className="scroll"
            collapsed={open}
            breakPoint="md"
            style={{
              position: "fixed",
              left: "0",
              top: "0",
              height: "100%",
              width: { width },
              margin: 0,
              padding: 0,
              background: theme.palette.background.paper,
              zIndex: 8,
            }}
          >
            <MenuItemsList />
          </Sidebar>
        </Box>
      )}
      {matchDownMD && (
        <Sidebar
          className="scroll"
          toggled={open}
          breakPoint="all"
          onBackdropClick={handleDrawerToggle}
          style={{ background: theme.palette.background.paper, zIndex: 8 }}
        >
          <MenuItemsList open={open} />
        </Sidebar>
      )}
    </>
  );
};

export default DrawerMainIndex;

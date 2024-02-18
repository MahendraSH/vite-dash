import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// material-ui
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { openDrawer } from "@/app/features/menuSlice";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header/MainHeaderIndex";
import DrawerMainIndex from "./Drawer/DrawerMainIndex";

const MainLayout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down("lg"));
  const dispatch = useDispatch();

  const { drawerOpen } = useSelector((state) => state.menu);

  // drawer toggler
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  // set media wise responsive drawer
  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  return (
    <div>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Header open={open} handleDrawerToggle={handleDrawerToggle} />
        <DrawerMainIndex open={!open} handleDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ width: "100%", flexGrow: 1, p: { xs: 2, sm: 3 }, ml: matchDownLG ? 0 : 5 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default MainLayout;

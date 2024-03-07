import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

// material-ui
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { openComponentDrawer, openDrawer } from "@/app/features/menuSlice";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header/MainHeaderIndex";
import DrawerMainIndex from "./Drawer/DrawerMainIndex";
import { useGetProfileDetailsQuery } from "@/app/features/userApiSlice";

const MainLayout = () => {
  const { isLoading, isError, isSuccess } = useGetProfileDetailsQuery();

  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down("lg"));
  const dispatch = useDispatch();

  const { drawerOpen } = useSelector((state) => state.menu);

  const { componentDrawerOpen } = useSelector((state) => state.menu);

  // drawer toggler
  const [open, setOpen] = useState(drawerOpen);
  const [fullOpen, setFullOpen] = useState(componentDrawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));

    setFullOpen(!fullOpen);
    dispatch(openComponentDrawer({ componentDrawerOpen: !fullOpen }));
  };

  const handleDrawerOnly = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  // set media wise responsive drawer
  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);
  if (isLoading) {
    return <></>;
  }
  if (isError) {
    return <Navigate to="/login" />;
  }
  if (isSuccess) {
    return (
      <div>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Header open={fullOpen} handleDrawerToggle={handleDrawerToggle} />
          <DrawerMainIndex
            open={open}
            handleDrawerToggle={handleDrawerToggle}
            fullOpen={fullOpen}
            handleDrawerOnly={handleDrawerOnly}
          />
          <Box component="main" sx={{ width: "100%", flexGrow: 1, p: { xs: 2, sm: 3 }, ml: matchDownLG ? 0 : 5 }}>
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      </div>
    );
  }
};

export default MainLayout;

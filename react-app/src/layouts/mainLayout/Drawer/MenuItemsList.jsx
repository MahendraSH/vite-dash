import Logo from "@/components/logo";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import * as icons from "@ant-design/icons";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useTheme } from "@emotion/react";
import { useGetMenuItemsQuery } from "@/app/features/userApiSlice";
import { createElement } from "react";

const MenuItemsList = () => {
  const theme = useTheme();

  const location = useLocation();
  const { data, isError, isSuccess, error } = useGetMenuItemsQuery();
  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  if (isSuccess) {
    const menuItems = data;

    const isActive = (item) => {
      if (item.type === "item") {
        return location.pathname.includes(item.url);
      } else {
        return item.children.some((it) => location.pathname.includes(it.url));
      }
    };
    return (
      <Menu>
        <Box sx={{ py: 1 }}>
          <MenuItem icon={<Logo />}>
            <Typography variant="h4"> NavIcon</Typography>
          </MenuItem>
        </Box>
        {menuItems.map((menuItem) => {
          if (menuItem.type === "item") {
            return (
              <MenuItem
                key={menuItem.id}
                icon={createElement(icons[menuItem.icon])}
                component={<Link to={menuItem.url} />}
                style={{
                  border: 0,
                  background: menuItem.isActive && theme.palette.primary.lighter,
                  borderRightWidth: menuItem.isActive && "0.24rem",
                  borderRightColor: menuItem.isActive && theme.palette.primary.dark,
                  borderStyle: menuItem.isActive && "solid",

                  color: isActive(menuItem) ? theme.palette.primary.darker : theme.palette.grey[900],
                }}
              >
                {menuItem.title}
              </MenuItem>
            );
          } else if (menuItem.type === "submenu") {
            return (
              <SubMenu
                key={menuItem.id}
                label={menuItem.title}
                icon={createElement(icons[menuItem.icon])}
                style={{
                  border: 0,
                  background: isActive(menuItem) && theme.palette.primary.lighter,
                  borderRightWidth: isActive(menuItem) && "0.24rem",
                  borderRightColor: isActive(menuItem) && theme.palette.primary.dark,
                  borderStyle: isActive(menuItem) && "solid",

                  color: isActive(menuItem) ? theme.palette.primary.darker : theme.palette.grey[900],
                }}
              >
                {menuItem.children.map((subMenuItem) => (
                  <MenuItem
                    key={subMenuItem.id}
                    icon={subMenuItem.icon ? <subMenuItem.icon /> : null}
                    component={<Link to={subMenuItem.url} />}
                    style={{
                      background: subMenuItem.isActive && theme.palette.primary.lighter,

                      color: isActive(subMenuItem) ? theme.palette.primary.darker : theme.palette.grey[900],
                    }}
                  >
                    {subMenuItem.title}
                  </MenuItem>
                ))}
              </SubMenu>
            );
          } else {
            return null;
          }
        })}
      </Menu>
    );
  }
};

export default MenuItemsList;

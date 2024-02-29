import Logo from "@/components/logo";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import * as icons from "@ant-design/icons";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useTheme } from "@emotion/react";

const MenuItemsList = () => {
  const theme = useTheme();

  const location = useLocation();
  const menuItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      icon: icons.DashboardOutlined,
      url: "/dash",
      target: true,
      isActive: location.pathname.includes("/dash"),
    },
    {
      id: "form",
      title: "Forms",
      type: "submenu",
      icon: icons.FormOutlined,
      children: [
        {
          id: "employ-form",
          title: "Employ Details Form",
          type: "item",
          url: "/form-employ",
          isActive: location.pathname.includes("/form-employ"),
        },
        {
          id: "student-form",
          title: "Student Details Form",
          type: "item",
          url: "/form-student",
          isActive: location.pathname.includes("/form-student"),
        },
        {
          id: "event-register",
          title: "Event Register Details Form",
          type: "item",
          url: "/event-register",
          isActive: location.pathname.includes("/event-register"),
        },
      ],
    },
    {
      id: "tables",
      title: "Tables",
      type: "submenu",
      icon: icons.TableOutlined,
      children: [
        {
          id: "employ-table",
          title: "Employ Details Table",
          type: "item",
          url: "/table-employ",
          isActive: location.pathname.includes("/table-employ"),
        },
        {
          id: "student-table",
          title: "Student Details Table",
          type: "item",
          url: "/table-student",
          isActive: location.pathname.includes("/table-student"),
        },
        {
          id: "table-event-register",
          title: "Event Register Details Table",
          type: "item",
          url: "/table-register",
          isActive: location.pathname.includes("/table-register"),
        },
      ],
    },
    {
      id: "sample-page",
      title: "Sample Page",
      type: "item",
      icon: icons.AppstoreAddOutlined,
      url: "/sample-page",
      isActive: location.pathname.includes("/sample-page"),
    },
    {
      id: "charts",
      title: "Charts",
      type: "submenu",
      icon: icons.BarChartOutlined,
      children: [
        { id: "pie-charts", title: "Pie Charts", type: "item", url: "/pie-charts", isActive: location.pathname.includes("/pie-charts") },
        {
          id: "line-charts",
          title: "Line Charts",
          type: "item",
          url: "/line-charts",
          isActive: location.pathname.includes("/line-charts"),
        },
        { id: "bar-charts", title: "Bar Charts", type: "item", url: "/bar-charts", isActive: location.pathname.includes("/bar-charts") },
      ],
    },
    {
      id: "authentication",
      title: "Authentication",
      type: "submenu",
      icon: icons.LoginOutlined,
      children: [
        { id: "login", title: "Login", type: "item", url: "/login", isActive: location.pathname.includes("/login") },
        { id: "register", title: "Register", type: "item", url: "/register", isActive: location.pathname.includes("/register") },
      ],
    },
    {
      id: "utilities",
      title: "Utilities",
      type: "submenu",
      icon: icons.AntDesignOutlined,
      children: [
        { id: "typography", title: "Typography", type: "item", url: "/typography", isActive: location.pathname.includes("/typography") },
        { id: "color", title: "Color", type: "item", url: "/color", isActive: location.pathname.includes("/color") },
        { id: "shadow", title: "Shadow", type: "item", url: "/shadow", isActive: location.pathname.includes("/shadow") },
        {
          id: "ant-icons",
          title: "Ant Icons",
          type: "item",
          url: "/icons/ant",
          breadcrumbs: false,
          isActive: location.pathname.includes("/icons/ant"),
        },
      ],
    },
    // Add more menu items here
    {
      id: "settings",
      title: "Settings",
      type: "item",
      icon: icons.BgColorsOutlined,
      url: "/settings",
      isActive: location.pathname.includes("/settings"),
    },
    {
      id: "profile",
      title: "Profile",
      type: "item",
      icon: icons.ProfileOutlined,
      url: "/profile",
      isActive: location.pathname.includes("/profile"),
    },
    {
      id: "help",
      title: "Help",
      type: "item",
      icon: icons.QuestionOutlined,
      url: "/help",
      isActive: location.pathname.includes("/help"),
    },
    {
      id: "about",
      title: "About",
      type: "item",
      icon: icons.AppstoreAddOutlined,
      url: "/about",
      isActive: location.pathname.includes("/about"),
    },
  ];
  const isAnyChildActive = (children) => {
    return children.some((child) => child.isActive);
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
              icon={<menuItem.icon />}
              component={<Link to={menuItem.url} />}
              style={{
                border: 0,
                background: menuItem.isActive && theme.palette.primary.lighter,
                borderRightWidth: menuItem.isActive && "0.24rem",
                borderRightColor: menuItem.isActive && theme.palette.primary.dark,
                borderStyle: menuItem.isActive && "solid",

                color: menuItem.isActive ? theme.palette.primary.darker : theme.palette.grey[900],
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
              icon={<menuItem.icon />}
              style={{
                border: 0,
                background: isAnyChildActive(menuItem.children) && theme.palette.primary.lighter,
                borderRightWidth: isAnyChildActive(menuItem.children) && "0.24rem",
                borderRightColor: isAnyChildActive(menuItem.children) && theme.palette.primary.dark,
                borderStyle: isAnyChildActive(menuItem.children) && "solid",

                color: menuItem.isActive ? theme.palette.primary.darker : theme.palette.grey[900],
              }}
            >
              {menuItem.children.map((subMenuItem) => (
                <MenuItem
                  key={subMenuItem.id}
                  icon={subMenuItem.icon ? <subMenuItem.icon /> : null}
                  component={<Link to={subMenuItem.url} />}
                  style={{
                    background: subMenuItem.isActive && theme.palette.primary.lighter,

                    color: subMenuItem.isActive ? theme.palette.primary.darker : theme.palette.grey[900],
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
};

export default MenuItemsList;

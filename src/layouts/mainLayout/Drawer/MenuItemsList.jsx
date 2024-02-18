import Logo from "@/components/logo";
import { Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  LoginOutlined,
  ProfileOutlined,
  ChromeOutlined,
  QuestionOutlined,
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  BarChartOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Menu, MenuItem, SubMenu, menuClasses } from "react-pro-sidebar";
import { useTheme } from "@emotion/react";

const icons = {
  DashboardOutlined,
  BarChartOutlined,
  LoginOutlined,
  ProfileOutlined,
  ChromeOutlined,
  QuestionOutlined,
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
};

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
      id: "calendar",
      title: "Calendar",
      type: "item",
      icon: icons.ChromeOutlined,
      url: "/calendar",
      isActive: location.pathname.includes("/calendar"),
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
        { id: "pie-charts", title: "Pie Charts", type: "item", url: "/pie-charts" },
        { id: "line-charts", title: "Line Charts", type: "item", url: "/line-charts" },
        { id: "bar-charts", title: "Bar Charts", type: "item", url: "/bar-charts" },
      ],
    },
    {
      id: "authentication",
      title: "Authentication",
      type: "submenu",
      icon: icons.LoginOutlined,
      children: [
        { id: "login", title: "Login", type: "item", url: "/login" },
        { id: "register", title: "Register", type: "item", url: "/register" },
      ],
    },
    {
      id: "utilities",
      title: "Utilities",
      type: "submenu",
      icon: icons.AntDesignOutlined,
      children: [
        { id: "typography", title: "Typography", type: "item", url: "/typography" },
        { id: "color", title: "Color", type: "item", url: "/color" },
        { id: "shadow", title: "Shadow", type: "item", url: "/shadow" },
        { id: "ant-icons", title: "Ant Icons", type: "item", url: "/icons/ant", breadcrumbs: false },
      ],
    },
  ];

  return (
    <Menu
      rootStyles={{
        [`.${menuClasses.icon}`]: {
          backgroundColor: "#e1e1e1",
          color: "#344cff",
        },
      }}
    >
      <MenuItem icon={<Logo />}>
        <Typography variant="h4"> NavIcon</Typography>
      </MenuItem>
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
              }}
            >
              {menuItem.title}
            </MenuItem>
          );
        } else if (menuItem.type === "submenu") {
          return (
            <SubMenu key={menuItem.id} label={menuItem.title} icon={<menuItem.icon />}>
              {menuItem.children.map((subMenuItem) => (
                <MenuItem
                  key={subMenuItem.id}
                  icon={subMenuItem.icon ? <subMenuItem.icon /> : null}
                  component={<Link to={subMenuItem.url} />}
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

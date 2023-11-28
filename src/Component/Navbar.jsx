import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import RightDrawer from "./RightDrawer";
import { useStoreContext } from "../Context/StoreContext";

const Navbar = () => {
  const { cardItems } = useStoreContext();
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Store",
      path: "/store",
    },
    {
      name: "Aboutt",
      path: "/about",
    },
  ];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink
                    className={"nav_link"}
                    to={`${page.path}`}
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    style={{
                      margin: "10px 10px ",
                      fontSize: "18px",
                      color: "black",
                      display: "block",
                      textDecoration: "none",
                      textAlign: "center",
                    }}
                  >
                    {page.name}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <AdbIcon />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                className={"nav_link"}
                to={`${page.path}`}
                key={page.name}
                onClick={handleCloseNavMenu}
                style={{
                  margin: "10px 10px ",
                  fontSize: "18px",
                  color: "black",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {page.name}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              aria-label="cart"
              onClick={() => {
                setOpenDrawer(true);
              }}
            >
              <Badge badgeContent={Number(cardItems?.length)} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
        <RightDrawer state={openDrawer} setOpenDrawer={setOpenDrawer} />
      </Container>
    </AppBar>
  );
};

export default Navbar;

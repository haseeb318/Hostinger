import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Top Bar with Limited-Time Offer */}
      <Box sx={{ backgroundColor: "#5025d1", textAlign: "center", p: 1 }}>
        <Typography variant="body2" color="white">
          LIMITED-TIME BLESSED FRIDAY DISCOUNT:
          <Link
            href="#"
            underline="hover"
            color="inherit"
            sx={{ px: 1, textDecoration: "underline" }}
          >
            GET THE DEAL
          </Link>
        </Typography>
      </Box>

      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 3 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Link href="#" sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://via.placeholder.com/40"
                alt="Logo"
                style={{ width: 40, height: 40 }}
              />
            </Link>

            {/* Desktop Navbar Links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3,
              }}
            >
              {["WordPress", "Website builder", "Hosting", "Pro", "Domains"].map((text) => (
                <Link
                  key={text}
                  href="#"
                  variant="body1"
                  underline="none"
                  color="#1D1EE20"
                  sx={{
                    p: 1,
                    "&:hover": { color: "gray" },
                  }}
                >
                  {text}
                </Link>
              ))}

              <Button
                href="#"
                variant="outlined"
                sx={{
                  color: "#1D1EE20",
                  borderColor: "gray",
                  textTransform: "none",
                  "&:hover": {
                    color: "gray",
                    borderColor: "gray",
                  },
                }}
              >
                Log in
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              edge="end"
              color="black"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Menu Dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {["WordPress", "Website builder", "Hosting", "Pro", "Domains"].map((text) => (
                <MenuItem key={text} onClick={handleMenuClose}>
                  <Link
                    href="#"
                    variant="body1"
                    underline="none"
                    color="inherit"
                    sx={{ width: "100%", textAlign: "center" }}
                  >
                    {text}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem onClick={handleMenuClose}>
                <Button
                  href="#"
                  variant="outlined"
                  sx={{
                    color: "#1D1EE20",
                    borderColor: "gray",
                    textTransform: "none",
                    width: "100%",
                    "&:hover": {
                      color: "gray",
                      borderColor: "gray",
                    },
                  }}
                >
                  Log in
                </Button>
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

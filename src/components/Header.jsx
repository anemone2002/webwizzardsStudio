import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import './Header.css'
import DrawerComp from "./Drawer";
import logoimg from '../assets/images/logo.png';
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
 

  return (
    
    <React.Fragment>
      <AppBar className sx={{ background: "#0f0f0f" }}>
        <Toolbar>
          <img src={logoimg} alt=""  width={100}/>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                WebWizzard
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Projects" />
                <Tab label="Services" />
                <Tab label="Reveiws" />
                <Tab label="Contact" />
              </Tabs>
              
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
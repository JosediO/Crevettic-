import "./Header.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

import Logo from "./img/logo2.2.png";

export default function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="AppBar" position="static" color="header">
          <Toolbar>
            <div>
              <img className="Logo" src={Logo} alt="Crevettic-Logo" />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloudIcon from "@mui/icons-material/Cloud";

const Header = () => {
  return <ButtonAppBar />;
};

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "16px" }}>
      <AppBar position="static">
        <Toolbar className="header-container-layout">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Simpsons Memory Game!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

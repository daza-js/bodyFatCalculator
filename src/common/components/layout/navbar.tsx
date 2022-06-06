import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { memo } from "react";
import { IconsLibrary, Images } from "../../../constants";

const Navbar: React.FC = () => {
  return (
    <AppBar position="absolute" color="primary" enableColorOnDark>
      <Toolbar>
        {/* <Avatar src={Images.logo} alt="Logo React" /> */}
        <img src={Images.logo} alt="Logo React" width={30} height={30} />
        <Typography variant="h6" component="h6" sx={{ flexGrow: 1, ml: 2 }}>
          Health Overwiew
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <IconsLibrary name="MenuIcon" size={16} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);

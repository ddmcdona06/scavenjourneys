import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {  AppBar, Box, Toolbar, Typography, Menu, MenuItem, IconButton } from '@mui/material';

//we can use forms to anchor signed-in users to NavBar features (Profile Pic, username, etc..)
import { FormControlLabel, FormGroup } from '@mui/material';

//withheld from external types folder to exemplify interface/ assignments being passed to functional component
//we have to assign types/interface to ensure proper typescript syntax
//interface to allocate types to MenuItems (path and label: string)
interface MenuItem {
  path: string;
  label: string;
}
//interface to set interface for NavBarProps: array of pages to link to (Profile:{path: '/', label: 'profile'} etc.)
interface NavBarProps {
  //menu items hold the value of MenuItem interface within an array to map over
  //path and label props being passed to MenuItem array elements
  menuItems: MenuItem[];
}

//NavBar accepts NavBar props with with menu items array, each value assigned a path and label
const NavBar = ( {menuItems}: NavBarProps ) => {

  //authenticate user
  const [auth, setAuth] = React.useState<boolean | null>(true);
  //set anchor to display or close menu in navBar
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  //handler for setting auth
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  //handler to menu in navBar
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //handler to close menu after selecting link to other page
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logUserOut = () => {
    axios.post('/auth/logout')
    .then((data) => {
      if(data.data === 'loggedOut') {
        return null
      }
    })
    .catch((err) => {console.error('failed to logout', err)})
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Routes
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleMenu}
            style={{ cursor: "pointer" }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon
           />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome To ScavenJourney !
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
            {menuItems.map((item) => (
                  <MenuItem key={item.path} component={Link} to={item.path} onClick={handleClose}>
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

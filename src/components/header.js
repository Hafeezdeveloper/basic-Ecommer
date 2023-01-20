import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Searchbar from '../components/Searchbar'

const pages = ['Products', 'Card' ];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:"#f1c40f"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}


          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },color:'black' }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <Typography
          className='abc1'
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              // backgroundColor:'red',
              width:'120px',
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              color:'black'
            }}
          >
            Noon
          </Typography>

              <Box  sx={{display:'flex', width:'100%',justifyContent:'space-between'}}>

              

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{

              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              color:'black'
            }}
          >
            Noon
          </Typography>




          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          

          {/* <Box sx={{display:'flex',justifyContent:'flex-sy'}}> */}


          <Box sx={{flexGrow: 1,width:'90%'}}>
                <Searchbar/>
              </Box>

          {/* <Box sx={{  flexGrow: 1, display: { xs: 'none', md: 'flex' }  }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                // variant='h4'
                sx={{ my: 2, color: 'white', display: 'block',color:'black',fontWeight:'bold' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <Box sx={{display:{xs:'none',md:'flex',lg:'flex'}}}>
          {pages.map((page) => (
              <Button 
             sx={{ color:'black',fontWeight:'bold'}}
                key={page}
                onClick={handleCloseNavMenu}
                // sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            {/* <Typography variant='button'>Card</Typography>
            <Typography variant='button'  >Sign In</Typography> */}
            </Box>
          </Box>  

          

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
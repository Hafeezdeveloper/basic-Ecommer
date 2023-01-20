// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import Typography  from '@mui/material/Typography'
// // import ButtonGroup from '@mui/material/ButtonGroup';

// // export default function BasicButtonGroup() {
    // let abc = [
    //     {name:"All Category"},
    //     {name:'Electronic'},
    //     {name:'Men'},
    //     {name:'Women'},
    //     {name:"fan"},
    //     {name:"cars"}
    
// // ]
// //   return (
// //       <div>
// //     {/* // <ButtonGroup variant="contained"  aria-label="outlined  button group"> */}
// //       {/* <Button sx={{backgroundColor:'white',color:'blue'}}>All Catageroy</Button> */}
// //       <Typography>
// //     {abc.map( (data,i) => {
// //         return <Button key={i}>{data.name}</Button>
// //     })}
// // </Typography>
// //     {/* </ButtonGroup> */}
// //     </div>
// //   );
// // }

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             MUI
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
        
//       </Box>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 25,
    backgroundColor:'white',
    color:'black',
    className:'abcd2'
  },
}));

export default function ProminentAppBar() {
    let abc = [
        {name:"Wood"},
        {name:'Electronic'},
        {name:'Men'},
        {name:'Women'},
        {name:"fan"},
        {name:"cars"},
    ]
  return (
    <Box sx={{ flexGrow: 0  }}>
      <AppBar position="static">
        <StyledToolbar  >
        
          {/* <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          > */}

              {abc.map( (data,i) => {
        return <Typography  variant='buttton'   sx={{margin:'0px',padding:'0px' ,display:'flex',flexGrow: 1 ,fontWeight:'bold'  }} key={i}>{data.name}</Typography>
    })}
          {/* </Typography> */}
          
         
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

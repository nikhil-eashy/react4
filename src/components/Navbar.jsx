import { Typography, AppBar, Toolbar, Button } from '@mui/material'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left">
          <Link to='/' style={{color:'white', textDecoration:'none'}}>Wanderlust </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar
import React from 'react'
import {AppBar, Button, Toolbar, Typography} from '@mui/material'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
function Navbar() {
  return (
    <AppBar position='absolute'>
<Toolbar>
    <Typography variant='h3' color="inherit" sx={{flexGrow:1}}>
        Chochlate Shop
    </Typography>
    <Button variant='contained' color='success'startIcon={<LoginRoundedIcon/>}>Login</Button>
    <Button variant='contained' color='success'endIcon={<LogoutRoundedIcon/>}>Logout</Button>
</Toolbar>
    </AppBar>
  )
}
export default Navbar
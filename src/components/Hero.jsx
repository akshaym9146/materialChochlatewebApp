import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Choch from '../images/choc.jpg'
 function Hero() {
  return (
    <Grid container alignItems='center'>
        <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
<Typography variant='h4'>
    The Mothers Choice
</Typography>
<Typography variant='h5'>
    we offer you the fresh at it best chochlates

</Typography>
<Button variant='contained' color='success' sx={{borderRadius:5}}>call us</Button>
        </Grid>
        <Grid  container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
<Box component="img" height={380}src={Choch}/>
</Grid>
    </Grid>
    
  )
}
export default Hero
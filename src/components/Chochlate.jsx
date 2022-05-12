import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import silk from '../images/silk.jpg'
import oreo from '../images/oreo.jpg'
import peanut from '../images/peanut.jpg'
import pine from '../images/pine.jpg'
import cris from '../images/cris.jpg'
import boost from '../images/boost.jpg'
import bubbly from '../images/bubbly.jpg'
import shot from '../images/shot.jpg'
const arr=[
    {name:'silk',image:silk},
    {name:'oreo',image:oreo},
    {name:'cris',image:cris},
    {name:'boost',image:boost},
    {name:'bubbly',image:bubbly},
    {name:'pine',image:pine},
    {name:'peanut',image:peanut},
    {name:'shot',image:shot}
    

]
function Chochlate() {
  return (<>
    <Typography variant='h4' sx={{color:'#864131'}} mt={6} mb={6}><i>Chochlate hub</i></Typography>
    <Stack direction="row" justifyContent='space-evenly' sx={{flexWrap:'wrap'}}>
        {
            arr.map(item=>{
                return(
<Card sx={{maxWidth:"350px",mb:2}}>
    <CardMedia
    component="img"
    src={item.image}
    height="200"
    />
    <CardContent>
    <Typography variant='h5'>{item.name}-</Typography>
    </CardContent>
</Card>
                )
            })
        }


    </Stack>
    </>
  )
}
export default  Chochlate
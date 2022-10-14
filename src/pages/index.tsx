import { Box, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(()=>{
    document.title='desarrolladores'
  })
  return (
    <Grid container component="main">
      <Box sx={{ m: '12rem auto', color: '#C87708' }}>
        <Typography variant="h4" gutterBottom>
          Desarrolladores
        </Typography>
      </Box>
    </Grid>
  )
}

export default Home
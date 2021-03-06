import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box component='footer' sx={{ width: '100%', mt: '10vh', mb: '5vh' }}>
      <Typography
        variant='body1'
        sx={{ margin: 'auto', width: 'min-content', whiteSpace: 'noWrap', textAlign: 'center' }}
      >
        Patrick V. 2022 <br />
      </Typography>
      <Typography color='warning.dark'
        sx={{ position: 'fixed', bottom: '2rem', right: '1rem', zIndex: '10' }}
      >
        In development
      </Typography>

    </Box>
  )
}

export default Footer

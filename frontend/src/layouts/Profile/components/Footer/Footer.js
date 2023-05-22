import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const Footer = () => (
  <Grid container spacing={2}>
    
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        fontFamily={'Akira'}
        style={{letterSpacing:'2px'}}
      >
      KENEK
      </Typography>
      
    </Grid>
  </Grid>
);

export default Footer;

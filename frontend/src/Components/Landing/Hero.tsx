import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CreditCardsIllustration from '../../svg/illustrations/CreditCards';
import Link from '@mui/material/Link';
const Hero = () =>
{
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4} paddingTop={'5%'} >
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
          >
            UP YOUR NETWORKING GAME
          </Typography>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              Get  {' '}           
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                fontFamily={'Akira'}
                style={{ letterSpacing: '10px' }}
              >
                KENEK
              </Typography>
              {' '}
              Stay Connected
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="textSecondary">
              We build software and hardware for smart digital name cards.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
           <Link underline="none" component="a" href="/features" color="textPrimary">
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ borderRadius: '50px' }}
                fullWidth={isMd ? false : true}

              >
                BUY KARD NOW
              </Button>
            </Link>
            <Link underline="none" component="a" href="/profile" color="textPrimary">
            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              style={{ borderRadius: '50px' }}
              fullWidth={isMd ? false : true}
            >
              View Demo
            </Box>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={'100%'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={'100%'} width={'100%'} maxHeight={500}>
            <CreditCardsIllustration width={'100%'} height={'100%'} />
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
};

export default Hero;

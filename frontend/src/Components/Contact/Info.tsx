/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Slider from 'react-slick';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';
const GridItemReviewBlock = () => {
  const theme = useTheme();

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box maxWidth={'100%'}>
      <Slider {...sliderOpts}>
        {[
          {
            feedback:
              'The cards fantastic! Simple, re-usable and eco-friendly.',
            image: 'bamboo.jpg',
            name: '',
            title: 'Smart-card Lover',
          },
          {
            feedback:
              'Great quality cards!',
            image: 'metal.jpg',
            name: '',
            title: 'Banker',
          },
          {
            feedback:
              'Love the app - easy to use!',
            image: 'gold.jpg',
            name: '',
            title: 'Sustainability Expert',
          },
        ].map((item, i) => (
          <Box padding={{ xs: 1, sm: 2, lg: 3 }} key={i}>
            <Box
              component={Card}
              boxShadow={{ xs: 1, sm: 3 }}
              borderRadius={5}
              padding={{ xs: 1, sm: 2, md: 3 }}
            >
              <CardContent>
                <Box marginBottom={1}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Box
                      key={item}
                      color={theme.palette.secondary.main}
                      display={'inline'}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={24}
                        height={24}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </Box>
                  ))}
                </Box>
                
                <Box
                  component={Typography}
                  variant={'h6'}
                  fontWeight={400}
                  marginBottom={2}
                >
                  {item.feedback}
                </Box>
                <CardMedia
                    image={item.image}
                    style={{ margin:'10px',justifyContent:'center',alignItems:'center' }}
                    title={'image'}
                    sx={{
                      
                        height: '250px',
                        width: '360px'
                    }}
                />
                <Box width={1}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                  >
                 
                    <Box
                      component={ListItemText}
                      primary={item.name}
                      secondary={item.title}
                      margin={0}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
const Info = ({ themeMode = 'light' }) => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
        >
          Engage with us
        </Typography>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
            }}
          >
           Order KENEK 
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'textSecondary'}>
            We'd love to talk to you.
          </Typography>
        </Box>
      </Box>
      <Box marginY={4}>
       
      </Box>
      <Grid container spacing={2}>

          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemReviewBlock />
          </Box>
       
      </Grid>
    </Box>
  );
};

Info.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Info;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
const pricing = [
  {
    title: 'Bamboo',
    image:'bamboo.jpg',
    price: {
      monthly: 19.99,
    },
    features: [
      {
        title: 'Bamboo',
        isIncluded: true,
      },

    ],
    isHighlighted: false,
    btnText: 'ORDER NOW',
  },
  {
    title: 'Metal',
    image:'metal.jpg',
    price: {
      monthly: 88,
    },
    features: [
      {
        title: 'Black Gold',
        isIncluded: true,
      },
      {
        title: 'Gold Silver',
        isIncluded: true,
      },
    ],
    isHighlighted: true,
    btnText: 'ORDER NOW',
  },
  {
    title: 'Gold',
    image:'gold.jpg',
    price: {
      monthly: 888,
    },
    features: [
      {
        title: '24k Gold Silver',
        isIncluded: true,
      },

    ],
    isHighlighted: false,
    btnText: 'ORDER NOW',
  },
];

const PricingCards = () =>
{

  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Pick the best kard
          <br />
          for your business needs
        </Box>
      </Box>
      <Box>

        <Grid container spacing={4}>
          {pricing.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                component={Card}
                height={'100%'}
                display={'flex'}
                flexDirection={'column'}
                boxShadow={item.isHighlighted ? 4 : 4}
                borderRadius={4}
              >
                 <Grid borderRadius={'40px'} item xs={12} marginTop ={'25px'} justifyContent={'center'} alignItems={'center' }>
            <CardMedia
                    image={item.image}
                    style={{ margin:'10px',justifyContent:'center',alignItems:'center' }}
                    title={'image'}
                    sx={{
                      
                        height: '250px',
                        width: '360px'
                    }}
                />
            </Grid>
                <Box component={CardContent} padding={4}>
                  <Box
                    marginBottom={4}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Box
                      marginBottom={1}
                      display={'flex'}
                      width={'100%'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Typography variant={'h6'}>
                        <Box component={'span'} fontWeight={600}>
                          {item.title}
                        </Box>
                      </Typography>
                      <Box display={'flex'} alignItems={'flex-start'}>
                        <Typography variant={'h4'} color={'primary'}>
                          <Box
                            component={'span'}
                            fontWeight={600}
                            marginRight={1 / 2}
                          >
                            $
                          </Box>
                        </Typography>
                        <Typography variant={'h3'} color={'primary'}>
                          <Box component={'span'} fontWeight={600}>

                            {item.price.monthly}
                          </Box>
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant={'subtitle2'} color={'textSecondary'}>
                      KENEK Kard
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    {item.features.map((feature, j) => (
                      <Grid item xs={12} key={j}>
                        <Typography
                          component={'p'}
                          align={'center'}
                          style={{
                            textDecoration: !feature.isIncluded
                              ? 'line-through'
                              : 'none',
                          }}
                        >
                          {feature.title}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box flexGrow={1} />
                <Box
                  component={CardActions}
                  justifyContent={'center'}
                  padding={4}
                >
                  <Link underline="none" component="a" href="/contact" color="textPrimary">
                    <Button
                      size={'large'}
                      variant={item.isHighlighted ? 'contained' : 'outlined'}
                    >
                      {item.btnText}
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PricingCards;

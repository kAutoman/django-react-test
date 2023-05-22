import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../common/Container';

import Faq from '../Components/Features/Faq';
import PricingCards from '../Components/Features/PricingCards';


const Pricing = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.background.default} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <PricingCards />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
     
      <Container>
        <Faq />
      </Container>
    </Box>
  );
};

export default Pricing;

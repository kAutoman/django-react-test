
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Container from '../common/Container';
import Box from '@mui/material/Box';

import Hero from '../Components/Landing/Hero';
import Partners from '../Components/Landing/Partners';
import Services from '../Components/Landing/Services';
import WhyUs from '../Components/Landing/WhyUs';
import Reviews from '../Components/Landing/Reviews';

const Landing = ({ themeMode = 'light' }) =>
{
  const theme = useTheme();

  return (
    <Box >
      <Box bgcolor={theme.palette.background.default} position={'relative'}>
        <Container   position="relative" zIndex={2} >
          <Hero />
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
            height: '50%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
      <Container>
        <Partners />
      </Container>
      <Box bgcolor={theme.palette.background.default} position={'relative'}>
        <Container paddingX={'0 !important'} maxWidth={'100%'}>
          <Services themeMode={themeMode} />
        </Container>
      </Box>
      <Container paddingBottom={'0 !important'}>
        <WhyUs />
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1921 273"
        sx={{
          marginBottom: theme.spacing(-1),
        }}
      >
        <polygon
          fill={theme.palette.secondary.main}
          points="0,273 1921,273 1921,0 "
        />
      </Box>

      <Box bgcolor={theme.palette.background.default} position={'relative'} >
        <Container position="relative" zIndex={2}>
          <Reviews />
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
    </Box>
  );
};

Landing.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Landing;

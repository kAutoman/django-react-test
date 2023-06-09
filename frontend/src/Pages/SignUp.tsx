import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '../common/Container';
import Sidebar from '../Components/SignUp/components/Sidebar';
import Form from '../Components/SignUp/components/Form';

const SignUp = ({ themeMode = 'light' }) => {
  return (
    <Box position={'relative'} minHeight={'100vh'} display={'flex'}>
      <Box
        sx={{ display: { xs: 'none', md: 'block' } }}
        flex={'1 1 30%'}
        maxWidth={'30%'}
        bgcolor={'alternate.main'}
      >
        <Box display={'flex'} alignItems={'center'} height={'100%'}>
          <Container>
            <Sidebar themeMode={themeMode} />
          </Container>
        </Box>
      </Box>
      <Box
        flex={{ xs: '1 1 100%', md: '1 1 70%' }}
        maxWidth={{ xs: '100%', md: '70%' }}
      >
        <Box display={'flex'} alignItems={'center'} height={'100%'}>
          <Container maxWidth={800}>
            <Form />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

SignUp.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default SignUp;

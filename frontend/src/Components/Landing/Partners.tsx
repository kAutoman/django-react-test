import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Partners = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Trusted by companies like
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
        {[
          'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
          'sgnft.png',
          'aba.png',

        ].map((item, i) => (
          <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
            <Box
              component="img"
              height={'100%'}
              width={'100%'}
              src={item}
              alt="..."
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partners;

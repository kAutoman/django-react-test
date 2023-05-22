import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const features = [
  {
    title: 'Bamboo material',
    id: 1,
  },
  {
    title: 'Black - Gold',
    id: 2,
  },
  {
    title: 'Black - Silver',
    id: 3,
  },
  {
    title: 'Gold Silver',
    id: 4,
  },
  {
    title: '24K Gold Silver',
    id: 5,
  },
  
];

const pricing = [
  {
    title: 'Basic',
    price: {
      monthly: 22,
      annual: 210,
    },
    features: [1],
    isHighlighted: false,
    btnText: 'Get basic',
  },
  {
    title: 'Professional',
    price: {
      annual: 420,
      monthly: 44,
    },
    features: [2, 3, 4],
    isHighlighted: true,
    btnText: 'Get pro',
  },
  {
    title: 'Commercial',
    price: {
      annual: 740,
      monthly: 77,
    },
    features: [ 5],
    isHighlighted: false,
    btnText: 'Contact us',
  },
];

const PricingCompareTable = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Find the right plan for your site
        </Box>
      </Box>
      <Box>
        <TableContainer component={Paper} elevation={0}>
          <Table aria-label="caption table" sx={{ minWidth: 600 }}>
            <caption>
              Compare the plans and choose the one which works for you the best.
            </caption>
            <TableHead>
              <TableRow>
                <TableCell>Features</TableCell>
                {pricing.map((item, i) => (
                  <TableCell align="center" key={i}>
                    <Typography
                      sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}
                    >
                      {item.title}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.id}>
                  <TableCell component="th" scope="row">
                    {feature.title}
                  </TableCell>
                  <TableCell align="center">
                    <Box display={'flex'} justifyContent={'center'}>
                      {pricing[0].features.indexOf(feature.id) !== -1 ? (
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      ) : (
                        ''
                      )}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box display={'flex'} justifyContent={'center'}>
                      {pricing[1].features.indexOf(feature.id) !== -1 ? (
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      ) : (
                        ''
                      )}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box display={'flex'} justifyContent={'center'}>
                      {pricing[2].features.indexOf(feature.id) !== -1 ? (
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      ) : (
                        ''
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                {pricing.map((item, i) => (
                  <TableCell align="center" key={i}>
                    <Button
                      size={'large'}
                      variant={item.isHighlighted ? 'contained' : 'outlined'}
                    >
                      {item.btnText}
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PricingCompareTable;

import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Frequently Asked Questions
        </Box>
      </Box>
      <Box>
        {[
         {
          title: 'What is the compatibility of the Kenek Kards?',
          subtitle:
            'Kenek kards are supported on all modern operating systems from android and iOS with NFC enabled..',
        },
        {
          title: 'What is your return policy?',
          subtitle:
            'Email your enquiry with the reason of the kard return and we will get back to you shortly!',
        },
        {
          title: 'Do you do individual or bulk orders?',
          subtitle:
            'Yes we do both! Do state more information in the order form and we will contact you to discuss the order further. ',
        },
        {
          title: 'What can you install the url in the Kenek Kards?',
          subtitle:
            'You will need to use a NFC app to install the URL. The kard supports any website url.',
        }
        ].map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={2}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import sendEmail from '../../Service/email';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';

import Alert from '@mui/material/Alert';

var templateParams = {
  cardVariant: '',
  nameEngraving: '',
  engravedName: '',
  name: 'James',
  email: '',
  deliveryAddress: ''
};

const Form = () =>
{
  const [name, setName] = React.useState('');
  const [engraveName, setEngraveName] = React.useState('');
  const [cardVariant, setCardVariant] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [deliveryAddress, setDeliveryAddress] = React.useState('');

  const [engrave, setEngrave] = React.useState('Engrave');

  const [emailSubmitted, setEmailSubmitted] = React.useState('');


  const handleChangeName = (event: any) =>
  {
    setName(event.target.value);
  };
  const handleChangeEngraveName = (event: any) =>
  {
    setEngraveName(event.target.value);
  };

  const handleChangeEngrave = (event: any) =>
  {
    setEngrave(event.target.value);
  };
  const handleChangeCardVariant = (event: any) =>
  {
    setCardVariant(event.target.value);
  };
  const handleChangeEmail = (event: any) =>
  {
    setEmail(event.target.value);
  };

  const handleChangeDelivery = (event: any) =>
  {
    setDeliveryAddress(event.target.value);
  };
  const submitEmail = async () =>
  {

    templateParams.name = name;
    templateParams.cardVariant = cardVariant;
    templateParams.email = email;
    templateParams.engravedName = engraveName;
    templateParams.nameEngraving = engrave;
    templateParams.deliveryAddress = deliveryAddress;
    
    console.log(templateParams);
    var status = await sendEmail(templateParams);
    setEmailSubmitted(status);
  }


  return (
    <Box>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={'100%'}
        component={Card}
        borderRadius={2}
        boxShadow={4}
        marginBottom={4}
      >
        <form noValidate autoComplete="off">
          <Grid item xs={12} paddingBottom={'25px'}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Card Variant</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Card Variant"
                  onChange={handleChangeCardVariant}
                >
                  <MenuItem value={'Bamboo - ($19.99)'}>Bamboo - ($19.99)</MenuItem>
                  <MenuItem value={'Black Gold - ($88)'}>Black Gold - ($88) </MenuItem>
                  <MenuItem value={'Gold Silver - ($88)'}>Gold Silver - ($88) </MenuItem>
                  <MenuItem value={'24k Gold Silver - ($888)'}>24k Gold Silver - ($888) </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} paddingBottom={'25px'}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Name Engraving</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-engrave"
                  label="Name Engraving"
                  onChange={handleChangeEngrave}
                >
                  <MenuItem value={'Engrave'}>Name Engrave - ($10.00)</MenuItem>
                  <MenuItem value={'No Engrave'}>No Engrave </MenuItem>

                </Select>
              </FormControl>
            </Box>

            {engrave === 'Engrave' && <>
              <Grid item xs={12} marginTop={'25px'}>
                <TextField

                  label="Engraved Name"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  onChange={handleChangeEngraveName}
                  fullWidth
                />
              </Grid>

            </>}


          </Grid>
          <Divider />
          <Grid container spacing={4} marginTop={'5px'}>
            <Grid item xs={12} >
              <TextField

                label="Name"
                variant="outlined"
                color="primary"
                size="medium"
                onChange={handleChangeName}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField

                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                onChange={handleChangeEmail}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Delivery Address"
                variant="outlined"
                color="primary"
                size="medium"
                onChange={handleChangeDelivery}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ height: 54 }}
                onClick={submitEmail}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
            {emailSubmitted==='Success' &&
              <Grid item xs={12}>
                <Alert severity="success">Form submission is successful - We will get back to you!</Alert>
              </Grid>
            }
             {emailSubmitted==='Fail' &&
              <Grid item xs={12}>
                <Alert severity="error">Form submission is not successful</Alert>
              </Grid>
            }
            <Grid item xs={12} marginTop={'25px'} justifyContent={'center'} alignItems={'center'}>
              <CardMedia
                image={'paynow.jfif'}
                style={{ borderRadius: '0px', justifyContent: 'center', alignItems: 'center' }}
                title={'image'}
                sx={{
                  height: '300px',
                  width: '300px'
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  After submitting an order, transfer via paynow.
                </Typography>
                <Typography component="p" variant="body2" align="left">
                  <b>Add in your email as the remark in the payment window.</b>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box>
        <Typography color="text.secondary" align={'center'}>
          We'll get back to you in 1-2 business days.
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;

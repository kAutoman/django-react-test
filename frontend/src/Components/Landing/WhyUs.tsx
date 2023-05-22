import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TeamWorkingIllustration from '../../svg/illustrations/TeamWorking';
import { Link } from '@mui/material';
const WhyUs = () =>
{
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
          WHY KENEK
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
          data-aos={'fade-up'}
        >
          We make networking easy
          <br />
          and fun
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          Most digital business cards are plain contact sheets.
          <br />
          We aim to make it flexible and represent what you truely are.
        </Typography>
        <Box
          marginTop={3}
          display={'flex'}
          justifyContent={'center'}
          data-aos={'fade-up'}
        >
          <Link underline="none" component="a" href="/contact" color="textPrimary">
            <Button variant={'contained'} color={'primary'} size={'large'}>
              Get KENEK KARD
            </Button>
          </Link>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box height={'100%'} width={'100%'} maxWidth={600} data-aos={'fade-up'}>
          <TeamWorkingIllustration height={100} width={100} />
        </Box>
      </Box>
    </Box>
  );
};

export default WhyUs;

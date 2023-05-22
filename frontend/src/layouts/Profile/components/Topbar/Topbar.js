
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import IconButton from '@mui/material/IconButton';

const Topbar = ({
  themeMode,
  themeToggler,
}) =>
{

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >

      <Box display={'flex'} alignItems={'center'}>
        <Box marginRight={{ xs: 1, sm: 2 }}>
      
     
        </Box>
        
      </Box>
      
      <Box display="flex" alignItems={'center'}>

        <Box>
          <IconButton
            onClick={() => themeToggler()}
            aria-label="Dark mode toggler"
            color={themeMode === 'light' ? 'primary' : 'secondary'}
          >
            {themeMode === 'light' ? (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
         
         
          <Box>
          <Link underline="none" component="a" href="/contact" color="textPrimary">
            <Button
              variant="contained"
              color="primary"
              component="a"
              style={{ borderRadius: '50px' }}
              target="blank"
              size="large"
            >
              Share
            </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;

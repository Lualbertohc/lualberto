import { Stack } from '@mui/system';
import { Image } from 'mui-image';
import { Box } from '@mui/material';
import message from '../img/footer-message.svg';
import title from '../img/title.svg';
import email from '../img/email.svg';
import SocialMedia from './SocialMedia';

function Footer() {
  return (
    <Box>
      <Stack spacing={ 5 } alignItems="center">
        <Image
          src={ message }
          width={ 305 }
        />
        <SocialMedia />
        <Image
          src={ email }
          width={ 205 }
        />
        <Image
          src={ title }
          width={ 139 }
        />
      </Stack>
    </Box>
  );
}

export default Footer;

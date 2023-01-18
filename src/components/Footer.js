import { Stack } from '@mui/system';
import { Image } from 'mui-image';
import { Box } from '@mui/material';
import message from '../img/footer-message.svg';
import title from '../img/title.svg';
import email from '../img/email.svg';
import SocialMedia from './SocialMedia';
import CustomButton from '../styles/CustomButton';

function Footer() {
  return (
    <Box>
      <Stack spacing={5} alignItems="center">
        <Image
          src={message}
          width={305}
        />
        <SocialMedia />
        <Image
          src={email}
          width={205}
        />
        <CustomButton
          href='https://docs.google.com/document/d/1bUWFnLwCSkMcmq-EneZ126lspO_1NGHbfiudXXzrvTM/edit?usp=sharing'
          variant="outlined">
          Baixar resumo
        </CustomButton>
        <Image
          src={title}
          width={139}
        />
      </Stack>
    </Box>
  );
}

export default Footer;

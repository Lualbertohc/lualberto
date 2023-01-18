import { Image } from 'mui-image';
import { Box } from '@mui/system';
import { Link, Stack } from '@mui/material';
import twitter from '../img/icon-twitter.svg';
import linkedin from '../img/icon-linkedin.svg';
import gitHub from '../img/icon-github.svg';
import insta from '../img/icon-insta.svg';

function SocialMedia() {
  return (
    <Box>
      <Stack direction="row" spacing={5}>
        <Link href="https://twitter.com/lualbertodev">
          <Image src={twitter} width={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/luisalbertohc/">
          <Image src={linkedin} width={30} />
        </Link>
        <Link href="https://github.com/Lualbertohc">
          <Image src={gitHub} width={30} />
        </Link>
        <Link href="https://www.instagram.com/lualbertohc/">
          <Image src={insta} width={30} />
        </Link>
      </Stack>
    </Box>
  );
}

export default SocialMedia;

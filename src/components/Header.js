import { Box } from '@mui/system';
import { Image } from 'mui-image';
import header from '../img/content.svg';

function Header() {
  return (
    <Box>
      <br />
      <Image
        src={header}
      />
    </Box >
  );
}

export default Header;

import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Image } from 'mui-image';
import logo from '../img/logo.svg';
import presentation from '../img/presentation.svg';

function Header() {
  return (
    <Box>
      <br />
      <Stack spacing={ 15 }>
        <Image
          src={ logo }
          width={ 20 }
        />
        <Image
          src={ presentation }
          width={ 270 }
          height={ 236 }
        />
      </Stack>
    </Box>
  );
}

export default Header;

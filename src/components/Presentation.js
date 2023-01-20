import { Box } from '@mui/system';
import { Image } from 'mui-image';
import presentation from '../img/presentation.svg';
import CustomButton from '../styles/CustomButton';

function Presentation() {
  return (
    <Box
      sx=
      {{
        mt: 5,
        maxWidth: 345,
      }}
    >
      <Image
        sx={{ maxWidth: 345 }}
        src={presentation}
      />
      <CustomButton
        sx={{ mt: 3, maxWidth: 345 }}
        href='https://docs.google.com/document/d/1bUWFnLwCSkMcmq-EneZ126lspO_1NGHbfiudXXzrvTM/edit?usp=sharing'
        variant="outlined">
        Baixar resumo
      </CustomButton>
    </Box >
  );
}

export default Presentation;

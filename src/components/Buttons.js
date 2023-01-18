import { Box, Stack } from '@mui/material';
import CustomButton from '../styles/CustomButton';

function Buttons() {
  return (
    <Box>
      <Stack spacing={ 2 }>
        <CustomButton variant="contained">
          Compartilhar
        </CustomButton>
        <CustomButton variant="outlined">
          Baixar resumo
        </CustomButton>
      </Stack>
    </Box>
  );
}

export default Buttons;

import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    typography: {
      fontFamily: 'Karla, Arial',
    },
    mode: 'dark',
    primary: {
      main: '#8AB4F8',
    },
    secondary: {
      main: '#1E1E1E'
    }
  },
});

export default theme;

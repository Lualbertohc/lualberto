import { Box, Stack } from '@mui/material';
import Cards from './components/Cards';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

function App() {
  return (
    <Box
      sx={ { display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      } }
    >
      <Stack spacing={ 6 }>
        <Header />
        <Buttons />
        <Cards />
        <Footer />
      </Stack>
    </Box>
  );
}

export default App;

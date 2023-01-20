import { Box, Stack } from '@mui/material';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Cards from './components/Cards';
import Footer from './components/Footer';
import img from './img/backgroud.svg';

function App() {
  return (
    <Box
      sx=
      {{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${img})`,
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
      }}>
      <Stack spacing={10}>
        <Header />
        <Presentation />
        <Cards />
        <Footer />
      </Stack>
    </Box >
  );
}

export default App;

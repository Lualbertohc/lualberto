import { Box, Stack } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
      <Box
        sx=
        {{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Stack spacing={10}>
          <Header />
          <Body />
          <Footer />
        </Stack>
      </Box >
  );
}

export default App;

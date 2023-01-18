import { Box, IconButton, Stack } from '@mui/material';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import AddCircle from '@mui/icons-material/AddCircle';

function App() {

  const redirect = () => {
    window.location.href = 'https://github.com/Lualbertohc?tab=repositories';
};
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Stack spacing={6}>
        <Header />
        <Cards />
        <IconButton
        onClick={redirect}
        color="secondary"
        aria-label="repository"
        size="large">
          <AddCircle />
        </IconButton>
        <Footer />
      </Stack>
    </Box>
  );
}

export default App;

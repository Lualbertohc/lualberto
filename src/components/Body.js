import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import Cards from '../components/Cards';

function Body() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Stack spacing={6}>
                <Cards />
            </Stack>
        </Box>
    )
}

export default Body;
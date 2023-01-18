import { Box, Stack } from "@mui/material";
import SWCard from "./SWCard";
import WalletCard from "./WalletCard";


function Cards() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 345,
      }}
    >
      <Stack spacing={5}>
        <WalletCard />
        <SWCard />
      </Stack>
    </Box>
  );
}

export default Cards;

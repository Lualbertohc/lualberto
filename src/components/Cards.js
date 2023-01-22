import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import wallet from '../img/wallet.png';
import sw from '../img/sw.png';

function SWCard() {
  return (
    <Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Link
          href="https://github.com/Lualbertohc/project-starwars-planets-search"
          underline="none">
          <Card sx={{ borderRadius: 5, maxWidth: 345, minHeight: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={sw}
                alt="sw project"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                SW Planets Search
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Busque de maneira fácil as princípais características
                de um planeta do universo de Guerra nas Estrelas com o
                "SW Planets Search"
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
          </Card>
        </Link>
        <Link
          href="https://github.com/Lualbertohc/wallet-app"
          underline="none">
          <Card sx={{ borderRadius: 5, maxWidth: 345, minHeight: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={wallet}
                alt="sw project"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wallet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                O "Wallet" é uma planilha financeira cujo o intuito
                é armazenar gastos de forma fácil
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
          </Card>
        </Link>
      </Stack>
    </Box >
  );
}

export default SWCard;

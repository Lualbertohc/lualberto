import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
} from '@mui/material';
import { Box, Stack } from '@mui/system';

const fistProject = () => {
  window.location.replace('https://github.com/Lualbertohc/wallet-app');
};

const secoundProject = () => {
  window.location.replace('https://github.com/Lualbertohc/project-starwars-planets-search');
};

function Cards() {
  return (
    <Box
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 345,
      } }
    >
      <Stack spacing={ 5 }>
        <Card sx={ { borderRadius: 5 } }>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://c.pxhere.com/images/6f/06/fe92917bc609d26fcf19c03281d0-1569431.jpg!d"
              alt="green iguana"
            />
          </CardActionArea>
          <CardActions>
            <Button
              onClick={ fistProject }
              size="small"
            >
              Ver repositório
            </Button>
          </CardActions>
        </Card>
        <Card sx={ { borderRadius: 5 } }>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://64.media.tumblr.com/bedffd9db1904346323895df5c03fedd/5b2bf8aa2e8676b0-5d/s1280x1920/adfb091650defe944bc0bec9d8ddfe7338021810.gif"
              alt="green iguana"
            />
          </CardActionArea>
          <CardActions>
            <Button
              onClick={ secoundProject }
              size="small"
            >
              Ver repositório
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
}

export default Cards;

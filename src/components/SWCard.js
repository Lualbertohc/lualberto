import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';

function SWCard() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Card sx={{ borderRadius: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://64.media.tumblr.com/bedffd9db1904346323895df5c03fedd/5b2bf8aa2e8676b0-5d/s1280x1920/adfb091650defe944bc0bec9d8ddfe7338021810.gif"
                        alt="sw project"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        star wars planets search
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        O projeto "Star Wars Planets Search" é
                        um filtro simples para buscar as princípais características
                        de um planeta do universo de Guerra nas Estrelas
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button
                        href='https://github.com/Lualbertohc/project-starwars-planets-search'
                        size="small"
                    >
                        Ver repositório
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default SWCard;
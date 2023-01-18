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

function WalletCard() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: 345,
            }}
        >
            <Card sx={{ borderRadius: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://c.pxhere.com/images/6f/06/fe92917bc609d26fcf19c03281d0-1569431.jpg!d"
                        alt="sw project"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        wallet
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        O "Wallet" é uma planilha financeira cujo o intuito
                        é armazenar gastos de forma fácil
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button
                        href='https://github.com/Lualbertohc/wallet-app'
                        size="small"
                    >
                        Ver repositório
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default WalletCard;
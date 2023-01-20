import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Image } from 'mui-image';
import logo from '../img/logo.svg';

function Header() {
    return (
        <Box
            mt={5}
            sx=
            {{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            <Image
                src={logo}
                width={30}
            />
            <Box>
                <Button
                    href="https://github.com/Lualbertohc"
                    color="inherit"
                    variant="text">
                    github
                </Button>
            </Box>
        </Box>
    )
}

export default Header;
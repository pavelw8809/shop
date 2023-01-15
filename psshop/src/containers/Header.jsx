import React, {useState} from 'react';
import './Header.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
//import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

import { blueGrey } from '@mui/material/colors';

import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import SmallMenu from "../components/SmallMenu";
import SearchingBar from "../components/SearchingBar";

const Header = (props) => {

    const cart = useSelector((state) => state.cart);
    const Categories = ["paper", "stationary", "office", "envelopes"];
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [artSum, setArtSum] = useState(0);
    const [showSideMenu, setShowSideMenu] = useState(false);

    //let badgeContent;
    let badgeContent = "";

    /*
    useEffect(() => {
        setArtSum(props.sum);
        badgeContent = () => {
            return(
                <Badge badgeContent={artSum} color="error">
                <IconButton sx={{ p: 0, ml: 1 }}>
                    <Avatar sx={{backgroundColor: blueGrey[700], border: "2px solid white", '&:hover': {backgroundColor: blueGrey[400]}}}>
                        <ShoppingCartOutlinedIcon/>
                    </Avatar>
                </IconButton>
                </Badge>
            )
        }
    }, [artSum, props.sum]);
*/
    //console.log(cart.length);

    const refreshInfo = () => {
        setArtSum(props.sum);
        return(artSum);
    }

    console.log(artSum);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };

    const handleSideMenu = () => {
        console.log(showSideMenu);
        setShowSideMenu(!showSideMenu);
    }

    const ref = React.createRef();
    

    const theme = createTheme({

        palette: {
            header: {
                light: blueGrey[100],
                middle: blueGrey[300],
                main: blueGrey[700],
                contrastText: "#fff"
            },
            foreground: {
                light: blueGrey[0],
                main: blueGrey[300],
                dark: blueGrey[200],
                contrastText: "#000"
            }  
        }
    });


    const foreground = {
        color: theme.palette.header.light,
    }

    const btnStyle = {
        color: theme.palette.header.light,
        '&:hover': {
            color: theme.palette.header.main,
            backgroundColor: theme.palette.header.middle
        },
        '&.active': {
            color: theme.palette.header.main,
            backgroundColor: theme.palette.header.light
        },
    }

    console.log(cart);

    return(
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" color="header">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box 
                            style={foreground} 
                            sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}} 
                            className='logo'
                            component={NavLink} 
                            to={`/`}>   
                            PAPER<span>&</span>SCISSORS
                        </Box>
                        <Box sx={{ flexGrow: 1, justifyContent: "left", display: { xs: 'flex', md: 'none' } }}>
                            <MenuIcon onClick={handleSideMenu}/>
                        </Box>
                        <Box display="flex" 
                            sx={{
                                flexGrow: 1, 
                                position: {xs: "absolute", md: "inherit"}, 
                                justifyContent: "center",
                                left: {xs: 20, md: 0}, 
                                //width: "80%"
                            }}>
                            <Box
                                sx={{
                                    display: {xs: 'none', md: 'flex'}, 
                                    //position: {xs: 'absolute'},
                                    flexGrow: 1,
                                    backgroundColor: blueGrey[400],
                                    p: 1,
                                    borderRadius: 1,
                                    //width: {xs: sbExpanded ? "100%" : "20px", md: "auto"},
                                    //transition: "width 2s",
                                    width: "80%",
                                    mr: {xs: 1, md: 5},
                                    ml: {xs: 1, md: 5},
                                }}
                                >
                                <SearchIcon/>
                                <input className="SearchInput"/>
                            </Box>
                        </Box>
                        <Box 
                            href=""
                            noWrap
                            sx={{
                                flexGrow: 1, 
                                display: {xs: 'flex', md: 'none'},
                                mr: 2,
                                ml: 7,
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: "100%"
                            }}
                            style={foreground} 
                            className='logo logoxs'
                            component={NavLink} 
                            to={`/`}  >

                            PAPER<span>&</span>SCISSORS
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Box display="flex">
                                <Tooltip title="Open settings">
                                <IconButton sx={{ p: 0, display: { xs: 'none', md: 'flex' }}}>
                                    <Avatar>KA</Avatar>  
                                </IconButton>
                                </Tooltip>
                                <Badge badgeContent={cart.length} color="error">
                                    <IconButton sx={{ p: 0, ml: 1 }}>
                                        <Avatar sx={{backgroundColor: blueGrey[700], border: "2px solid white", '&:hover': {backgroundColor: blueGrey[400]}}}>
                                            <ShoppingCartOutlinedIcon/>
                                        </Avatar>
                                    </IconButton>
                                </Badge>
                            </Box>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                            {Categories.map((setting) => (
                                <MenuItem key={setting}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                    
                </Container>
                <Box sx={{ pl: 2, flexGrow: 1, justifyContent: "center", pb: 0.5, display: { xs: 'none', md: 'flex' } }}>
                    {Categories.map((page) => (
                        <Button
                            key={page}
                            component={NavLink}
                            to={`/${page}`}
                            onClick={handleCloseNavMenu}
                            sx={btnStyle}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
            </AppBar>
            <SmallMenu cat={Categories} show={showSideMenu} showf={handleSideMenu}/>
        </ThemeProvider>
    )
}

export default Header;

/*

        <ThemeProvider theme={theme}>
        <AppBar position="static" color="header">
            <Container maxWidth="xl">
                <Toolbar disableGutters display="flex">
                    <div style={foreground} className='logo'>PAPER<span>&</span>SCISSORS</div>
                </Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {Categories.map((page) => (

                    <Button
                        key={page}
                        component={Link}
                        to={`/${page}`}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>
            </Container>

        </AppBar>
        </ThemeProvider>
*/
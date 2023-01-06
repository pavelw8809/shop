import { React } from 'react';
import './SmallMenu.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const SmallMenu = (props) => {

    let menuitems;

    menuitems = props.cat.map((item, i) => {
        return(
            <Button
                key={item}
                component={NavLink}
                onClick={props.showf}
                to={`/${item}`}
                sx={{
                    color: 'white',
                    transition: "font-size 0.3s",
                    '&:hover': {
                        fontSize: "1.2em",
                        backgroundColor: "#333"
                    }
                }}
            >
                {item}
            </Button>
        )
    })

    return(
        <Box 
            sx={{
                display: {xs: 'flex'}, 
                flexDirection: "column", 
                position: "fixed",
                zIndex: 2,
                width: {xs: "100%", md: 0},
                color: "yellow",
                //width: props.show ? "100%" : "0%",
                marginLeft: props.show ? 0 : "-100%",
                //visibility: props.show ? "visible" : "hidden",
                height: "100vh", 
                backgroundColor: "black", 
                paddingTop: 10,
                opacity: 0.7,
                transition: "margin-left 0.5s",
            }}
        >
            <Typography sx={{borderBottom: "solid 1px #555", p: 1}}>CATEGORIES</Typography>
            {menuitems}
            <Typography sx={{borderBottom: "solid 1px #555", p: 1}}>YOUR ACCOUNT</Typography>
            {menuitems}

        </Box>
    )
}

export default SmallMenu
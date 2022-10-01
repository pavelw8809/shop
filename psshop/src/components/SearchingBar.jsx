import { React, useState } from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { blueGrey } from '@mui/material/colors';

import "./SearchingBar.css";

const SearchingBar = (props) => {

    const [sbExpanded, setSbExpanded] = useState(false);

    const expandSearchbar = () => {
        console.log(sbExpanded);
        setSbExpanded(!sbExpanded);
    }

    return(
        <Box
            sx={{
                display: {xs: 'flex', md: 'flex'}, 
                //position: {xs: 'absolute'},
                //flexGrow: 1,
                backgroundColor: {
                    xs: sbExpanded ? blueGrey[400] : "transparent", 
                    md: blueGrey[400]},
                p: 1,
                borderRadius: 1,
                //width: {xs: sbExpanded ? "100%" : "20px", md: "auto"},
                transition: "width 2s",
                //maxWidth: {xs: "100%", md: "80%"},
                mr: {xs: 1, md: 5},
                ml: {xs: 1, md: 5},
            }}
            >
            <SearchIcon onClick={expandSearchbar}/>
            <input className="SearchInput"/>
        </Box>
    )
}

export default SearchingBar;
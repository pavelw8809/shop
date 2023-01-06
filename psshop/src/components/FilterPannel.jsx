import React, { useState } from 'react';
import "./FilterPannel.css";

import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { TablePagination } from '@mui/material';
import orange from '@mui/material/colors/orange';
import blueGrey from '@mui/material/colors/blueGrey';

const FilterPannel = (props) => {
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(12);



    return(
        <Box sx={{position: "fixed", display: "flex", justifyContent: "center", width: "100%", mt: 15, zIndex: 5, backgroundColor: blueGrey[900], color: blueGrey[300]}}>
            <TablePagination
                component="div"
                style={{color: blueGrey[200]}}
                count={props.count}
                page={props.page}
                onPageChange={props.handlechange}
                rowsPerPage={props.ipp}
                rowsPerPageOptions={[12, 24, 36]}
                onRowsPerPageChange={props.handlerpp}
            />
        </Box>
    )
}

export default FilterPannel;
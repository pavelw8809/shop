import { useEffect, useState } from 'react';
import { React } from 'react';
import Container from '@mui/material/Container';

import ItemCard from '../components/Card';

import './Content.css';


const Content = (props) => {

    let itemlist = ({
        name: "",
        price: "",
        option: "",
        optionlist: []
    });
    let newObj = [];
    //let optionArr = [];
    let lastValue = "";

    props.artlist.map((r, id) => {
            if (lastValue != r.p_name_eng) {
                lastValue = r.p_name_eng;
                if (itemlist.optionlist.length > 0) {
                    //if (r.p_shortdescription_eng != lastOption) {
                        //itemlist2.optionlist.push(r.p_shortdescription_eng);
                        newObj.push(itemlist);
                }
                // Reset itemlist and optionlist before adding new item after changing lastValue
                itemlist = ({
                    name: r.p_name_eng,
                    price: r.p_price,
                    option: r.p_shortdescription_eng,
                    optionlist: []
                })
                itemlist.optionlist.push({id: r.p_id, option: r.p_shortdescription_eng, code: r.p_code});
            } else {
                // lastValue didn't change - add item to list
                //console.log("B");
                //itemlist.push(r);
                itemlist.optionlist.push({id: r.p_id, option: r.p_shortdescription_eng, code: r.p_code});
                //optionlist.push(r.p_shortdescription_eng);
                //console.log(itemlist2);
            }
            // Add last element after iteration

            //optionArr.push(optionlist);
        //}})
    });
    newObj.push(itemlist);
    
    let cardlist = newObj.map((r, id) => {
        //console.log(r);
        return(
            <ItemCard key={id}
                data={r}
            />
        )
    })
    
    return(
        <Container sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {cardlist}
        </Container>
        
    )
}

export default Content;
import { useEffect, useState } from 'react';
import { React } from 'react';
import Container from '@mui/material/Container';

import ItemCard from '../components/MultiCard';
import SingleItemCard from '../components/Card';
import FilterPannel from '../components/FilterPannel';

import './Content.css';
import { requirePropFactory } from '@mui/material';


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

/*
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
 */ 

    let filterpannel, cardlist;

    //console.log(Object.keys(props.artlist.length));
    if (props.artlist) {
        //console.log(props.artlist);
        /*
        let artData = [];
        
        console.log(artData);

        
        artData = Object.entries(props.artlist.reduce((itemlist, item) => {
            //console.log(item);
            let key = item.p_name_eng;
            console.log(key);
            
            if (!itemlist[key]) {
                itemlist[key] = [];
                itemlist[key].push(item);
            } else {
                itemlist[key].push(item);
            }
            
            
            
            const artname = item.p_name_eng;
            itemlist[artname] = itemlist[artname] ? [...itemlist[artname], item] : [item];
            
            //console.log(itemlist);
            artData.push(itemlist);
            return itemlist;
        }))

        console.log(artData);
        */
        /*
        cardlist = Object.keys(props.artlist).map(r => {
            return(
                <ItemCard
                    groupdata={props.artlist[r]}
                    artdata={r}
                />
            )
        })
        */
        cardlist = props.artlist.map((r, id) => {
            return(
                <SingleItemCard key={r.p_id}
                    artdata={r}
                    //name={r.p_name_eng}
                    //code={r.p_code}
                    //id={r.p_id}
                    //price={r.p_price}
                    //shortdesc={r.p_shortdescription}
                />
            )
        })
                       

        
    } //else {
    //    console.log("TEST");
    //    props.loading(true);
   //     cardlist = <p>Loading...</p>
    //}
    
    return(
        <Container disableGutters sx={{display: "flex", justifyContent: "center"}}>

            <Container sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: 25}}>
                {cardlist}
            </Container>
        </Container>
        
    )
}

export default Content;
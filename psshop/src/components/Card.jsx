import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import blueGrey from '@mui/material/colors/blueGrey';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';
import store from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/cartStore';


const ItemCard = (props) => {
    
    const cart = useSelector((state) => state.cart);

    const [counter, setCounter] = useState(0);
    //const [options, setOptions] = useState([]);
    //const [option, setOption] = useState("");
    //const [product, setProduct] = useState();
    //const [optionList, setOptionList] = useState([]);
    //const [areColors, setAreColors] = useState(false);

    const dispatch = useDispatch();

    /*
    useEffect(() => {
        if (props.artdata) {
            const options = [];
            props.groupdata.map(r => {
                options.push(r.p_shortdescription);
            })
            setOptions(options);
            setOption(options[0]);
            setProduct(props.groupdata[0]);
        }
    }, [props.groupdata]);
/*
    useEffect(() => {
        setCounter(0);
        if (props.data) {
            const initialOptionData = props.data.optionlist[Object.keys(props.data.optionlist)[0]]
            //console.log(props.data.optionlist[Object.keys(props.data.optionlist)[0]].id);
            setProduct({id: initialOptionData?.id, name: props.data.name, price: props.data.price, option: initialOptionData?.option, code: initialOptionData?.code})
            setOption(props.data.optionlist[0])
        }
    }, [props.data])
*/
    //console.log(props.artdata);

    //const image = require("../images/DD15.png");

    const counterPlus = (event) => {
        if (counter < 100) {
            setCounter(counter+1);
        }
    }

    const counterMinus = (event) => {
        if (counter > 0) {
            setCounter(counter-1);
        }
    }

    const addArticle = () => {
        if (counter > 0) {
            
            
            dispatch(addItem({
                ...props.artdata, 
                q: counter}))
            /*
            store.dispatch({
                type: "ADD",
                payload: {...props.artdata, q: counter}
            })
            */
            setCounter(0);
            console.log(store.getState());
        }
    }

    //console.log(props.name)
    //console.log(counter);

    const handleOption = (event) => {
        //setOption(props.data.optionlist.filter(function(r) {return r.option == event.target.value})[0]);
        //const optionDetails = props.data.optionlist.filter(function(r) {return r.option === event.target.value})[0];
        //console.log(optionDetails);
        //setProduct({...product, id: optionDetails.id, option: optionDetails.option, code: optionDetails.code})
    }

    const isColor = (str) => {
        var c = new Option().style;
        c.color = str;
        return c.color == str
    }

    const cardstyle = createTheme({
        palette: {
            buttons: blueGrey[100],
            buttonsh: blueGrey[400],
            actionsb: blueGrey[700],
        },
        typography: {
            fontFamily: "Bahnschrift Light"
        }
        
    })
    

    let cardContent;

    //console.log(props.data);
    

    if (props.artdata.p_code) {

        //const defaultOption = options[0];
        //console.log(props.data);


        //const defaultprice = props.groupdata[0].p_price;
        //const name = props.data.p_name_eng;
        //const optionList = props.data.map(r => {return r.p_shortdescription_eng});
        //let defaultProduct = props.data.de;
        //console.log(product);
        let image = require("../images/" + props.artdata.p_code + ".png");
        //const optionList = props.data.map(r => {return r.p_shortdescription_eng});


        cardContent = (
            
        <ThemeProvider theme={cardstyle}>
            <Card sx={{width: "250px", boxShadow: 7, borderRadius: "20px", margin: "10px"}}>
                <Box height="200px"
                    sx={[{display: "flex", flexDirection: "column", justifyContent: "center"}]}>
                    <CardMedia sx={{maxHeight: "200px"}}
                        component="img"
                        image={image}
                        alt="test" />
                </Box>
                <Box sx={{backgroundColor: cardstyle.palette.buttons, height: "150px"}}>
                    <CardHeader sx={{paddingBottom: "0px"}}
                        titleTypographyProps={{variant: 'h7'}}
                        title={props.artdata.p_name}
                        subheader={<Typography variant="h6">{props.artdata.p_price}</Typography>} />

                    <CardContent sx={[{display: "flex", flexDirection: "column", alignItems: "center", height: "40px"}]}>

                        <Typography variant="body2" color="text.secondary">
                            {props.artdata.p_shortdescription}
                        </Typography>
                    </CardContent>
                </Box>

                <CardActions sx={{backgroundColor: cardstyle.palette.actionsb}}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{color: cardstyle.palette.buttons}}/>
                    </IconButton>
                    <IconButton onClick={(e) => counterMinus(e)}>
                        <RemoveCircleIcon sx={{color: cardstyle.palette.buttons}}/>
                    </IconButton>

                    
                    <TextField 
                        //defaultValue="0"
                        variant="standard" 
                        value={counter}
                        InputProps={{
                            inputProps: {
                                style: {textAlign: "center", color: cardstyle.palette.buttons}
                            }
                        }}
                        sx={{width: "40px"}}
                    />
                    
                    <IconButton onClick={(e) => counterPlus(e)}>
                        <AddCircleIcon sx={{color: cardstyle.palette.buttons}}/>
                    </IconButton>

                    <IconButton 
                        sx={{backgroundColor: cardstyle.palette.buttons, "&:hover": cardstyle.palette.buttonsh}}
                        onClick={addArticle}>
                        <AddShoppingCartIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </ThemeProvider>
        
        )
    }
    //console.log(product);

    return (
        <div>
            {cardContent}
        </div>
    );
}

export default ItemCard;
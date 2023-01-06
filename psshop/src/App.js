import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './containers/Header';
import Content from './containers/Content';
import SmallMenu from './components/SmallMenu';
import Cart from './containers/Cart';
import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import FilterPannel from './components/FilterPannel';
import axios from 'axios';


function App() {

  const [Categories] = useState(["paper", "stationary", "office", "envelopes"]);
  const [artList, setArtList] = useState([]);
  const [artSum, setArtSum] = useState(0);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [itemsToShow, setItemsToShow] = useState([]);

  const location = useLocation();

  useEffect(() => {
    LoadingStart();
    axios.get("http://localhost:8080/shop/server" + location.pathname)
    .then(res => {
      /*
        let artdata = res.data.reduce((items, item) => {
          let key = item.p_name_eng;
          items[key] = items[key] ? [...items[key], item] : [item];
          return items;
        }, {});
        */
        setArtList(res.data);
        console.log(res.data);
        
        LoadingClose();
    })
    .catch(err => {
        console.log(err);
        LoadingClose();
    })
    
  }, [location.pathname]);

  useEffect(() => {
    if (artList) {
        let firstItem = page * itemsPerPage;
        let lastItem = firstItem + itemsPerPage;
        setItemsToShow(artList.slice(firstItem, lastItem));
    }
    
}, [artList, page, itemsPerPage])

  const LoadingClose = () => {
    setLoading(false);
  };

  const LoadingStart = () => {
    setLoading(!loading);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
      setItemsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  };

  return (
    <div className="App">

        <Header sum={artSum}/>
        <FilterPannel
                count={artList.length}
                page={page}
                handlechange={handleChangePage}
                handlerpp={handleChangeRowsPerPage}
                ipp={itemsPerPage}
                //firstItem={firstItem}
                //lastItem={lastItem}
            />
        <Container sx={{display: "flex", justifyContent: "center"}}>
          <Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}} 
            open={loading}
          />
          <Routes>
            <Route path="/" element={<div> Główna </div>} exact />
            <Route exact path="/paper" element = {<Content artlist={itemsToShow} handlechange={handleChangePage} handlerpp={handleChangeRowsPerPage} ipp={itemsPerPage}/>}/>
            <Route exact path="/stationary" element = {<Content artlist={itemsToShow} handlechange={handleChangePage} handlerpp={handleChangeRowsPerPage} ipp={itemsPerPage}/>}/>
            <Route exact path="/office" element = {<Content artlist={itemsToShow}/>} handlechange={handleChangePage} handlerpp={handleChangeRowsPerPage} ipp={itemsPerPage}/>
            <Route exact path="/envelopes" element = {<Content artlist={itemsToShow}/>} handlechange={handleChangePage} handlerpp={handleChangeRowsPerPage} ipp={itemsPerPage}/>
            <Route exact path="/cart" element = {<Cart/>}/>
          </Routes>
        </Container>
    
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './containers/Header';
import Content from './containers/Content';
import SmallMenu from './components/SmallMenu';
import Cart from './containers/Cart';
import Container from '@mui/material/Container';


function App() {

  const [Categories] = useState(["paper", "stationary", "office", "envelopes"]);
  const [artList, setArtList] = useState([]);
  const [artSum, setArtSum] = useState(0);


  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:8080/shop/server" + location.pathname, {
        method: 'GET',
        //mode: 'cors',
    })
    .then(res => res.json())
    .then(json => {
        setArtList(json);
    })
    .catch(err => {
        console.log(err);
    })
  }, [location.pathname]);


  console.log(artSum);

  return (
    <div className="App">

        <Header sum={artSum}/>
        <Container sx={{mt: 15}}>
          <Routes>
            <Route path="/" element={<div> Główna </div>} exact />
            <Route exact path="/paper" element = {<Content artlist={artList}/>}/>
            <Route exact path="/stationary" element = {<Content artlist={artList}/>}/>
            <Route exact path="/office" element = {<Content artlist={artList}/>}/>
            <Route exact path="/envelopes" element = {<Content artlist={artList}/>}/>
            <Route exact path="/cart" element = {<Cart/>}/>
          </Routes>
        </Container>
    
    </div>
  );
}

export default App;

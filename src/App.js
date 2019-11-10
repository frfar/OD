import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';

//import BookPage from './ObjectPage/BookPage';
import Navbar from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';
//import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import CartPage from './CartPage/CartPage';
import OriginPage from './OriginPage/OriginPage';
//import { BrowserRouter as R, Link, Route, Switch, Redirect } from 'react-router-dom'
//import Navig from './Components/Navig'
import BookPage from './pages/BookPage.jsx'
import Intro from './pages/Intro.jsx'
import Suggestions from './pages/Suggestions.jsx'

function App() {
    const [object, setObject] = useState({});
    const [hasErrors, setErrors] = useState(false);
    async function fetchData() {
        
            const BASE_URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=dallas-downtown&inputtype=textquery&fields=photos&key=AIzaSyBWfuBeeuxLPuD5IqKVDzlrRk_zHZccIWo'
            fetch(`${BASE_URL}`, { 
              method: 'GET',
              headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Methods':'POST, GET'
              }
            })
            .then(response => response.json())
            .then(json => console.log(json));
            
            
        }
        useEffect(() => {
            fetchData();
            }, []);
        
        
            
    const [price, setPrice] = useState({
        priceOption: 'new',
        price: 598.23,
        quantity: 1
    });
    

    const priceOptionHandler = (event) => {
        let currentPrice;
        let quantity = price.quantity;
        if (event.target.value === 'new') {
            currentPrice = 598.23;
        } else {
            currentPrice = 478.13;
        }
        setPrice({priceOption: event.target.value, price: (currentPrice * quantity), quantity: quantity});
    };

    const quantityHandler = (event) => {
        let initialPrice;
        if (price.priceOption === 'new') {
            initialPrice = 598.23;
        } else {
            initialPrice = 478.13;
        }
        const quantity = event.target.value;
        setPrice({quantity: quantity, price: (initialPrice * quantity), priceOption: price.priceOption})
    };

    const backgroundStyle = {
        height: '100%'
    };

    
    return (
      <div className="App" style={backgroundStyle}>
        {/* <Navbar /> */}
        {/* <OriginPage/> */}
        {/*<CartPage*/}
        {/*    items = {list_items}*/}
        {/*/>*/}
        {/* <LoginPage />*/}
        {/*    logo="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg"*/}
        {/*/>*/}
        {/* <HomePage
            logo="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg"
           cart="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"
            login="https://www.trzcacak.rs/myfile/detail/3-39618_login-icon-with-transparent-background.png"
            img="https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049"
            items = {list_items}/> */}
        {/* <IntroPage
            img='https://singularityhub.com/wp-content/uploads/2018/12/airplane-flying-above-clouds_shutterstock_553131187-1068x601.jpg'
            currentPriceOption={price.priceOption}
            changePriceOption={priceOptionHandler}
            price={price.price}
            quantity={price.quantity}
            changeQuantity={quantityHandler}/> */}
        {/* <BookPage
            img='https://singularityhub.com/wp-content/uploads/2018/12/airplane-flying-above-clouds_shutterstock_553131187-1068x601.jpg'
            currentPriceOption={price.priceOption}
            changePriceOption={priceOptionHandler}
            price={price.price}
            quantity={price.quantity}
            changeQuantity={quantityHandler}/> */}
        {/*<Footer />*/}
        <Router>
        <div>
        
        <Switch>
        
          <Route exact path="/" component = {Intro}/>
          <Route exact path="/home" component = {Suggestions}/>
          <Route exact path="/BookPage"component={BookPage}/>
          
        
        
        
          
            
        </Switch> 
        </div> 
      </Router>
    </div>
  );
}
export default App;


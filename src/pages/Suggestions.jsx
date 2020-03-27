import React from "react";
import Navbar from '../HeaderComponent/HeaderComponent';
import Footer from '../FooterComponent/FooterComponent';

import ReactDOM from 'react-dom';
import HomePage from './HomePage/HomePage'
//import Logo from "./images/0.jpg"
import Logo1 from "./images/iran1.jpg";
import Logo2 from "./images/iran2.jpg";
import Logo3 from "./images/iran3.jpg";
import Logo4 from "./images/iran4.jpg";
import Logo5 from "./images/iran5.jpg";
import Logo6 from "./images/iran6.jpg";
import Logo7 from "./images/iran7.jpg";
import Logo8 from "./images/iran8.jpg";
import Logo9 from "./images/Ontario.jpg";
import Logo10 from "./images/Yosemite.jpg";
import Logo11 from "./images/Indianapolis.jpg";
import Logo12 from "./images/Durham.jpg";
var list_items = [
    [Logo1, "Masuleh", 77],
    [Logo2, "Kashan", 119],
    [Logo3, "Tabriz bazaar", 125],
    [Logo4, "Abyaneh village", 177],
    [Logo5, "Esfahan bridges", 185],
    [Logo6, "Wind catchers in Yazd", 199],
    [Logo7, "Persepolis", 201],
    [Logo8, "Esfahan city center", 202],
    [Logo9, "Ontario", 216],
    [Logo10, "Yosemite", 216],
    [Logo11, "Indianapolis", 217],
    [Logo12, "Durham", 217]
    
]

const Suggestions = () => {
    return (
        <div className="App">
            <Navbar 
            />
            <HomePage
                logo="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg"
            cart="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"
                login="https://www.trzcacak.rs/myfile/detail/3-39618_login-icon-with-transparent-background.png"
                img="https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049"
                items = {list_items}/>
            <Footer />
        </div>
    );
};

export default Suggestions;
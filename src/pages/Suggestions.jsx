import React from "react";

import ReactDOM from 'react-dom';
import HomePage from './HomePage/HomePage'
//import Logo from "./images/0.jpg"
import Logo1 from "./images/Denver.jpg";
import Logo2 from "./images/Philly.jpg";
import Logo3 from "./images/Detroit.jpg";
import Logo4 from "./images/SLC.jpg";
import Logo5 from "./images/Austin.jpg";
import Logo6 from "./images/Cincinnati.jpg";
import Logo7 from "./images/Louisville.jpg";
import Logo8 from "./images/Hartford.jpg";
import Logo9 from "./images/Ontario.jpg";
import Logo10 from "./images/Yosemite.jpg";
import Logo11 from "./images/Indianapolis.jpg";
import Logo12 from "./images/Durham.jpg";
var list_items = [
    [Logo1, "Denver", 77],
    [Logo2, "Philadelphia", 119],
    [Logo3, "Detroit", 125],
    [Logo4, "Salt Lake City", 177],
    [Logo5, "Austin", 185],
    [Logo6, "Cincinnati", 199],
    [Logo7, "Louisville", 201],
    [Logo8, "Hartford", 202],
    [Logo9, "Ontario", 216],
    [Logo10, "Yosemite", 216],
    [Logo11, "Indianapolis", 217],
    [Logo12, "Durham", 217]
    
]

const Suggestions = () => {
    return (
        <HomePage
            logo="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg"
           cart="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"
            login="https://www.trzcacak.rs/myfile/detail/3-39618_login-icon-with-transparent-background.png"
            img="https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049"
            items = {list_items}/>
    );
};

export default Suggestions;
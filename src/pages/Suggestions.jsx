import React from "react";

import ReactDOM from 'react-dom';
import HomePage from './HomePage/HomePage'
//import Logo from "./images/0.jpg"
import Logo from "./images/Atlanta.jpg";
import Logo1 from "./images/chicago.jpg";
import Logo2 from "./images/dallas.jpg";
import Logo3 from "./images/LOSANGELES.jpg";
import Logo4 from "./images/miami.jpg";
import Logo5 from "./images/seattle.jpg";
import Logo6 from "./images/newYork.jpg";
var list_items = [
    [Logo, "Dallas", 10],
    [Logo1, "Chicago", 323],
    [Logo2, "Atlanta", 234],
    [Logo3, "Los Angeles", 532],
    [Logo4, "Denver", 234],
    [Logo5, "Charlotte", 121],
    [Logo6, "Las Vegas", 241],
    [Logo3, "San Fransisco", 101],
    [Logo2, "Houston", 532],
    [Logo, "Houston", 532],
    [Logo6, "Houston", 532],
    [Logo4, "Houston", 532]
    
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
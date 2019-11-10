import React, { useState } from 'react';
import './App.css';
import ObjectPage from './ObjectPage/ObjectPage';
import Navbar from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import CartPage from './CartPage/CartPage';
import OriginPage from './OriginPage/OriginPage';

function App() {

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

    var list_items = [
        ["https://www.irishtimes.com/polopoly_fs/1.2737456.1469712897!/image/image.jpg_gen/derivatives/box_620_330/image.jpg", "The Bahamas", 1500],
        ["https://media2.fdncms.com/orlando/imager/u/original/25772767/adobestock_129238917.jpeg", "Orlando", 1000],
        ["https://www.cross.com/media/catalog/product/cache/2d9d76f34da5071e6b70583d468484c0/f/d/fd7ygwu1jmqd60nvrzog_1_6.jpg", 10],
        ["https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg", 10],
        ["https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/three-toed-sloth.jpg?itok=uWF-NdZZ", 10],
        ["https://liquipedia.net/commons/images/a/af/League_Infobox_Shen.jpg", 10],
        ["https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-field.jpg?width=1040", 10],
        ["https://i.ytimg.com/vi/BCr7y4SLhck/maxresdefault.jpg", 10],
        ["https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/10/18142643/senna.jpg", 10]
    ]
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
        {/*<HomePage*/}
        {/*    logo="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg"*/}
        {/*    cart="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"*/}
        {/*    login="https://www.trzcacak.rs/myfile/detail/3-39618_login-icon-with-transparent-background.png"*/}
        {/*    img="https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049"*/}
        {/*    items = {list_items}/>*/}
        <ObjectPage
            img='https://singularityhub.com/wp-content/uploads/2018/12/airplane-flying-above-clouds_shutterstock_553131187-1068x601.jpg'
            currentPriceOption={price.priceOption}
            changePriceOption={priceOptionHandler}
            price={price.price}
            quantity={price.quantity}
            changeQuantity={quantityHandler}/>
        {/*<Footer />*/}
    </div>
  );
}

export default App;

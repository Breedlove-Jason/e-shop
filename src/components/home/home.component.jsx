import React from "react";
import "./home.styles.css";
import Product from "../product/product.component";

const Home = () => {
  let product_id = Math.random() * 1000000000000000000;
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className={"home__image"}
            src={
              "https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            }
            alt={"home"}
          />
          <div className="home__row">
            <Product
              id={product_id}
              title={
                "Tablet Android Tablets, 8 inch Tablet 2GB RAM, 32GB ROM Support 512GB Expand Computer Tablet PC, Quad-CoreProcessor, IPS Touch Screen, 2+5MP Dual Camera, 4300mah Battery, Wifi, (Black)"
              }
              price={47}
              rating={3}
              image={
                "https://m.media-amazon.com/images/I/41BZugek34L._MCnd_AC_.jpg"
              }
            />
            <Product
              id={product_id}
              title={
                "Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 16.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Space Gray"
              }
              price={1998}
              rating={5}
              image={
                "https://m.media-amazon.com/images/I/61fd2oCrvyL._AC_UY218_.jpg"
              }
            />
          </div>
          <div className="home__row">
            <Product
              id={product_id}
              title={
                "Apple iPhone 13 Pro Max, 256GB, Graphite - Fully Unlocked (Renewed)"
              }
              price={274}
              rating={4}
              image={
                "https://m.media-amazon.com/images/I/513NI5xpYjL._AC_UL320_.jpg"
              }
            />
            <Product
              id={product_id}
              title={
                "Razer Huntsman V2 Optical Gaming Keyboard: Fastest Linear Optical Switches Gen-2 w/ Sound Dampeners & 8000Hz Polling Rate - Doubleshot PBT Keycaps - Dedicated Media Keys & Dial - Ergonomic Wrist Rest"
              }
              price={129}
              rating={4}
              image={
                "https://m.media-amazon.com/images/I/71xiaUDxklL._AC_UY218_.jpg"
              }
            />
            <Product
              id={product_id}
              title={
                "D-Link Wireless AC Smartbeam 1750 Mbps Home Cloud App-Enabled Dual-Band Gigabit Router (DIR-868L)"
              }
              price={20}
              rating={3}
              image={
                "https://m.media-amazon.com/images/I/41MGx8BGC5L._AC_UY218_.jpg"
              }
            />
          </div>
          <div className="home__row">
            <Product
              id={product_id}
              title={
                "D-Link Wireless AC Smartbeam 1750 Mbps Home Cloud App-Enabled Dual-Band Gigabit Router (DIR-868L)"
              }
              price={1199}
              rating={5}
              image={
                "https://m.media-amazon.com/images/I/61QSUZYl+dL._AC_UY218_.jpg"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

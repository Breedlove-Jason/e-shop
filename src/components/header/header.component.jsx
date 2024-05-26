import React from "react";
import "./header.styles.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
  return (
    <div className={"header"}>
      <div className="header header__logo">
        {/*  Header Logo */}
        <StorefrontIcon className={"header__logoImage"} fontSize={"large"} />
        <h2 className="header__logoTitle">eShop</h2>
      </div>
      <div className="header__search">
        {/* Header Search */}
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {/* Header Nav */}
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">
            <ShoppingBasketIcon
              className={"nav__itemBasket"}
              fontSize={"large"}
            />
          </span>
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

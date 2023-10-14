// This file contains code for header component 
// such as amazon logo with home functionality 
// login options and cart options 

import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";
import { auth } from './firebase';

function Header() {

  //adding current basket state to the cart button
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("User comming in header::>>> ", user)

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to="/">
        <img
          className="amazon_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png">
        </img>
      </Link>



      <div className='header_searchBar'>
        <input className='header_searchInput' type="text"></input>
        <SearchIcon className='header_searchIcon'></SearchIcon>
      </div>



      <div className="header_navBar">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_options">
            <span className="header_optionOne">
              {user ? "Hello " + user.email : "Hello Guest"}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_options">
          <span className="header_optionOne">
            Returns
          </span>
          <span className="header_optionTwo">
            & Orders
          </span>
        </div>

        <div className="header_options">
          <span className="header_optionOne">
            Your
          </span>
          <span className="header_optionTwo">
            Prime
          </span>
        </div>

        <div className="header_options">
          <span className="header_optionTwo">            {/* Cart logo */}
          </span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartIcon></ShoppingCartIcon>
            <span className="header_optionTwo header_basketCount">{basket?.length}</span>

          </div>
        </Link>
      </div>



    </div>
  )
}

export default Header
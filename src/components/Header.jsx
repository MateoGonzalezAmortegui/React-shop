import React, {useState, useContext} from 'react'
import menu from "@icons/icon_menu.svg";
import flecha from "@icons/flechita.svg";
import logo from "@logos/logo_yard_sale.svg";
import shopcart from "@icons/icon_shopping_cart.svg";
import '@styles/Header.scss';

import Menu from '@components/Menu';

import AppContext from '@context/AppContext';

import MyOrder from '@containers/MyOrder';

const Header = () => {

    const [toggle, setToggle] = useState(false);//*[valor almacenado, funcion]
    const handleToggle = () => {
		setToggle(!toggle);
	}

    const {state}=useContext(AppContext);
    //** {toggle && <Menu />}show menu depend on state true or false

    const [toggleOrders, setToggleOrders] = useState(false);

    return (
      <nav>
          <img src={menu} alt className="menu" />
          <div className="navbar-left">
              <img src={logo} alt className="logo-nav" />
              <ul>
                  <li>
                      <a href="/">ALL</a>
                  </li>
                  <li>
                      <a href="/">Clothes</a>
                  </li>
                  <li>
                      <a href="/">Electronics</a>
                  </li>
                  <li>
                      <a href="/">furniture's</a>
                  </li>
                  <li>
                      <a href="/">Toys</a>
                  </li>
                  <li>
                      <a href="/">Others</a>
                  </li>
              </ul>
          </div>
          <div className="navbar-right">
              <ul>
                  <li className="navbar-email" onClick={handleToggle}>
                      gato@matias.com
                      <img src={flecha} alt />
                  </li>
                  <li className="navbar-shopping-card"
                  onClick={() => setToggleOrders(!toggleOrders)}>
                      <img src={shopcart} alt />
                      { state.cart.length > 0 && <div>{ state.cart.length > 9 ? '+9' : state.cart.length }</div> }
                  </li>
              </ul>
          </div>
          {toggle && <Menu />}
          {toggleOrders && <MyOrder />}
      </nav>
  );
}

export default Header
import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/flex-slider.css";
import "../assets/css/font-awesome.css";
import "../assets/css/lightbox.css";
import "../assets/css/owl-carousel.css";
import "../assets/css/templatemo-klassy-cafe.css";
import MenuDrawer from "./MenuDrawer";
import CartDrawer from "./Cartdrawer";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import MenuDashboard from "./MenuDashboard";
import { Link } from "react-router-dom";

export default function Header() {
  const { cartDatas } = useSelector((state) => state.cart);
  const badgeConunt = cartDatas.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img
                  alt="dailo"
                  src="https://media.discordapp.net/attachments/1043905461193285702/1114603582751260712/dailo_final_logo.png?width=100&height=100"
                />
              </a>

              <ul className="nav items-center">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about">About</a>
                </li>

                <li className="scroll-to-section">
                  <a href="#chefs">Chefs</a>
                </li>
                <li className="submenu hover:cursor-pointer">
                  <a href="#f">Menu</a>
                  <ul>
                    <li>
                      <Link to="/food/Dessert">Dessert</Link>
                    </li>
                    <li>
                      <Link to="/food/Drinks">Drinks</Link>
                    </li>
                    <li>
                      <Link to="/food/Lunch">Lunch</Link>
                    </li>
                  </ul>
                </li>

                <li className="scroll-to-section">
                  <a href="#reservation">Contact Us</a>
                </li>
                <li className="flex gap-5 items-center">
                  <Badge badgeContent={badgeConunt} color="success">
                    <CartDrawer />
                  </Badge>
                  <MenuDashboard />
                </li>
              </ul>
              <a href="#f" className="menu-trigger">
                <MenuDrawer />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

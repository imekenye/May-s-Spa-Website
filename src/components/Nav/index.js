import React from "react";
import { NavContainer } from "./Nav.styled";
import SearchIcon from "../SearchIcon";
import CartIcon from "../CartIcon";

export default function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/service">Service</a>
        </li>
      </ul>
      <h1 className="brand__logo">May's spa & beauty</h1>
      <div className="nav__right">
        <p>(62) 123 - 342</p>
        <SearchIcon />
        <CartIcon />
      </div>
    </NavContainer>
  );
}

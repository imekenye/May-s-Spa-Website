import React from "react";
import { NavContainer } from "./Nav.styled";
import SearchIcon from "../../../components/SvgIcons/SearchIcon";
import CartIcon from "../../../components/SvgIcons/CartIcon";

import { motion } from "framer-motion";
import { navVariants } from "./Nav.motion";

export default function Nav() {
  return (
    <NavContainer>
      <motion.ul variants={navVariants} initial={`hidden`} animate={`visible`}>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/service">Service</a>
        </li>
      </motion.ul>
      <motion.h1
        className="brand__logo"
        variants={navVariants}
        initial={`hidden`}
        animate={`visible`}
      >
        May's spa & beauty
      </motion.h1>
      <motion.div
        className="nav__right"
        variants={navVariants}
        initial={`hidden`}
        animate={`visible`}
      >
        <p>(62) 123 - 342</p>
        <SearchIcon />
        <CartIcon />
      </motion.div>
    </NavContainer>
  );
}

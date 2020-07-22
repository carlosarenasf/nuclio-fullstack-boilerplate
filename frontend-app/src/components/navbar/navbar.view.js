import React from 'react';
import {
  Link,
} from "react-router-dom";
import {BOARD, BOARD_FORM, HOME, LIST_PINS, PINS_FORM} from "./routes/routes";

function Navbar() {
  return (
      <ul>
        <li>
          <Link to={HOME}>Home</Link>
        </li>
        <li>
          <Link to={LIST_PINS}>ListPins</Link>
        </li>
        <li>
          <Link to={PINS_FORM}>Pin form</Link>
        </li>
        <li>
          <Link to={BOARD_FORM}>Board form</Link>
        </li>
        <li>
          <Link to={'/board/10iudskj'}>Board 1</Link>
        </li>
      </ul>
  );
}

export default Navbar;

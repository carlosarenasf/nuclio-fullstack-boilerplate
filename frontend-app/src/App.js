import React from 'react';
import Home from "./pages/home/home.view";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import PinForm from "./components/pinForm/pinForm.view";
import ListPins from "./components/listPins/listPins.view";
import Board from "./components/board/board.view";
import {BOARD, BOARD_FORM, HOME, LIST_PINS, PIN_ID, PINS_FORM} from "./routes/routes";
import Navbar from "./components/navbar/navbar.view";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route path={LIST_PINS}>
          <ListPins />
        </Route>
        <Route exact path={PINS_FORM}>
          Board form
        </Route>
        <Route path={'/board/:id'}>
          <Board />
        </Route>
        <Route path={PIN_ID}>
          <PinDetail />
        </Route>
        <Route exact path={HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

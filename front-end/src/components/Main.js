//Main.js
import React from "react";
import "./Main.css";
import BoardList from "./board/BoardList";
import Icon from "@mdi/react";
import Footer from "./Footer";
//router
import { Switch, Route } from "react-router-dom";
import Login from "./user/SignUp";
function Main() {
  return (
    <>
      메인 페이지 - Router 들어가야함
      <br />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/board">
          <BoardList />
        </Route>
        <Route path="/signup">
          <Login />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default Main;

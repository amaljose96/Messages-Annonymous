import React from "react";
import axios from "axios";
import { Context } from "./Store";
import AppBody from "./components/AppBody";
import Menu from "./components/Menu";
import TopBar from "./components/TopBar";
function NomenNescio() {
  const {state,dispatch} = React.useContext(Context);

  return <NomenNescioContainer>
  <AppBody/>
    <Menu/>
    <TopBar/>
  </NomenNescioContainer>
}

export default NomenNescio;

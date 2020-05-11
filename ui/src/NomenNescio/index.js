import React from "react";
import axios from "axios";
import { Context } from "./Store";
import AppBody from "./components/AppBody";
import Menu from "./components/Menu";
import TopBar from "./components/TopBar";
import { NomenNescioContainer } from "./styles";
function NomenNescio() {
  const { state, dispatch } = React.useContext(Context);
  React.useEffect(() => {
    window.localStorage.setItem("NN",JSON.stringify(state.user))
  }, [state]);
  console.log("Color scheme now ",state.user)
  return (
    <NomenNescioContainer colors={state.user.colorConfig}>
      <AppBody />
      <Menu />
      <TopBar />
    </NomenNescioContainer>
  );
}

export default NomenNescio;

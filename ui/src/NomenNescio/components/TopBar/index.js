import React from "react";
import { TopBarContainer } from "./styles";
import { Context } from "../../Store";

function TopBar() {
  const {state} = React.useContext(Context);
  if(state.user.id==="no-user"){
    return <div/>;
  }
  return <TopBarContainer>TopBar</TopBarContainer>;
}
export default TopBar;
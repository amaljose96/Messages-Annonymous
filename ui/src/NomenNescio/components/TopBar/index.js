import React from "react";
import { TopBarContainer,Section,BurgerMenu } from "./styles";
import { Context } from "../../Store";
import AppTitle from "../AppTitle";
import MenuImage from "../../Resources/menu.png";
import { openMenu } from "../../Store/engine/actions";

function TopBar() {
  const {state,dispatch} = React.useContext(Context);
  if(state.user.id==="no-user"){
    return <div/>;
  }
  return <TopBarContainer colors={state.user.colorConfig}>
      <Section>
        <BurgerMenu src={MenuImage} onClick={()=>{openMenu()(dispatch)}}/>
        <AppTitle/>
      </Section>
      <Section>
        
      </Section>
  </TopBarContainer>;
}
export default TopBar;
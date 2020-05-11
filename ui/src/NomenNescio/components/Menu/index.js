import React from "react";
import { MenuContainer,MenuOption } from "./styles";
import { Context } from "../../Store";
import { menuOptions } from "./constants";

function Menu(props) {
  const {state} = React.useContext(Context);
  return <MenuContainer showMenu={state.engine.menuOpen} colors={state.user.colorConfig}>
    {
      menuOptions.map((option)=>{
        return <MenuOption to={option.link} colors={state.user.colorConfig} >{option.title}</MenuOption>
      })
    }
  </MenuContainer>;
}
export default Menu;
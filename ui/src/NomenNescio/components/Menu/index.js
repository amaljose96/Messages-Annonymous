import React from "react";
import { MenuContainer, MenuOption,Close } from "./styles";
import { Context } from "../../Store";
import { menuOptions } from "./constants";
import CloseImage  from "../../Resources/close.png";
import { closeMenu } from "../../Store/engine/actions";

function Menu(props) {
  const { state, dispatch } = React.useContext(Context);
  console.log("Img src = ",CloseImage)
  return (
    <MenuContainer
      showMenu={state.engine.menuOpen}
      colors={state.user.colorConfig}
    >
      <Close
        src={CloseImage}
        onClick={() => {
          closeMenu()(dispatch);
        }}
      />
      {menuOptions.map((option) => {
        return (
          <MenuOption to={option.link} colors={state.user.colorConfig} onClick={() => {
            closeMenu()(dispatch);
          }}>
            {option.title}
          </MenuOption>
        );
      })}
    </MenuContainer>
  );
}
export default Menu;

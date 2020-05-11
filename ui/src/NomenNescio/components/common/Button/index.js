import React, { useContext } from "react";
import { ButtonContainer } from "./styles";
import { Context } from "../../../Store";

function Button({children,onClick}) {
  const {state} = useContext(Context);
  return <ButtonContainer onClick={onClick}colors={state.user.colorConfig}>{children}</ButtonContainer>;
}
export default Button;
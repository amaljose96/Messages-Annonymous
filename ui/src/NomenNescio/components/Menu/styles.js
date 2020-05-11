import styled from "styled-components";
import { getColor } from "../../colors";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  width: 300px;
  max-height: 100vh;
  min-height: 100vh;
  overflow: scroll;
  position: fixed;
  left: ${(props) => (props.showMenu ? "0" : "-300px")};
  top: 0px;
  color: ${(props) => getColor(props.colors).background};
  background: ${(props) => getColor(props.colors).text};
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  padding-top: 15px;
  transition: all 0.2s;
  box-sizing: border-box;
  z-index: 40;
`;
export const MenuOption = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 15px;
  font-size: 20px;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
  transition: all 0.2s;
  :hover {
    background: ${(props) => getColor(props.colors).background};
    color: ${(props) => getColor(props.colors).text};
  }
  :active {
    background: ${(props) => getColor(props.colors).background};
    color: ${(props) => getColor(props.colors).text};
  }
`;

export const Close = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 50px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

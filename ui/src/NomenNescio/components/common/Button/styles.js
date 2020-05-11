import styled from "styled-components";
import { getColor } from "../../../colors";

export const ButtonContainer = styled.div`
border:solid 1px  ${(props) => getColor(props.colors).text};
  color: ${(props) => getColor(props.colors).text};
  background: ${(props) => getColor(props.colors).background};
  outline:solid 2px transparent;
  display:inline;
  padding: 10px 30px;
  :hover{
      cursor:pointer;
      outline-color:${(props) => getColor(props.colors).text}22;
  }
`;

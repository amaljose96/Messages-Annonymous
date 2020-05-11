import styled from "styled-components";

export const LoginContainer = styled.div`
  text-align: center;
`;
export const AppTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
export const LoginText = styled.div`
  padding: 50px;
`;
export const FBButtonContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DummyFbButton = styled.div`
  color: #fff;
  background-color: blue;
  width: 200px;
  padding:10px;
  :hover{
      cursor:pointer;
  }
`;

export const ColorPickerContainer=styled.div`
  display:flex;
  padding:20px;
  align-items:center;
  justify-content:space-around;
`;
export const ColorPicker=styled.div`
box-sizing:border-box;
  height:50px;
  width:50px;
  color:${props=>props.text};
  border:solid 1px ${props=>props.text};
  background-color:${props=>props.background};
`;
export const LoginActions=styled.div`
  display:flex;
  padding:0px 30px;
  align-items:center;
  justify-content:space-end;
  width:100%;
  box-sizing:border-box;
`;
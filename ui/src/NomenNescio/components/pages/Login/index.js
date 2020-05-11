import React from "react";
import {
  LoginContainer,
  AppTitleContainer,
  LoginText,
  FBButtonContainer,
  DummyFbButton,
  ColorPickerContainer,
  ColorPicker,
  LoginActions,
} from "./styles";
import AppTitle from "../../AppTitle";
import { colors } from "../../../colors";
import { setUserDetails } from "../../../Store/user/actions";
import { Context } from "../../../Store";
import { useHistory } from "react-router-dom";
import Button from "../../common/Button";
import uuidv4 from "uuid";
import { createUserService } from "./service";

function Login(props) {
  const [FBLogin, setFBLogin] = React.useState(false);
  const { state, dispatch } = React.useContext(Context);
  const history = useHistory();
  if(state.user.id!=="no-user"){
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    let redirectURL = searchParams.get("redirect");
    window.location.href = redirectURL;
  }

  function setColorConfig(colorConfig) {
    setUserDetails({ ...FBLogin, colorConfig })(dispatch);
  }

  function performFBLogin() {
    let UuiD=uuidv4();
    //INSERT STUFF HERE.
    setFBLogin({
      id: UuiD,
    });
    setUserDetails(FBLogin)
  }

  function createUser() {
    let userData = state.user;
    if(userData.id==="no-user"){
      userData=FBLogin;
    }
    createUserService(userData).then((userData)=>{
      window.localStorage.setItem("NN",JSON.stringify(userData));
      let url = new URL(window.location.href);
      let searchParams = new URLSearchParams(url.search);
      let redirectURL = searchParams.get("redirect");
      window.location.href = redirectURL;
    })
  }
  if (!FBLogin) {
    return (
      <LoginContainer>
        <AppTitleContainer>
          <AppTitle />
        </AppTitleContainer>
        <LoginText>Login to Facebook to Continue</LoginText>
        <FBButtonContainer>
          <DummyFbButton
            onClick={() => {
              performFBLogin();
            }}
          >
            Login To Facebook
          </DummyFbButton>
        </FBButtonContainer>
      </LoginContainer>
    );
  } else {
    return (
      <LoginContainer>
        <AppTitleContainer>
          <AppTitle />
        </AppTitleContainer>
        <LoginText>
          Choose a theme by which you’d distinguish yourself
        </LoginText>
        <ColorPickerContainer>
          {colors.map((scheme, index) => {
            return (
              <ColorPicker
                text={scheme.dark}
                background={scheme.light}
                onClick={() => {
                  setColorConfig({ scheme: index, theme: "light" });
                }}
              >
                T
              </ColorPicker>
            );
          })}
        </ColorPickerContainer>
        <LoginActions>
          <Button onClick={createUser}>Continue</Button>
        </LoginActions>
      </LoginContainer>
    );
  }
}
export default Login;

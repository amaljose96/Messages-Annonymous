import React from "react";
import { AppBodyContainer } from "./styles";
import { Context } from "../../Store";
import { useHistory, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

function AppBody(props) {
  const { state } = React.useContext(Context);
  let history = useHistory();
  React.useEffect(() => {
    if (state.user.id === "no-user" && window.location.pathname !== "/login") {
      history.push("login?redirect=" + window.location.href);
    }
  }, [state.user]);
  return (
    <AppBodyContainer>
      <Switch>
        <Route path={`/login`} component={Login} />
      </Switch>
    </AppBodyContainer>
  );
}
export default AppBody;

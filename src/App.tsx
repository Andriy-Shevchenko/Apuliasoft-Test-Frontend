import React, {memo} from "react";
import {Redirect, Switch, Route} from "react-router";
import {createTheme, ThemeProvider} from "@mui/material";
import {ROUTES} from "./constants/routes";
import Dashboard from "./pages/Dashboard";
const theme = createTheme({});

const App = memo(() => {

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Dashboard} />
      </Switch>
    </ThemeProvider>
  );
});

export default App;

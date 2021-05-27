import React from "react";
import Employee from "./page/employeePage";
import { HashRouter, Route, Switch } from "react-router-dom";


function App (){
    return(
        <HashRouter>
          <Switch>
              <Route exact path="/" component= {Employee} />
          </Switch>
          </HashRouter>
    )
}

export default App;

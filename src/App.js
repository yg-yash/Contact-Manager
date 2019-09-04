import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";
import Header from "./components/layouts/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/test";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          {/* we are passing props to header  which is branding*/}
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

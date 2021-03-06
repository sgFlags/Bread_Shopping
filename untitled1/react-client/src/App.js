import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountName: null,
    }
  }
  handleAccount(name) {
    //alert(name);
    this.setState({
      accountName: name
    });
    //alert(this.state.accountName);
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/login" name="Login Page" render={() => <Login handleAccount={(name) => this.handleAccount(name)}/>} />
          <Route path="/" name="Home" component={DefaultLayout} />
         </Switch>
       </HashRouter>
    );
  }
}

export default App;

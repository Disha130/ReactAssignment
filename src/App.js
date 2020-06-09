import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from './components/singin/signin';
import Home from './components/home/home';
import SignUp from './components/signup/signup';
import addArticle from './components/article/addArticle';
import Header from './components/header/header';
import Details from './components/article/articleDetails';
import UserNameDetails from './components/article/usernameDetails/usernameDetails';
import { configureStore } from './store';
import './App.css';

//
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header>
        </Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/article/:slug?' component={addArticle} />
          <Route path='/details/:slug' component={Details} />
          <Route path='/username/:author' component={UserNameDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

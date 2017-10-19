// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './redux/store';
import Main from './Main';
import About from './About';
import NicetyAdd from './NicetyAdd';
import createDatabase from './utils/dbconnection';

const Wrapper = styled.main`
  display: flex;
  flex-align: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: #fed766;
  height: auto;
  color: #272727;
  padding: 40px;
  width: 100%;
`;

const db = createDatabase();

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <BrowserRouter>
    <Provider store={store}>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={() => <Main db={db} />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/nicetyAdd" component={() => <NicetyAdd db={db} />} />
          <Route component={FourOhFour} />
        </Switch>
      </Wrapper>
    </Provider>
  </BrowserRouter>;

export default App;

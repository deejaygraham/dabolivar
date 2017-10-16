// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Main from './Main';
import About from './About';

const Wrapper = styled.main`
  display: flex;
  flex-align: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: #fed766;
  height: 100%;
  color: #272727;
  padding: 40px;
  width: 100%;
`;

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <BrowserRouter>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route component={FourOhFour} />
      </Switch>
    </Wrapper>
  </BrowserRouter>;

export default App;

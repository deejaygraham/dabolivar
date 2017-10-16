// @flow

import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`width: 100%;`;

const Main = () =>
  <Wrapper>
    <Header showSearch />
  </Wrapper>;

export default Main;

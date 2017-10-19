// @flow

import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import NicetiesList from './NicetiesList';

const Wrapper = styled.div`width: 100%;`;

const Main = (props: { db: any }) =>
  <Wrapper>
    <Header showSearch />
    <NicetiesList db={props.db} />
  </Wrapper>;

export default Main;

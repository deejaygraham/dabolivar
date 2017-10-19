// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-align: center;
  justify-content: center;
`;

const Main = (props: { db: any }) =>
  <Wrapper>
    <h1>
      This is coming soon (eventually). Go{' '}
      <a className="link--inline" href="https://niceties.dabolivar.com">
        here
      </a>{' '}
      for something that exists now.
    </h1>
  </Wrapper>;

export default Main;

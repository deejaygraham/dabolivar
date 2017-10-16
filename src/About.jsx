// @flow

import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`width: 100%;`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const TextContainer = styled.div`
  @media all and (min-width: 720px) {
    width: 60%;
  }
  @media all and (min-width: 1200px) {
    width: 40%;
  }
`;

const Par = styled.p`margin-top: 60px;`;

const Main = () =>
  <Wrapper>
    <Header />
    <Content>
      <TextContainer>
        <Par>Hello.</Par>
        <Par>
          There&apos;s not much to this project. It&apos;s a personal bookmark space with a search function and
          it&apos;s main objective is to keep track of nice and interesting things I find in the digital world.
          <br />
          It&apos;s powered by{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>{' '}
          and{' '}
          <a href="http://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </a>, but not because it was necessary (deep overkill). It&apos;s just the thing I&apos;m trying to practice
          the most right now.
        </Par>
      </TextContainer>
    </Content>
  </Wrapper>;

export default Main;

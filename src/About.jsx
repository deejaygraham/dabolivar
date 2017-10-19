// @flow

import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`width: 100%;`;
const Content = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  @media all and (min-width: 720px) {
    width: 60%;
  }
  @media all and (min-width: 1200px) {
    width: 40%;
  }
`;

const LinksContainer = styled.div`
  margin-top: 60px;
  @media all and (min-width: 720px) {
    width: 30%;
  }
  @media all and (min-width: 1200px) {
    width: 50%;
  }
  .about {
    &__linkslist {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    &__linkslistitem {
      margin-top: 20px;
      &:first-child {
        margin-top: 50px;
      }
    }
    &__linkslink {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-items: center;
      color: black;
      transition: all 0.2s ease-in-out;
      max-width: 300px;
      &:hover,
      &:focus {
        outline: none;
        background: rgba(239, 241, 243, 0.5);
      }
    }
    &__icon {
      width: 40px;
      margin-right: 20px;
    }
  }
`;

const Par = styled.p`margin-top: 60px;`;

const Main = () =>
  <Wrapper>
    <Header selectedLink={'about'} />
    <Content>
      <TextContainer>
        <Par>Hello.</Par>
        <Par>
          There&apos;s not much to this project. It&apos;s a personal bookmark space with a search function and
          it&apos;s main objective is to keep track of nice and interesting things I find in the digital world.
          <br />
          It&apos;s powered by{' '}
          <a className="link--inline" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>{' '}
          and{' '}
          <a className="link--inline" href="http://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </a>, but not because it was necessary (deep overkill). It&apos;s just the thing I&apos;m trying to practice
          the most right now.
        </Par>
      </TextContainer>
      <LinksContainer>
        <h2>Links and stuff</h2>
        <ul className="about__linkslist">
          <li className="about__linkslistitem">
            <a
              className="about__linkslink"
              href="https://github.com/ddanielbee/niceties"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="about__icon"
                aria-labelledby="simpleicons-github-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="simpleicons-github-icon">GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>Site&apos;s code on Github</span>
            </a>
          </li>
          <li className="about__linkslistitem">
            <a
              className="about__linkslink"
              href="https://twitter.com/ddanielbee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="about__icon"
                aria-labelledby="simpleicons-twitter-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="simpleicons-twitter-icon">Twitter icon</title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
              <span>140 character rants</span>
            </a>
          </li>
          <li className="about__linkslistitem">
            <a href="https://simpleicons.org/" className="about__linkslink" target="_blank" rel="noopener noreferrer">
              Icons provided by:&nbsp;&nbsp;<strong>simpleicons.org</strong>
            </a>
          </li>
        </ul>
      </LinksContainer>
    </Content>
  </Wrapper>;

export default Main;

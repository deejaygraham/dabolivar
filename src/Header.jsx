// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  .header__title {
    font-size: 80px;
    margin: 0;
    line-height: 80px;
    color: black;
    & > a {
      color: inherit;
    }
  }
  .header__search {
    background: none;
    outline: none;
    font-size: 18px;
    height: 50px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid rgba(39, 39, 39, 0.8);
    width: 100%;
    transition: all 0.3s ease-in-out;
    order: 1;
    margin-top: 10px;
    &:focus {
      transform: scale(1.2);
      background: rgba(239, 241, 243, 0.2);
      @media all and (min-width: 720px) {
        transform: scale(1.2) translateX(-7%);
      }
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  @media all and (min-width: 720px) {
    width: 30%;
    margin-top: 0;
  }
  .nav__link {
    margin-top: 20px;
    align-self: flex-end;
    position: relative;
    z-index: 1;
    color: black;
    &::after {
      content: '';
      height: 1px;
      width: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.2s ease-in-out;
      background: #000000;
      z-index: 1px;
    }
    &:hover,
    &:focus,
    &--selected {
      &::after {
        width: 100%;
      }
    }
    @media all and (min-width: 720px) {
      font-size: inherit;
      margin-top: 0;
    }
  }
`;

const Header = (props: { showSearch?: boolean }) =>
  <Wrapper>
    <h1 className="header__title">
      <Link to="/">Niceties</Link>
    </h1>
    <Nav>
      <Link className={`nav__link ${props.showSearch ? '' : 'nav__link--selected'}`} to="/about">
        About
      </Link>
      {props.showSearch ? <input placeholder="Filter here." type="text" className="header__search" /> : ''}
    </Nav>
  </Wrapper>;
Header.defaultProps = {
  showSearch: false
};

export default Header;

// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setNicetiesSearchTerm } from './redux/actionCreators';

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
      transition: all 0.2s ease-in-out;
      &:focus {
        outline: none;
        background: rgba(239, 241, 243, 0.5);
      }
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
      background: rgba(239, 241, 243, 0.5);
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
    align-self: flex-start;
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
    &:focus {
      outline: none;
      background: rgba(239, 241, 243, 0.5);
    }
    &--selected {
      &::after {
        width: 100%;
      }
    }
    @media all and (min-width: 720px) {
      font-size: inherit;
      margin-top: 0;
      align-self: flex-end;
    }
  }
`;

const Header = (props: {
  showSearch?: boolean,
  nicetiesSearchTerm: string,
  handleNicetiesSearchTermChange: Function,
  selectedLink?: string
}) =>
  <Wrapper>
    <h1 className="header__title">
      <Link to="/">Niceties</Link>
    </h1>
    <Nav>
      <Link className={`nav__link ${props.selectedLink === 'about' ? 'nav__link--selected' : ''}`} to="/about">
        About
      </Link>
      <Link className={`nav__link ${props.selectedLink === 'add' ? 'nav__link--selected' : ''}`} to="/nicetyAdd">
        Add Nicety
      </Link>
      {props.showSearch
        ? <input
            onChange={props.handleNicetiesSearchTermChange}
            value={props.nicetiesSearchTerm}
            placeholder="Filter here."
            type="text"
            className="header__search"
          />
        : ''}
    </Nav>
  </Wrapper>;

Header.defaultProps = {
  showSearch: false,
  selectedLink: ''
};

const mapStateToProps = state => ({ nicetiesSearchTerm: state.nicetiesSearchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleNicetiesSearchTermChange(event) {
    dispatch(setNicetiesSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

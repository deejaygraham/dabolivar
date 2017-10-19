// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  padding: 10px;
  cursor: pointer;
  width: 100%;
  @media all and (min-width: 720px) {
    width: 50%;
  }
  @media all and (min-width: 960px) {
    width: 33.33333333%;
  }
  @media all and (min-width: 1200px) {
    width: 25%;
  }
  .nicety {
    &__link {
      display: block;
      color: black;
      font-weight: 900;
      transition: all 0.3s ease-in-out;
      padding: 10px;
      &:focus,
      &:hover {
        outline: none;
        transform: perspective(500px) translateZ(10px) translateX(-5px) translateY(-5px);
        background: rgba(239, 241, 243, 0.5);
      }
    }
    &__number {
      font-weight: inherit;
      display: block;
      font-size: 24px;
    }
    &__title {
      font-weight: inherit;
      font-size: 24px;
      margin-top: 15px;
    }
  }
`;

const Nicety = (props: { nicety: NicetyType, position: number }) =>
  <Wrapper>
    <a className="nicety__link" href={props.nicety.link} target="_blank" rel="noopener noreferrer">
      <span className="nicety__number">
        {props.position}
      </span>
      <h3 className="nicety__title">
        {props.nicety.title}
      </h3>
    </a>
  </Wrapper>;

export default Nicety;

import styled from 'styled-components';

const DefaultButton = styled.button`
  padding: 20px 10px;
  background: black;
  color: #eff1f3;
  font-size: 20px;
  border: none;
  width: 100%;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  &::after {
    content: '';
    width: 100%;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    background: #eff1f3;
    opacity: 0.5;
    z-index: -1;
    transition: all 0.2s ease-in-out;
  }
  &:hover,
  &:focus {
    outline: none;
    color: black;
    background: transparent;
    &::after {
      height: 100%;
    }
  }
  &.button--submit {
    margin-top: 60px;
    @media all and (min-width: 720px) {
      max-width: 300px;
    }
  }
`;

export default DefaultButton;

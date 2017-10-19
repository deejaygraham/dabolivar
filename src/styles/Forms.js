import styled from 'styled-components';

const DefaultInput = styled.input`
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
      transform: scale(1.1) translateX(7%);
    }
  }
`;

export default DefaultInput;

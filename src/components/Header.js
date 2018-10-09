import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  height: 10vh;
  color: black;
  background: white;
  font-family: 'Gothic A1';
  font-weight: 900;
  font-size: 4em;
  padding: 40px 20px 20px 30px;
  border-bottom: solid 0.4px grey;
  margin-bottom: 20px;
`;
export default class Header extends Component {
  render() {
    return <HeaderStyled>No Club</HeaderStyled>;
  }
}

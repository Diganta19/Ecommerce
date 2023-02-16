import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Nav from "./Nav"

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/"><img src='./images/logo.png' alt='my store logo'/></NavLink>
        <Nav />
    </MainHeader>
  )
}

export default Header;

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
background-color: ${({theme})=>theme.colors.bg};

.logo{
    height: 5rem;
}
`;



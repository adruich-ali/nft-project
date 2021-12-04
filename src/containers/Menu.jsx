import React from 'react'

import styled from 'styled-components'

const Menu = ({handelNavToggled}) => {
    return (
        <StyledMenu>
            <StyledLink href="#home" onClick={handelNavToggled}>Home</StyledLink>
            <StyledLink href="#collections" onClick={handelNavToggled}>Collections</StyledLink>
            <StyledLink href="#discover" onClick={handelNavToggled}>Discover</StyledLink>
            <StyledLink href="#about" onClick={handelNavToggled}>About</StyledLink>
        </StyledMenu>
    )
}

export default Menu;

const StyledMenu = styled.div`
 
  display: none;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    133deg,
    rgba(15, 2, 2, 1) 21%,
    #220202 70%,
    #330606 92%
  );
  opacity:.8;
  padding: 1rem;
  position: fixed;
  top: 50px;
  right: 2rem;
  height: 40vh;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);
@media screen and (max-width: 768px){
    display: flex;
    position: fixed;
  
}
`;
const StyledLink = styled.a`
padding-top: 1rem;
color: white;
text-decoration: none;
font-size: 15px;
transition: none.2s all ease-in-out;
user-select: none;
&:hover{
    transition: .2s all ease-in-out;
    color:  rgba(162, 17, 18, 1);
}
`;

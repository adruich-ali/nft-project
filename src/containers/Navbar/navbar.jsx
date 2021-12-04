import React, { useState } from 'react';
import styled from 'styled-components';

import {Menu, ConnectBtn} from '../index'
import {FaBars,FaTimes} from 'react-icons/fa';
import logo from '../../assets/logo.png'


const navbar = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [navToggled , setNavToggled] = useState(false);
        const handelNavToggled = () => {
            setNavToggled(!navToggled);
        }
    return (
        <>
        <Nav>
            <NavLink href="#home">
                <img src={logo} alt="" />
            </NavLink>
            
            <NavMenu>
                <NavLink href="#home">
                    Home
                </NavLink>
                <NavLink href="#discover">
                Discover
                </NavLink>
                <NavLink href="#collections">
                    Collections
                </NavLink>
                <NavLink href="#artists">
                    Artists
                </NavLink>
                <NavLink href="#about">
                    About
                </NavLink>
            </NavMenu>
            <ConnectBtn />

        </Nav>
        {navToggled ?  <StyledToggle onClick={handelNavToggled}/> : <CloseToggle onClick={handelNavToggled} />}
            {navToggled ? <Menu handelNavToggled={handelNavToggled} /> : null}
        </>
    )
}

export default navbar
const Nav =styled.nav`
  background: linear-gradient(
    133deg,
    rgba(15, 2, 2, 1) 21%,
    #220202 70%,
    #330606 92%
  );
  /* make this a fixed navbar at the top, with fixed height */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 64px;
  /* add a nice shadow effect */
  z-index: 1;
  box-shadow:
    0 10px 20px rgba(0,0,0,0.19),
    0 6px 6px rgba(0,0,0,0.23);
  /* center the inner container */
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px){
        box-shadow :none ;
        background: linear-gradient(
    133deg,
    rgba(15, 2, 2, 1) 21%,
    #220202 70%,
    #330606 92%
  );
}
`;
const NavLink = styled.a`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
img{
    padding-top: 2px;
    width: 100%;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px){
        display: none; 
}
`; 

const NavBtn =  styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none; 
}
`;

const NavBtnLink = styled.a`
border-radius: 4px;
background: transparent ;
padding: 10px 22px;
color: #fff;
border:1px solid white ;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
    transition: all 0.2s ease-in-out;
    background:#A21112;
    color: #fff;
}
`;

const CloseToggle =  styled(FaBars)`
z-index: 1000;
    position: fixed ;
    display: none;
    color: white;

    @media screen and (max-width: 768px){
        display: block;
        position: fixed;
        top: 0;
        right: 0 ;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }`;

const StyledToggle = styled(FaTimes)`
z-index: 1000;
    position: fixed ;
    display: none;
    color: white;

    @media screen and (max-width: 768px){
        
        display: block;
        position: fixed;
        top: 0;
        right: 0 ;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
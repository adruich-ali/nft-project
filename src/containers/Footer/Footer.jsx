import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <FooterSection>
            <FooterLinks>
                <FooterLogo>
                    <a href="#home">
                    <img src={Logo} alt="logo" />
                    </a>
                    <p>SKYNFT Create and sell you Nft's</p>
                 

                </FooterLogo>
                <Footerlinks>
                        <h4>Links</h4>
                        <p>Overons</p>
                        <p>Social Media</p>
                        <p>Counters</p>
                        <p>Contact</p>
                </Footerlinks>
                <Footerlinks>
                        <h4>Company</h4>
                        <p>Terms 7 Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Counters</p>
                        <p>Contact</p>
                </Footerlinks>
                <Footerlinks>
                        <h4>Get in Touch</h4>
                        <p>Casablanca, Morocco</p>
                        <p>+212631958700</p>
                        <p>Contact@Squid.com</p>
                </Footerlinks>
            </FooterLinks>
            <FooterCopyright>
                <p>©Adruich, All rights reserved.</p>
            </FooterCopyright>
        </FooterSection>
    )
}

export default Footer


const FooterSection = styled.div`
    width: 100%;
    padding-top: 1rem;
    padding-left: 4rem;
    padding-right: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(133deg, rgba(15,2,2,1) 21%, #1b0404 70%, #0c0101 92%);

`;

const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;
    @media screen and (max-width: 491px) {
        display: flex;
        flex-direction:column;
    }`;
const FooterLogo = styled.div`

    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
        text-decoration: none;
    }
    p{

    font-size: 12px;
    line-height: 15px;
    color: #fff;
    }
    @media screen and (max-width: 491px) {
    padding-top: 1rem;

    }

`;
const Footerlinks = styled.div`
padding-top: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    h4{
        font-size: 14px;
        line-height: 17px;
        font-family: var(--font-family);
        color: #7e7777;
        margin-bottom: 0.9rem;
    }
    p{
    font-size: 12px;
    line-height: 15px;
    font-family: var(--font-family);
    color: #fff;
    margin: 0.5rem 0;
    cursor: pointer;
    &:hover{
        color: #770505;
        transition: all .3s ease;
    }
    }

`;
const FooterCopyright = styled.div`
    margin-top: 3rem;
    text-align: center;
    width: 100%;
    color: white;
    padding-bottom: 1rem;
    `;





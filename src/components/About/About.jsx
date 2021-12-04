import React from 'react'
import styled from 'styled-components';
import AboutCard from '../../containers/AboutCard/AboutCard'
import {Buy,Collection,Note,Wallet}from './index';

const About = () => {
    return (
        <AbouSection >
            <DIV1  image={Wallet} title="Connect Your Wallet" desc="Once you've set up your wallet coice, connect it to NFTSKYby checking this link" />
            <DIV2  image={Collection} title="Create your collection" desc="Click on create and   then setup your collection , Add social link a description and others."/>
            <DIV3  image={Buy} title="Add your NFTS" desc="Upload your work (image,video,audio, or 3d art, add a title and description and unlock content."/>
            <DIV4  image={Note} title="List Nft's Fro Sale" desc="Choose between auction, Fixed-price listings, and declining-price listings We help you sell them"/>
        </AbouSection>
    )
}

export default About;

const AbouSection = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(1, 1fr);
grid-column-gap: 27px;
grid-row-gap: 37px;
padding-left: 4rem;
padding-right: 4rem;
padding-bottom: 10rem;
@media screen and (max-width:800px){
    display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(1, 1fr) repeat(5, 0);
grid-column-gap: 27px;
grid-row-gap: 37px;
}
@media screen and (max-width:768px){
     display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 27px;
grid-row-gap: 37px;
}
@media screen and (max-width: 480px) {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0000px;
grid-row-gap: 37px;
}
`;

const DIV1 = styled(AboutCard)`
grid-area: 1 / 1 / 2 / 2; 
`;
const DIV2 = styled(AboutCard)`
grid-area: 1 / 2 / 2 / 3; 
`;
const DIV3 = styled(AboutCard)`
grid-area: 1 / 3 / 2 / 4; 
`;
const DIV4 = styled(AboutCard)`
grid-area: 1 / 4 / 2 / 5; 
`;

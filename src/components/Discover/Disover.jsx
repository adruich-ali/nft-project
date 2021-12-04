import React from 'react'
import styled from 'styled-components'
import {DiscoverCard} from '../../containers/index'
import {NFT1,NFT2,Avatar,NFT3,NFT4,NFT5,NFT6,NFT7,NFT8} from'./index';

const Disover = () => {
    return (
        <DiscoverZone >          
            <DIV1 NftImg={NFT1} Name="Red" avatar={Avatar} Creatoree="Ali Adruich" Dateend="27H 23Min"/>
            <DIV2 NftImg={NFT2} Name="House Of demons" avatar={Avatar} Creatoree="Ali Adruich" Dateend="27H 23Min"/>
            <DIV3 NftImg={NFT3} Name="ouse Of demons" avatar={Avatar} Creatoree="Ali Adruich" Dateend="27H 23Min"/>
            <DIV4 NftImg={NFT4} Name="ouse Of demons" avatar={Avatar} Creatoree="Ali Adruich" Dateend="27H 23Min"/>
            <DIV5 NftImg={NFT5} Name="ouse Of demons" avatar={Avatar} Creatoree="Ali Adruich" Dateend="27H 23Min"/>
            <DIV6 NftImg={NFT6} Name="ouse Of demons" avatar={Avatar} Creatoree="Ali Adruich" Dateend="27H 23Min"/>
            <DIV7 NftImg={NFT7} Name="ouse Of demons" avatar={Avatar} Creatoree="Ali Adruich" Dateend="27H 23Min"/>
            <DIV8 NftImg={NFT8} Name="ouse Of demons" avatar={Avatar} Creatoree="Ali Adruich" Dateend="27H 23Min"/>
        </DiscoverZone>
    )
}

export default Disover

const DiscoverZone = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 27px;
grid-row-gap: 37px;
padding-left: 4rem;
padding-right: 4rem;
padding-bottom: 4rem;

@media screen and (max-width:800px){
    display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr) repeat(5, 0);
grid-column-gap: 27px;
grid-row-gap: 37px;
}
@media screen and (max-width:768px){
     display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 27px;
grid-row-gap: 37px;
}
@media screen and (max-width: 480px) {
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0000px;
grid-row-gap: 37px;
}

padding-left: 4rem;
padding-right: 4rem;

`;
const DIV1 = styled(DiscoverCard)`
 grid-area: 1 / 1 / 2 / 2; 
`;
const DIV2 = styled(DiscoverCard)`
 grid-area: 1 / 2 / 2 / 3; 
`;
const DIV3 = styled(DiscoverCard)`
grid-area: 1 / 3 / 2 / 4; 
`;
const DIV4 = styled(DiscoverCard)`
  grid-area: 1 / 4 / 2 / 5; 
`;
const DIV5 = styled(DiscoverCard)`
 grid-area: 2 / 1 / 3 / 2;
`;
const DIV6 = styled(DiscoverCard)`
 grid-area: 2 / 2 / 3 / 3; 
`;
const DIV7 = styled(DiscoverCard)`
 grid-area: 2 / 3 / 3 / 4;
`;
const DIV8 = styled(DiscoverCard)`
 grid-area: 2 / 4 / 3 / 5;  
`;
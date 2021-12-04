import React from 'react'
import styled from 'styled-components';
import Nft from '../../assets/NFT1.png'
import avatar from '../../assets/Avatr.jpg'

const DiscoverCard = ({NftImg,Name,avatar,Creatoree,Dateend}) => {
    return (
        <CardDiscover>
            <Imagezone>
                <img src={NftImg} alt="Nft" />
            </Imagezone>
            <DescriptionZone>
                <LeftSide>
                        <h4>{Name}</h4>
                        <Creatore>                        
                        <img src={avatar} alt="" />
                        <p>{Creatoree}</p>
                        </Creatore>
                </LeftSide>
                <RightSide>
                    <p>{Dateend}</p>
                </RightSide>
            </DescriptionZone>
            <ButtonsZone>
                    <LeftButton >
                        <a  >Details</a>     
                    </LeftButton>
                    <RightButton >
                        <a >Buy</a>    
                    </RightButton>
            </ButtonsZone>
        </CardDiscover>
    )
}

export default DiscoverCard;

const CardDiscover = styled.div`
margin-top: 2rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background: transparent;
width: 250px;
height: 310px;
border:1px solid ;
border-radius: 10px;
border-color: linear-gradient(90deg, rgba(162,17,18,1) 0%, rgba(162,17,18,0.5) 50%, rgba(162,17,18,0) 100%);
box-shadow: inset -1px 3px 8px 5px #310f0f , 2px 5px 16px 0px #550b0b , 5px 5px 6px 5px rgba(0,0,0,0);
`;
const Imagezone = styled.div`
padding-left:.5rem;
padding-right: .5rem;
padding-top:.3rem;

width: 100%;

img{
    width: 100%;
}
`;
const DescriptionZone = styled.div`
display: flex;
flex-direction: row;




`;
const LeftSide = styled.div`
width: 60%;
color: white;
padding-left: 0rem;
h4{
    color: white;
    font-size: .9rem;
}

`;
const Creatore = styled.div`
display: flex;
flex-direction: row;
width: 100%;
img{
    width: 25px;
    height: 25px;;
    border-radius: 10px;
}
p{
    padding-left: .2rem;
    color: #a19d9d;
}
`;
const RightSide = styled.div`
color: white;
right: 0;
p{
   padding-left: 2rem;
   font-size: .8rem;
}
`;

const ButtonsZone =styled.div`
display:flex;
flex-direction: row;
align-items: center;
padding-top: 1rem;
justify-content: space-around;

`;
const LeftButton = styled.div`
padding-left: 2rem;
padding-right: 2rem;
cursor: pointer;
padding-top: .2rem ;
padding-bottom: .2rem;;
border-radius: 8px;
a{
    text-decoration: none;
    color: white;
}
&:hover{
border: 1px solid #470c0c ;
}
`;
const RightButton = styled.div`
background: #470c0c;
margin-left:1rem;
padding-left: 2rem;
padding-right: 2rem;
cursor: pointer;
padding-top: .2rem ;
padding-bottom: .2rem;;
border-radius: 8px;
a{
    text-decoration: none;
    color: #c91818;
}
`;
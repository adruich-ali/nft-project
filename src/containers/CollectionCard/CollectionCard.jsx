import React from 'react'
import styled from 'styled-components';
import Art1 from '../../assets/ART1.png'
import Avatar from '../../assets/Avatr.jpg'

const CollectionCard = ({Art, Avatar, createdby,itemsnum,title}) => {
    return (
        <CardCollection>
            <Imagezone>
                <img src={Art} alt="Nft" />
            </Imagezone>
            <DisceprionCard>
                <img src={Avatar} alt="" />
                <p>{title}</p>
            </DisceprionCard>   
            <ButtonsZone>
                    <LeftButton >
                        <a href="#" >{createdby}</a>     
                    </LeftButton>
                    <RightButton >
                        <a href="#">{itemsnum}</a>    
                    </RightButton>
            </ButtonsZone>
        </CardCollection>
    )
}

export default CollectionCard ;


const CardCollection = styled.div`
margin-top: 2rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background: black;
width: 250px;
height: 200px;
border:1px solid ;
border-radius: 10px;
border-color: linear-gradient(90deg, rgba(162,17,18,1) 0%, rgba(162,17,18,0.5) 50%, rgba(162,17,18,0) 100%);
box-shadow: inset -1px 3px 8px 5px #310f0f , 2px 5px 16px 0px #550b0b , 5px 5px 6px 5px rgba(0,0,0,0);
`;
const Imagezone = styled.div`
width: 100%;
img{
    padding: .7rem;
    width: 100%;
}
`;
const DisceprionCard = styled.div`
display: flex;
margin-top: -2rem;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;

img{
    width: 20px;
    height: 20px;
    border-radius: 15px;
}
p{
    font-size: .8rem;
}
`;
const ButtonsZone = styled.div`
  background: linear-gradient(
    133deg,
    rgb(51, 14, 14) 62%,
    rgb(51, 14, 14) 62%,
    rgb(54, 19, 19) 100%
  );
height:100% ;
width: 100%;
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
const LeftButton = styled.div`
padding-left: 2rem;
padding-right: 2rem;
cursor: pointer;
padding-top: .2rem ;
padding-bottom: .2rem;;
border-radius: 8px;
width: 100%;
a{
    text-decoration: none;
    color: white;
    font-size: .5rem;
}
&:hover{
border: 1px solid #470c0c ;
}
`;
const RightButton = styled.div`
background: #470c0c;
margin-left:1rem;
margin-right:.8rem;
padding-left: 2rem;
padding-right: 2rem;
cursor: pointer;
padding-top: .2rem ;
padding-bottom: .2rem;;
border-radius: 8px;
a{
    text-decoration: none;
    color: #c91818;
    font-size: 0.8rem;
}`;
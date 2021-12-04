import React from 'react'
import styled from 'styled-components';
import Hero from '../../assets/hero.png'

const Header = () => {
    return (
        <HomeContainer >
            <LeftSide>
                <h2>Discover, Collect And Sell</h2>
                <h2>DIGITAL <span>NFT'S</span></h2>
                <p>Be the first gow gonna collect our new and unique generation of the digital Nft's that gonna be the must trading nft's on the market place with unique & special collection . </p>
                <Buttons>
                    <DiscoverButton>
                        <a href="#discover">Dicover</a>
                    </DiscoverButton>
                    <CollectionsButton>
                        <a href="#collections">Collections</a>
                    </CollectionsButton>
                </Buttons>
                <Addons>    
                    <Addon>
                    <h3>+100</h3>
                    <p>Artwork</p>
                    </Addon>
                    <Addon>
                    <h3>+40</h3>
                    <p>Artists</p>
                    </Addon>
                    <Addon>
                    <h3>+50</h3>
                    <p>Collections</p>
                    </Addon>
                </Addons>
            </LeftSide>
            <RightSide>
                <img src={Hero} alt="Nft" />
            </RightSide>
        </HomeContainer>
    )
}

export default Header;
const HomeContainer = styled.section`
height:100%;
background: none;
padding-right: 4rem;
padding-left: 4rem;
padding-top: 8rem;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
justify-items: center;
padding-bottom: 1.5rem;
@media screen and (max-width: 768px){
margin-top: 5rem;
padding-right: 1rem;
padding-left: 1rem;
flex-direction: column;
justify-content: space-between;
padding-top: 2rem;

}
`;
const LeftSide = styled.div`
width: 70%;
color: white;
display: flex;
flex-direction: column;
    h2{
    font-size: 2.5rem;
    text-transform: uppercase;
    span{
        color: #C70002;
    }
}
    p{
        width: 75%;
        font-size: .9rem;
        color: white;
    }

@media screen and (max-width: 768px){
width: 80%;
color: white;
display: flex;
flex-direction: column;
h2{
    font-size: 3rem;
    text-transform: uppercase;
    span{
        color: red;
    }
}
p{
        margin-top: 0.3rem;
        width: 80%;
        font-size: .9rem;
        color: white;
    }
}
`;
const RightSide = styled.div`
display: flex;
justify-content: center;
align-items: center;
img{
    width: 80%;
    }
    @media screen and (max-width: 768px){
        padding-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 80%;
        }

    }
`;
const Buttons = styled.div`
padding-top: 1.5rem ;
display: flex;
flex-direction: row;
padding-left: 1rem;
justify-content: flex-start;
align-items: center;
@media screen and (max-width: 768px){
    padding-left: 0rem;
}
`;
const DiscoverButton = styled.div`
  background: linear-gradient(
    133deg,
    rgba(15, 2, 2, 1) 21%,
    #220202 70%,
    #330606 92%
  );
display: flex;
justify-content: center;
align-items: center;
border: 1px solid white;
padding-left: 1.5rem;
padding-right: 1.5rem;
padding-top: .5rem;
padding-bottom: .5rem;
border-radius: 15px;
&:hover{
    background: #330404;
    transition: all .2s ease-in ;
}

a{
    text-decoration: none;
    color: white;
}
@media screen and (max-width: 768px){
    padding-left: 2rem;
}
`;
const CollectionsButton = styled.div`

display: flex;
justify-content: center;
align-items: center;
margin-left: 1rem;
padding-left: 1.5rem;
padding-right: 1.5rem;
padding-top: .5rem;
padding-bottom: .5rem;
border-radius: 15px;
border: 1px solid white;

&:hover{
    border: 1px solid white;
    
}
a{
    text-decoration: none;
    color: white;
    transition: all .4s ease;
}
@media screen and (max-width: 768px){
    padding-left: 2rem;
}
`;
const Addons = styled.div`
padding-top:5rem;
width: 50%;

display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
justify-items: center;


@media screen and (max-width: 768px){
    padding-top:2rem;
width: 80%;

}
`;
const Addon = styled.div`
h3{
    font-size: 1.8rem;
}
p{
    padding-left:1rem ;
    margin-top:-.4rem ;
    font-size: 1rem;
}
`;



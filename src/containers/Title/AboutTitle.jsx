import React from 'react';
import styled from 'styled-components'

const AboutTitle = ({title,text}) => {
return(
        <TitleZone>
            <h2>{title}</h2>
        
        </TitleZone>
    )
}

export default AboutTitle

const TitleZone = styled.div`
margin-top: 4rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 10rem;
h2{
    color: white;
    font-size: 2rem;
    font-weight: 700;
    @media screen and (max-width:768px){
    font-size: 1rem;

}
@media screen and (max-width: 480px) {
    font-size:1rem;
} 
    
}
@media screen and (max-width:768px){
margin-top: 4rem;
width: 80%;
display: flex;
padding-left: 4rem;
align-items: center;
justify-content: center;
    
}
`;

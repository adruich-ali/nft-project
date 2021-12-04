import React from 'react'
import styled from 'styled-components'

const Title = ({title,text}) => {
    return (
        <TitleZone>
            <h2>{title}</h2>
            <p>{text}</p>
        </TitleZone>
    )
}

export default Title


const TitleZone = styled.div`
margin-top: 4rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding-left: 4rem;
height: 10rem;
margin-bottom: -3rem;
h2{
    color: white;
    font-size: 3rem;
    font-weight: 700;
    
}
p{
    margin-top:-.6rem ;
    color: white;
    font-size: .9rem;
}
`;

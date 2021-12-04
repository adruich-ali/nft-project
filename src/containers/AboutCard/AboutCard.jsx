import React from 'react'
import styled from 'styled-components';

const AboutCard = ({image,title,desc}) => {
    return (
        <Card>
            <HeaderCard>
                <img src={image}alt="icon" />
            </HeaderCard>
            <FooterPage>
                <Title>
                    <h3>{title}</h3>
                </Title>
                <DescZone>
                    <p>
                      {desc}
                    </p>
                </DescZone>
            </FooterPage>
        </Card>
    )
}

export default AboutCard;

const Card = styled.div`

margin-top: 2rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

width: 250px;
height: 280px;
border:1px solid red;
border-radius: 10px;
border-color: linear-gradient(90deg, rgba(162,17,18,1) 0%, rgba(162,17,18,0.5) 50%, rgba(162,17,18,0) 100%);
background: rgb(15,2,2);
background: radial-gradient(circle, rgba(69,11,11,1) 0%, rgba(24,7,10,1) 100%);
`;
const HeaderCard = styled.div`
padding-bottom:1rem;
display: flex;
align-items: center;
justify-content: center;
padding-top: 2rem;
height: 30%;
img{
  
}

`;
const FooterPage = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 1rem;
`;
const Title = styled.div`
padding-bottom: 5px;
h3{
    color: white;
}
`;
const DescZone = styled.div`
width: 100%;
display:flex;
align-items: center;
justify-content: center;
padding:0px 8px 0px 8px ;
p{
    color: gray;
}
`;

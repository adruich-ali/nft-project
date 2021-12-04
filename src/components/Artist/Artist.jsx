import React from 'react'
import styled from 'styled-components'
import { AristCard } from '../../containers'
import {Art5,Art6,Art7,Art8} from '../../containers/CollectionCard/index'
import AVATAR from '../../assets/Avatr.jpg'

const Artist = () => {
    return (
        <ArtistSection>
            
                <AristCard Art={Art8} Avatar={AVATAR} title="HugePunks" />
                <AristCard Art={Art5} Avatar={AVATAR} title="TrashPunks" />
                <AristCard Art={Art6} Avatar={AVATAR} title="Monkeys" />
                <AristCard Art={Art7} Avatar={AVATAR} title="PunkyPunks" />

        </ArtistSection>
    )
}

export default Artist

const ArtistSection = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(1, 1fr);
grid-column-gap: 27px;
grid-row-gap: 37px;
padding-left: 4rem;
padding-right: 4rem;
padding-bottom: 3rem;
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
grid-template-rows: repeat(1, 1fr);
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
`;

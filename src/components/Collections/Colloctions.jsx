import React from 'react';
import styled from 'styled-components';
import {CollectionCard} from '../../containers/index';
import {Art1,Art2,Art3,Art4,Art5,Art6,Art7,Art8} from '../../containers/CollectionCard/index'
import AVATAR from '../../assets/Avatr.jpg'


const Colloctions = () => {
    return (
        <CollectionsZone >
            <DIV1 title="TrashPunks"Art={Art1} Avatar={AVATAR} createdby="By Adruich" itemsnum="+100 " />
            <DIV2 title="SquidPunks"Art={Art2} Avatar={AVATAR} createdby="By Yasser " itemsnum="+250 " />
            <DIV3 title="Monkiis"Art={Art3} Avatar={AVATAR} createdby="By Yassine " itemsnum="+150 " />
            <DIV4 title="Hmpunks"Art={Art4} Avatar={AVATAR} createdby="By Iliass  " itemsnum="+350 " />

        </CollectionsZone>
    )
}

export default Colloctions;

const CollectionsZone = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(1, 1fr);
grid-column-gap: 27px;
grid-row-gap: 37px;
padding-left: 4rem;
padding-right: 4rem;
padding-bottom: 0rem;
@media screen and (max-width:800px){
    display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr) repeat(5, 0);
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
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0000px;
grid-row-gap: 37px;
}
`;

const DIV1 = styled(CollectionCard)`
 grid-area: 1 / 1 / 2 / 2; 
`;
const DIV2 = styled(CollectionCard)`
 grid-area: 1 / 2 / 2 / 3; 
`;
const DIV3 = styled(CollectionCard)`
grid-area: 1 / 3 / 2 / 4; 
`;
const DIV4 = styled(CollectionCard)`
  grid-area: 1 / 4 / 2 / 5; 
`;
const DIV5 = styled(CollectionCard)`
 grid-area: 2 / 1 / 3 / 2;
`;
const DIV6 = styled(CollectionCard)`
 grid-area: 2 / 2 / 3 / 3; 
`;
const DIV7 = styled(CollectionCard)`
 grid-area: 2 / 3 / 3 / 4;
`;
const DIV8 = styled(CollectionCard)`
 grid-area: 2 / 4 / 3 / 5;  
`;
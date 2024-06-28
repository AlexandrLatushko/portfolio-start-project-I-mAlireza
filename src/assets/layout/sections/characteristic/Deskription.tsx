import styled from "styled-components";
import { BlockDescriptions } from "./blockDescriptions/BlockDescriptions";
import  PhotoPerson  from './../../../images/Mask group.jpg'

type Props = {
    
};

export const Deskription = (props: Props) => {
    return (
        <StyledСharacteristic>
            <BlockDescriptions/>
            <PhohoPerson src={PhotoPerson} alt="PhotoPerson"/>
        </StyledСharacteristic>
    );
};

const StyledСharacteristic = styled.section`
    height: 100%;
    background-color: #A6BCFA;
    display: flex;

`

const PhohoPerson = styled.img`
    
`
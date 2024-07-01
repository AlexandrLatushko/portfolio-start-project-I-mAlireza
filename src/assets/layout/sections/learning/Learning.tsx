import styled from "styled-components";
import { SectionsTitle } from "../../../../components/SectionsTitle";
import { BlockLearning } from "./blockLearning/BlockLearning";

type Props = {
    
};
export const Learning = (props: Props) => {
    return (
        <StyledLearning>
            <SectionsTitle name="Learning"/>
            <BlockLearning/>
            
        </StyledLearning>
    );
};

const StyledLearning = styled.section`
    height: 100%;
    background-color: #A5BBF8;
    padding: 65px;
`
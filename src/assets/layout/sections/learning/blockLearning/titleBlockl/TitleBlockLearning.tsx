import styled from "styled-components";

type TitleBlockLearningPropsType = {
    name:string
};
export const TitleBlockLearning = (props: TitleBlockLearningPropsType) => {
    return (
        <StyledTitleBlockLearning>
            {props.name}
        </StyledTitleBlockLearning>
    );
};

const StyledTitleBlockLearning = styled.h3`
    
`
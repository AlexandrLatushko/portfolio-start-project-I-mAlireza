
import styled from 'styled-components';
type SectionsTitlePropsType = {
    name:string
};

export const SectionsTitle = (props: SectionsTitlePropsType) => {
    return (
        <StyledSectionsTitle>{props.name}</StyledSectionsTitle>
    );
};

const StyledSectionsTitle = styled.h2`
    text-align: center;
`
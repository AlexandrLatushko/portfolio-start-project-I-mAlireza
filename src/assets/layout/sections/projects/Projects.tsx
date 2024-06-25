import styled from "styled-components";
import { SectionsTitle } from "../../../../components/SectionsTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { ProjectList } from "./projectList/ProjectList";


type Props = {
    
};
export const Projects = (props: Props) => {
    return (
        <StyledProjects>
            <SectionsTitle name="Projects"/>
            <TabMenu/>
            <ProjectList/>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    height: 100%;
    background-color: #f6c3c3;
    padding: 70px;
`
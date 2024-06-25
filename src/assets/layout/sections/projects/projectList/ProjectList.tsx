import { Project } from "../project/Project";
import projPhoto1 from "../../../../images/Proj1.jpg"
import projPhoto2 from "../../../../images/Proj2.jpg"
import projPhoto3 from "../../../../images/Proj3.jpg"
import projPhoto4 from "../../../../images/Proj4.jpg"
import styled from "styled-components";


type Props = {
    
};
export const ProjectList = (props: Props) => {
    return (
        <ListProj>
            <li> 
                <Project src={projPhoto1} description="Story motion for sale English cources"/>
            </li>
            <li> 
                <Project src={projPhoto2} description="Story motion for sale English cources"/>
            </li>
            <li> 
                <Project src={projPhoto3} description="Story motion for sale English cources"/>
            </li>
            <li> 
                <Project src={projPhoto4} description="Story motion for sale English cources"/>
            </li>
            <li> 
                <Project src={projPhoto1} description="Story motion for sale English cources"/>
            </li>
            <li> 
                <Project src={projPhoto2} description="Story motion for sale English cources"/>
            </li>
            <li> 
                <Project src={projPhoto3} description="Story motion for sale English cources"/>
            </li>
            <li> 
                <Project src={projPhoto4} description="Story motion for sale English cources"/>
            </li>
        </ListProj> 
    );
};

const ListProj = styled.ul`
    display: flex;
    justify-content:space-around ;
    
    flex-wrap: wrap;
`
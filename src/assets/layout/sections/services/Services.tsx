import styled from "styled-components";
import { SectionsTitle } from "../../../../components/SectionsTitle";
import { Servic } from "./servic/Servic";

type Props = {
    
};

export const Services = (props: Props) => {
    return (
        <SryledServices>
            <SectionsTitle name="Services"/>
            <Servic/>
        </SryledServices>
    );
};

const SryledServices = styled.section`
    height: 100%;
    background-color: #c3e3c5;
    padding: 65px;
`
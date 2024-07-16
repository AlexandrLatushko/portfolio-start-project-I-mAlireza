// @flow 
import * as React from 'react';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import styled from 'styled-components';
import { FormBlock } from './formBlock/FormBlock';
import { ContactBlock } from './contartBlock/ContacktBlock';

type Props = {
    
};
export const Contackt = (props: Props) => {
    return (
        <StyledContackt>
            <SectionsTitle name={'Contact Us'}/>
            <ContacktContaner>
                <FormBlock/>
                <ContactBlock/>
            </ContacktContaner>
        </StyledContackt>
    );
};

const StyledContackt = styled.div`

`

const ContacktContaner = styled.div`
    display: flex;
    justify-content: center;
`
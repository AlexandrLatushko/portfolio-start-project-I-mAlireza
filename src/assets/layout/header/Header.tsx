import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../../components/logo/Logo';
import { SvgAi } from '../../images/svg/SvgAi';

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <ul>
                <li>
                    <a href='#'>Home</a>
                    <a href='#'>Projects</a>
                    <a href='#'>About</a>
                    <a href='#'>Content</a>
                </li>
            </ul>
            <SvgAi/>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #00fa71ed;
`

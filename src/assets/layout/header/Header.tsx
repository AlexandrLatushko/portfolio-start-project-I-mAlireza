import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../../components/logo/Logo';
import { MoonSvg } from '../../images/svg/MoonSvg';

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <nav>
                <MenuHeader>
                    <li>
                        <a href='#'>Home</a>
                        <a href='#'>Projects</a>
                        <a href='#'>About</a>
                        <a href='#'>Content</a>
                    </li>
                </MenuHeader>
            </nav>
            <MoonSvg/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #00fa71ed;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        margin-left: auto;

    }

`

const MenuHeader = styled.ul`

`

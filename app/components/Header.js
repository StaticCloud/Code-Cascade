'use client'

import styled from 'styled-components'

const HeaderWrapper = styled.header`
    position: fixed;
    display: flex;


`;

const HamburgerWrapper = styled.div``;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
    position: relative;

    &:before,
    &:after {
        content: '';
        width: 25px;
        height: 25px;
        position: absolute;
    }

    &:before {
        top: 0;
        left: 0;
        background-color: rgb(107, 72, 235);
    }

    &:after {
        right: 0;
        bottom: 0;
        border-left: 25px solid rgb(240, 150, 66);
        background-color: rgb(233, 107, 195);
    }
`;

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
    const pathName = usePathname()

    return (
        <HeaderWrapper>
            <Icon/>
            <HamburgerWrapper>
                <input type="checkbox" name="nav-toggle"/>
                <label for="nav-toggle"/>
            </HamburgerWrapper>
        </HeaderWrapper>
    )
}
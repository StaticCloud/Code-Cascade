'use client'

import styled from 'styled-components'
import { useState } from 'react';
import Link from 'next/link'

const HeaderWrapper = styled.header`
    width: 100svw;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
`;

const HamburgerWrapper = styled.div`
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 10px;

    &:before {
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100svw;
        height: 50px;
        background-color: black;
        z-index: 0;
    }

    label {
        position: absolute;
        opacity: 0;
    }

    input[type="checkbox"] {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 999;
    }

    .hamburger {
        top: 50%;
    }

    input[type="checkbox"]:checked ~ .hamburger {
        background: transparent;
    }

    input[type="checkbox"]:checked ~ .hamburger:before {
        top: 0;
        transform: rotate(-45deg);
    }

    input[type="checkbox"]:checked ~ .hamburger:after {
        top: 0;
        transform: rotate(45deg);
    }

    input[type="checkbox"]:checked ~ nav {
        height: 100svh;
    }

    input[type="checkbox"]:checked ~ nav a {
        top: -30px;
        margin: 30px 0;
        opacity: 1;
    }

    .hamburger, .hamburger:before, .hamburger:after {
        position: absolute;
        content: '';
        height: 1px;
        width: 100%;
        background-color: white;
        transition: all 0.2s;
    }

    .hamburger:before {
        top: -8px;
    }

    .hamburger:after {
        top: 8px;
    }
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
    position: relative;
    z-index: 999;

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

const Nav = styled.nav`
    display: flex;
    position: fixed;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    padding-top: 50px;
    width: 100svw;
    height: 0svh;
    transition: 0.4s;
    background-color: black;
    z-index: -1;

    a {
        text-decoration: none;
        display: inline-flex;
        position: relative;
        top: -95px;
        color: white;
        margin: 0;
        padding: 3px;
        opacity: 0;
        transition: 0.4s;
        font-size: 1.5rem;
    }
`

export default function Header() {

    const [checked, setChecked] = useState(false);

    return (
        <HeaderWrapper>
            <Icon/>
            <HamburgerWrapper>
                <label htmlFor="nav-toggle">Mandatory Label for SEO</label>
                <input type="checkbox" className="nav-toggle" checked={checked} onChange={() => setChecked(!checked)}/>
                <div className='hamburger'/>
                <Nav onClick={() => setChecked(!checked)}>
                    <Link href={'/'}>HOME</Link>
                    <Link href={'/articles'}>ARTICLES</Link>
                    <Link href={'/about'}>ABOUT</Link>
                </Nav>
            </HamburgerWrapper>
        </HeaderWrapper>
    )
}
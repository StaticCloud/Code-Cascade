'use client'

import styled from 'styled-components'

const logo = styled.h1`
    font-size: 3rem;
    position: relative;
    display: inline-flex;
    border-bottom: 4px solid rgb(107, 72, 235);

    &:before,
    &:after {
        position: absolute;
        display: block;
        height: 4px;
        content: '';
        bottom: -4px;
        left: 0;
    }

    &:before {
        width: 50%;
        background-color: rgb(240, 150, 66);
    }

    &:after {
        left: 50%;
        width: 30%;
        background-color: rgb(233, 107, 195);
    }
`;

export default logo;
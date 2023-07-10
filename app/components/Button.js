'use client'

import styled from 'styled-components'

const ButtonWrapper = styled.a`
    display: inline-block;
    position: relative;
    color: white;
    padding: 10px;
    border: 1px solid white;
    background: none;
    font-size: .7rem;
    margin-top: 10px;

    &:before,
    &:after {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        transition: all 0.2s;
    }

    &:before {
        width: 0%;
        display: block;
        content: '';
        background-color: white;
    }

    &:after {
        padding: 10px;
        color: black;
        content: '${props => props.$text}';
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }

    &:hover {
        cursor: pointer;
    }

    &:hover:before {
        width: 100%;
    }

    &:hover:after {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
`


export default function Button({ text }) {
    return (
        // include $ before a prop name to imply that it is transient, or meant exclusively for the uppermost component layer
        <ButtonWrapper $text={text}>{text}</ButtonWrapper>
    );
}
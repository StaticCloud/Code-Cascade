'use client'

import styled from 'styled-components'

const ErrorWrapper = styled.section`
    width: 100%;
    height: 100svh;
    top: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ErrorBlock = styled.div`
    border-left: 2px white solid;
    padding-left: 20px;

    h1 {
        font-size: 3rem;
    }
`;

export default function Error({ error, reset }) {
    return (
        <ErrorWrapper>
            <ErrorBlock>
                <h1>An error has occurred.</h1>
                <p>The article you requested was not found.</p>
            </ErrorBlock>
        </ErrorWrapper>
    )
}
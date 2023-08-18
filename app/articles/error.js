'use client'

import styled from 'styled-components'
import Link from 'next/link'

const ErrorWrapper = styled.section`
    height: 100svh;
    width: 100svw;
    top: 0;
    left: 0;
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

    a {
        display: inline-block;
        font-weight: bold;
        margin-top: 5px;
        color: rgb(212, 212, 212);;
        text-decoration: none;
    }

    a:hover {
        color: white;
    }
`;

export default function Error() {
    return (
        <ErrorWrapper>
            <ErrorBlock>
                <h1>An error has occurred.</h1>
                <p>The category you requested was not found.</p>
                <Link href='/'>
                    <p>Return Home</p>
                </Link>
            </ErrorBlock>
        </ErrorWrapper>
    )
}
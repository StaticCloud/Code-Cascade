'use client'

import styled from 'styled-components'

const LoadingWrapper = styled.section`
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoadingSpinner = styled.div`
    &,
    &:before,
    &:after {
        width: 10px;
        height: 10px;
        display: block;
        position: absolute;
        content: '';
        background-color: white;
    }

    & {
        background-color: rgb(240, 150, 66);
        animation: center-dot 1s linear infinite;
    }

    &:before {
        right: 20px;
        animation: left-dot 1s linear infinite;
    }

    &:after {
        left: 20px;
        animation: right-dot 1s linear infinite;
    }

    @keyframes left-dot {
        0% {
            background-color: rgb(233, 107, 195);
        }

        33% {
            background-color: rgb(240, 150, 66);
        }

        66% {
            background-color: rgb(107, 72, 235);
        }

        100% {
            background-color: rgb(233, 107, 195);
        }
    }

    @keyframes center-dot {
        0% {
            background-color: rgb(107, 72, 235);
        }

        33% {
            background-color: rgb(233, 107, 195);
        }

        66% {
            background-color: rgb(240, 150, 66);
        }

        100% {
            background-color: rgb(107, 72, 235);
        }
    }

    @keyframes right-dot {
        0% {
            background-color: rgb(240, 150, 66);
        }

        33% {
            background-color: rgb(107, 72, 235);
        }

        66% {
            background-color: rgb(233, 107, 195);
        }

        100% {
            background-color: rgb(240, 150, 66);
        }
    }
`;

export default function Loading() {
    return (
        <LoadingWrapper>
            <LoadingSpinner>
                <div></div>
            </LoadingSpinner>
        </LoadingWrapper>
    )
}
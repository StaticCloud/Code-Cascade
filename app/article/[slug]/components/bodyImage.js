'use client'

import Image from "next/image"

import styled from 'styled-components';

const ImageAndText = styled.div`
    margin: 10px 0;

    p {
        display: block;
        margin: 0;
        padding: 9px;
        font-style: italic;
        background-color: #101010;
    }
`;

const BodyImageWrapper = styled.div`
    display: block;
    width: 100%;
    height: 300px;
    position: relative;
    background-color: #1b1b1b;

    img {
        object-fit: contain;
    }
`;

export default function BodyImage({ src, alt }) {
    return(
        <ImageAndText>
            <BodyImageWrapper>
                <Image src={src} fill={true} alt={alt}/>
            </BodyImageWrapper>
            <p>{alt}</p>
        </ImageAndText>
    );
}
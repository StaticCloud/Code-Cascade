'use client'

import styled from 'styled-components';
import Image from 'next/image';

const ImageWrapper = styled.div`
    position: fixed;
    height: 100svh;
    width: 50svw;
    top: 0px;
    right: 0;

    img {
        object-fit: cover;
        clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    }
`

export default function ImageCover({ image, alt }) {
    return (
        <ImageWrapper>
            <Image src={image} fill={true} alt={alt}/>
        </ImageWrapper>
    );
}
'use client'

import styled from 'styled-components'
import Image from 'next/image'
import GitHub from '@/public/github.svg'
import LinkedIn from '@/public/linkedin.svg'

const FooterWrapper = styled.footer`
    margin-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;

    img {
        padding: 5px;
    }

    a {
        display: inline-block;
        opacity: 0.5;
        transition: all 0.2s;
    }

    a:hover {
        opacity: 1;
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <div>
                <a href="https://github.com/StaticCloud" target="_blank">
                    <Image src={GitHub} alt="GitHub Icon" width={'50'} height={'50'} />
                </a>
                <a href="https://www.linkedin.com/in/diego-marrs/" target="_blank">
                    <Image src={LinkedIn} alt="LinkedIn Icon" width={'50'} height={'50'} />
                </a>
            </div>
        </FooterWrapper>
    );
}
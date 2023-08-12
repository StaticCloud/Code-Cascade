'use client'

import GitHub from '@/public/github.svg'
import LinkedIn from '@/public/linkedin.svg'
import Image from 'next/image';
import styled from 'styled-components';

const AboutContentWrapper = styled.div`
    max-width: 450px;

    p {
        line-height: 1.5rem;
    }

    div {
        margin: 10px 0 0 0;
    }

    a {
        display: inline-block;
        opacity: 0.5;
        transition: all 0.2s;
    }

    a:hover {
        opacity: 1;
    }

    img {
        padding: 5px;
    }

    @media screen and (min-width: 850px) {
        margin-right: 50svw;

        h1 {
            font-size: 2rem;
        }

        p { 
            font-size: 1rem;
        }
    }
`;

export default function AboutContent() {
    return (
        <AboutContentWrapper>
            <h1>What is Code Cascade?</h1>
            <p>Code Cascade is a blog with a focus on web development topics, built with Sanity.io and Next.js.</p>
            <p>Code Cascade takes a beginner-friendly approach to explaining advanced technical concepts, making Code Cascade accessible for developers of all experience levels.</p>
            <p>Code Cascade is developed and maintained by Diego Marrs. Feel free to check out my GitHub page or connect with me on LinkedIn.</p>
            <div>
                <a href="https://github.com/StaticCloud" target="_blank">
                    <Image src={GitHub} alt="GitHub Icon" width={"50"} height={"50"}/>
                </a>
                <a href="https://www.linkedin.com/in/diego-marrs/" target="_blank">
                    <Image src={LinkedIn} alt="LinkedIn Icon" width={"50"} height={"50"}/>
                </a>
            </div>
        </AboutContentWrapper>
    )
}
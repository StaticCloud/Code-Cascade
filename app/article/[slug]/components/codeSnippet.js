'use client'

import styled from 'styled-components';

const CodeSnippetWrapper = styled.div`
    p {
        display: block;
        margin: 0;
        padding: 9px;
        font-style: italic;
        background-color: #101010;
    }
`

const CodeWrapper = styled.pre`
    background-color: #1b1b1b;
    overflow-x: scroll;
    padding: 9px;

    code {
        background-color: #1b1b1b;
        padding: 0;
        color: #DEDEDE;
        line-height: 1.3rem;
        font-size: 1rem;
    }
`

export default function CodeSnippet({ block }) {
    return (
        <CodeSnippetWrapper>
            <CodeWrapper>
                <code>
                    {block.code}
                </code>
            </CodeWrapper>
            <p>{block.description}</p>
        </CodeSnippetWrapper>
    );
}
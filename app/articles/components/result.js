'use client'

import Link from 'next/link'
import styled from 'styled-components';

const SearchResult = styled.div`
    margin-bottom: 10px;

    a {
        color: white;
        font-size: .8rem;
        display: block;
        text-decoration: none;
        padding: 10px;
        border-left: 2px solid ${props => props.color};
        transition: .2s all;
    }

    @media screen and (min-width: 850px) {
        a {
            font-size: 1rem;
        }
        
        a:hover {
            border-left-width: 8px;
        }
    }
`;

export default function Result({ result }) {
    return (
        <SearchResult color={result.categoryColor}>
            <Link href={`/article/${result.slug}`}>{result.title}</Link>
        </SearchResult>
    )
}
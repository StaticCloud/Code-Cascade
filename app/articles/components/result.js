'use client'

import Link from 'next/link'
import styled from 'styled-components';

const SearchResult = styled.div`
    a {
        color: white;
        display: block;
        text-decoration: none;
        padding: 10px;
    }
`;

export default function Result({ result }) {
    return (
        <SearchResult>
            <Link
                href={`/article/${result.slug}`}
                style={{ borderLeft: `2px solid ${result.categoryColor}` }}>{result.title}</Link>
        </SearchResult>
    )
}
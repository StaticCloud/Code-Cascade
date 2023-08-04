'use client'

import Link from 'next/link'
import styled from 'styled-components';

const SearchResults = styled.div`
    a {
        color: white;
        display: block;
        text-decoration: none;
        padding: 10px;
    }
`;

export default function resultsList({ results }) {
    return (
        <SearchResults>
            {results.map((result, i) => (
                <Link 
                    key={i} 
                    href={`/articles/${result.slug}`}
                    style={{borderLeft: `2px solid ${result.categoryColor}`}}>{result.title}</Link>
            ))}
        </SearchResults>
    )
}
'use client'

import styled from 'styled-components'
import CategoryList from './categoryList'
import ResultsList from './resultsList'
import { useState } from 'react';
import Link from 'next/link';

const PageContainerWrapper = styled.section`
    width: 100svw;
    height: calc(100svh - 50px);
`;

const CategoryHeaderWrapper = styled.h1`
    color: ${props => props.color};
    font-size: 3rem;
    display: inline-block;
    margin-bottom: 15px;

    &:hover {
        cursor: pointer;
        color: white;
        transition: all 0.2s;
    }

    @media screen and (min-width: 850px) {
        font-size: 4rem;
    }
`

const SearchResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    h1 {
        font-size: 3rem;
    }

    p {
        font-size: .9rem;
        font-weight: bold;
    }

    & > div {
        max-width: 400px;
        margin: 1rem;
    }

    & > div > a {
        text-decoration: none;
        display: inline-block;
        color: #cecece;
        font-weight: bold;
        margin-bottom: 0.5rem;
        transition: all 0.2s;
    }
    
    & > div > a:hover {
        color: white;
    }

    @media screen and (min-width: 850px) {
        p { 
            font-size: 1.3rem;
        }
    }
`;

export default function PageContainer({ category, allCategories, articles }) {
    const [categoryListState, setCategoryListState] = useState(false);

    return (
        // creating a page container so I can use React hooks, which are not allowed in Next.js pages
        <PageContainerWrapper>
            <CategoryList setCategoryListState={setCategoryListState} allCategories={allCategories} showList={categoryListState} />
            <SearchResultsWrapper>
                <div>
                    <div>
                        <p>I want to learn about...</p>
                        <CategoryHeaderWrapper onClick={() => setCategoryListState(true)} color={category.categoryColor}>
                            {category.name}
                        </CategoryHeaderWrapper>
                    </div>
                    {category.name != 'Anything' ? <Link href='/articles'>Clear Filter</Link> : null}
                    {articles.length ? (
                        <ResultsList articles={articles} />
                    ) : (
                        <p>No articles under that category. Be sure to check back later!</p>  
                    )}
                </div>
            </SearchResultsWrapper>
        </PageContainerWrapper>
    )
}
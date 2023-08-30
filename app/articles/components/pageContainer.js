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
    color: grey;
    font-size: 1.5rem;
    display: inline-block;
    margin-bottom: 15px;
    position: relative;

    &:hover {
        color: white;
        cursor: pointer;
        transition: all 0.2s;
    }

    &:before {
        content: '';
        bottom: -5px;
        height: 2px;
        background-color: ${props => props.color};
        width: 0%;
        display: inline-block;
        position: absolute;
        transition: all 0.2s;
    }

    &:hover:before {
        width: 100%;
    }

    &:not(:hover):before {
        right: 0;
    }
`

const SearchResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    p {
        font-size: .9rem;
        font-weight: bold;
    }

    /* this needs serious work */

    & > div {
        max-width: 450px;
        margin: 1rem;
        animation-name: transition-in;
        animation-duration: .5s;
    }

    & > div > div > a {
        text-decoration: none;
        display: block;
        color: #cecece;
        font-weight: bold;
        margin-bottom: 0.5rem;
        transition: all 0.2s;
    }
    
    & > div > div > a:hover {
        color: white;
    }

    @media screen and (min-width: 850px) {
        p { 
            font-size: 1.3rem;
        }

        & > div {
            min-width: 450px;
        }
    }

    @keyframes transition-in {
        from {
            opacity: 0;
            margin-bottom: 3rem;
        }

        to {
            opacity: 1;
            margin-bottom: 1rem;
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
                    {category.name != 'Filter Articles' ? <Link href='/articles'>Clear Filter</Link> : null}
                        <CategoryHeaderWrapper onClick={() => setCategoryListState(true)} color={category.categoryColor}>
                            {category.name}
                        </CategoryHeaderWrapper>
                    </div>
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
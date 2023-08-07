'use client'

import styled from 'styled-components'
import CategoryList from './categoryList'
import ResultsList from './resultsList'
import { useState } from 'react';

const PageContainerWrapper = styled.section`
    width: 100svw;
    height: calc(100svh - 50px);
`;

const CategoryHeaderWrapper = styled.h1`
    color: ${props => props.color};
    font-size: 3rem;
    display: inline-block;

    &:hover {
        cursor: pointer;
        color: white;
        transition: all 0.2s;
    }
`

const SearchResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export default function PageContainer({ category, allCategories, articles }) {
    const [categoryListState, setCategoryListState] = useState(false);

    return (
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
                    <ResultsList articles={articles} />
                </div>
            </SearchResultsWrapper>
        </PageContainerWrapper>
    )
}
'use client'

import styled from 'styled-components';
import Link from 'next/link';

const LinkWrapper = styled.div`
    padding: 10px;

    a {
        text-decoration: none;
        font-weight: bold;
        display: block;
        padding: 10px;
        color: ${props => props.color};
        transition: all 0.2s;
    }

    a:hover {
        color: white;
    }
`;

const CategoryListWrapper = styled.div`
    position: fixed;
    top: 50px;
    height: 100svh;
    z-index: 2;
    background-color: black;
    overflow-y: scroll;
    left: ${props => props.$showList ? `0svw` : `-100svw`};
    transition: all 0.2s;

    &:before,
    &:after {
        content: '';
        display: block;
        height: 100svh;
        transition: all 0.2s;
    }

    &:before {
        width: 100svw;
        position: fixed;
        z-index: -2;
        background-color: rgba(16,16,16,0.2);
        display: ${props => props.$showList ? `block` : `none`}
    }

    &:after {
        width: 100%;
        z-index: -1;
        position: absolute;
        top: 0;
        background-color: black;
    }
`;

export default function CategoryList({ allCategories, showList, setCategoryListState }) {
    return (
        <CategoryListWrapper $showList={showList} onClick={() => setCategoryListState(!showList)}>
            {allCategories.map((category, i) => {
                return (
                    <LinkWrapper color={category.categoryColor} key={i}>
                        <Link href={`/articles/${category.slug}`}>{category.name}</Link>
                    </LinkWrapper>
                )
            })}
        </CategoryListWrapper>
    );
}
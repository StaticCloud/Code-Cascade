'use client'

import styled from 'styled-components';
import Link from 'next/link';

const LinkWrapper = styled.div`
    margin: 10px;

    a {
        text-decoration: none;
        font-weight: bold;
        display: block;
        margin: 10px;
        color: white;
        transition: all 0.2s;
        display: inline-block;
        position: relative;
        transition: all .2s;
    }

    a:hover {
        color: white;
    }

    a:before {
        content: '';
        display: block;
        height: 2px;
        width: 100%;
        bottom: -5px;
        position: absolute;
        background-color: ${props => props.color};
        transition: all .2s;
    }

    

    @media screen and (min-width: 850px) {
        a { 
            color: grey;
            font-size: 3rem;
        }

        a:before {
            height: 4px;
            width: 0%;
        }

        a:hover {
            color: white;
        }

        a:hover:before {
            width: 100%;
        }
    
        a:not(:hover):before {
            right: 0;
        }
    }
`;

const CategoryListWrapper = styled.div`
    position: fixed;
    height: 100svh;
    width: 50svw;
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
        background-color: rgba(7,7,7,0.5);
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
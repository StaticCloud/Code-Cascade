'use client'

import styled from 'styled-components'
import CategoryList from './categoryList'

const CategoryHeaderWrapper = styled.h1`
    color: ${props => props.color};
    font-size: 3rem;
`

export default function CategoryHeader({ category, allCategories }) {
    return (
        <>
            <CategoryList allCategories={allCategories} />
            <p>I want to learn about...</p>
            <CategoryHeaderWrapper color={category.categoryColor}>{category.name}</CategoryHeaderWrapper>
        </>
    )
}
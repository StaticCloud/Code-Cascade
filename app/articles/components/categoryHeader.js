'use client'

import styled from 'styled-components'

const CategoryHeaderWrapper = styled.h1`
    color: ${props => props.color};
    font-size: 3rem;
`

export default function CategoryHeader({ category, allCategories }) {
    return (
        <>
            <p>I want to learn about...</p>
            <CategoryHeaderWrapper color={category.categoryColor}>{category.name}</CategoryHeaderWrapper>
        </>
    )
}
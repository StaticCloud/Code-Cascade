'use client'

import styled from 'styled-components'

const CategoryBlock = styled.p`
    color: white;
    font-weight: bold;
    display: inline-block;
    padding: 8px;
    background-color: ${props => props.color};
`;

export default CategoryBlock;
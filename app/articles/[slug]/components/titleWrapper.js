'use client'

import styled from 'styled-components'

const TitleWrapper = styled.div`
    padding-left: 20px;
    border-left: 4px solid ${props => props.color};
    margin-bottom: 20px;

    h1 {
        font-size: 2rem;
    }
`;

export default TitleWrapper;
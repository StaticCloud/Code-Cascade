'use client'

import styled from 'styled-components'

const TitleWrapper = styled.div`
    padding-left: 20px;
    border-left: 3px solid ${props => props.color};

    h1 {
        font-size: 3rem;
    }
`;

export default TitleWrapper;
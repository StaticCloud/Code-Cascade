'use client'

import styled from 'styled-components'

const LandingLogo = styled.div`
    margin: 20px;

    div {
        margin-top: 10px;
    }

    div a {
       opacity: 0.5;
       transition: all 0.2s; 
       margin-right: 10px;
    }

    div a:hover {
        opacity: 1;
    }

    @media screen and (min-width: 850px) {
        margin-right: 50svw;

        h1 {
            font-size: 3.5rem;
        }

        p { 
            font-size: 1rem;
        }
    }
`;

export default LandingLogo;
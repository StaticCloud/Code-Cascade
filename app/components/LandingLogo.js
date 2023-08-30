'use client'

import styled from 'styled-components'

const LandingLogo = styled.div`
    margin: 1rem;
    animation-name: transition-in;
    animation-duration: .5s;

    h1 {
        font-size: 2.5rem;
    }

    p { 
        font-size: .8rem;
    }

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
            font-size: 3rem;
        }

        p { 
            font-size: 1rem;
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

export default LandingLogo;
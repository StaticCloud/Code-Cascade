'use client'

export default function Button({ children }) {
    return (
        <a>
            {children}
            <style jsx>{`
                a {
                    display: inline-block;
                    position: relative;
                    color: white;
                    padding: 10px;
                    border: 1px solid white;
                    background: none;
                    font-size: 1rem;

                    margin-top: 10px;
                }

                a:before,
                a:after {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    transition: all 0.2s;
                }

                a:before {
                    width: 0%;
                    display: block;
                    content: '';
                    background-color: white;
                }

                a:after {
                    padding: 10px;
                    color: black;
                    content: '${children}';
                    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
                }

                a:hover {
                    cursor: pointer;
                }

                a:hover:before {
                    width: 100%;
                }

                a:hover:after {
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                }

            `}</style>
        </a>
    );
}
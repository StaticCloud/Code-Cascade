import styled from 'styled-components';
import Link from 'next/link';

const CategoryListWrapper = styled.div`
    position: fixed;
    top: 50px;
    height: 100svh;
    z-index: 2;
    background-color: black;
    overflow-y: scroll;

    a {
        padding: 20px;
        display: block;
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    &:before,
    &:after {
        content: '';
        display: block;
        height: 100svh;
    }

    &:before {
        width: 100svw;
        position: fixed;
        z-index: -2;
        background-color: rgba(16,16,16,0.2);
    }

    &:after {
        width: 100%;
        z-index: 2;
        position: absolute;
        top: 0;
        z-index: -1;
        background-color: black;
    }
`;

export default function CategoryList({ allCategories }) {
    return (
        <CategoryListWrapper>
            {allCategories.map((category, i) => {
                return <Link href={`/articles/${category.slug}`} key={i}>{category.name}</Link>
            })}
        </CategoryListWrapper>
    );
}
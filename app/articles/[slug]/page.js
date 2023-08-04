import { getArticle } from '@/sanity/queries';
import styles from '../styles/article.module.css'
import Image from 'next/image';
import TitleWrapper from './components/titleWrapper';
import ImageWrapper from './components/imageWrapper';
import ArticleBody from './components/articleBody';

async function loadArticle(slug) {
    const res = await getArticle(slug);

    if (!res.length) {
        throw new Error("The article could not be found.")
    }

    return res[0];

}

export default async function SingleArticle({ params }) {
    const post = await loadArticle(params.slug)

    return (
        <>
            <header className={styles.header}>
                <TitleWrapper color={post.category.color}>
                    <h1>{post.title}</h1>
                </TitleWrapper>
                <ImageWrapper>
                    <Image fill={true} src={post.previewImage} alt="Article image preview"/>
                </ImageWrapper>
            </header>
            <article className={styles.articleContent}>
                <ArticleBody body={post.body}/>
            </article>
        </>
    );
}
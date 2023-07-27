import client from '../../../sanity/client';
import styles from '../styles/article.module.css'
import Image from 'next/image';
import TitleWrapper from './components/titleWrapper';
import ImageWrapper from './components/imageWrapper';

async function getArticle(slug) {
    const res = await client.fetch(`*[_type == 'blogPost' && slug.current == '${slug}'] { 
                                        ..., 
                                        "imagePreviewUrl": previewImage.asset->url,
                                        category-> 
                                    }`)

    if (!res.length) {
        throw new Error("The article could not be found.")
    }

    return res[0];

}

export default async function SingleArticle({ params }) {
    const post = await getArticle(params.slug)

    console.log(post)

    return (
        <article className={styles.articleContent}>
            <TitleWrapper color={post.category.color.hex}>
                <h1>{post.title}</h1>
            </TitleWrapper>
            <ImageWrapper>
                <Image fill={true} src={post.imagePreviewUrl} alt="Article image preview"/>
            </ImageWrapper>
        </article>
    );
}
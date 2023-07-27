import client from '../../../sanity/client';
import Image from 'next/image';
import TitleWrapper from './components/titleWrapper';
import CategoryBlock from './components/categoryBlock';

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
        <>
            <TitleWrapper color={post.category.color.hex}>
                <CategoryBlock color={post.category.color.hex}>{post.category.name}</CategoryBlock>
                <h1>{post.title}</h1>
            </TitleWrapper>
            <Image src={post.imagePreviewUrl} width={500} height={500} alt="Article image preview"/>
        </>
    );
}
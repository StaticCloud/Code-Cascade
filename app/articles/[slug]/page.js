import { Suspense } from 'react';
import client from '../../../sanity/client'

export default async function SingleArticle({ params }) {
    const post = await client.fetch(`*[_type == 'blogPost' && slug.current == '${params.slug}']`)

    return (
        <h1>{params.slug}</h1>
    );
}
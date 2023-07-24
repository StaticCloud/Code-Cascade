import client from '../../../sanity/client'

async function getArticle(slug) {
    const res = await client.fetch(`*[_type == 'blogPost' && slug.current == '${slug}']`)

    if (res == []) {
        throw new Error("No such article!")
    }

    return res;

}

export default async function SingleArticle({ params }) {
    const post = await getArticle(params.slug)

    return (
        <>
            {post.length ? (
                <h1>Hello world!</h1>
            ):(
                <>
                <h1>No such post found!</h1>
                </>
            )}
        </>
    );
}
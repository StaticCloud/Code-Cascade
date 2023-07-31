import client from "./client";

export async function getPost(slug) {
    const post = await client.fetch(
        `*[_type == 'blogPost' && slug.current == '${slug}'] {
            title,
            "category": category-> {
                name,
                "color": color.hex
            },
            "slug": slug.current,
            "previewImage": previewImage.asset->url,
            "body": body[] {
                "type": _type,
                _type == "block" => {
                    "style": style,
                    "children": children[] {
                        text,
                        "mark": coalesce(marks[0], null)
                    }
                },
                _type == "bodyImage" => {
                    alt,
                    "image": image.asset->url
                }
            }
        }`);

    return post;
}
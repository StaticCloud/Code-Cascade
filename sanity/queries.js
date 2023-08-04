import client from "./client";

export async function getArticle(slug) {
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
                    },
                    "listItem": coalesce(listItem, null),
                    "level": coalesce(level, 0),
                },
                _type == "bodyImage" => {
                    alt,
                    "image": image.asset->url
                }
            }
        }`);

    return post;
}

export async function getPostSearch(category) {
    const posts = await client.fetch(
        `*[_type == 'blogPost' ${category ? `&& category->name == ${category}` : ''}] {
            title,
            "categoryColor": category->color.hex,
            "slug": slug.current
        }`
    )

    return posts;
}
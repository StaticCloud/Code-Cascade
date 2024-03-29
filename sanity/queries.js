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
                },
                _type == "codeSnippet" => {
                    "code": code.code,
                    "language": language.typescript,
                    description
                }
            }
        }`);

    return post;
}

export async function getPostSearch(category) {
    const posts = await client.fetch(
        `*[_type == 'blogPost' ${category ? `&& category->slug.current == '${category}'` : ''}] {
            title,
            "categoryColor": category->color.hex,
            "slug": slug.current
        }`
    )

    return posts;
}

export async function getCategories(category) {
    const categories = await client.fetch(
        `*[_type == 'category' ${category ? `&& slug.current == '${category}'` : ''}] {
            name,
            'categoryColor': color.hex,
            "slug": slug.current
          }`
    );

    return categories;
}
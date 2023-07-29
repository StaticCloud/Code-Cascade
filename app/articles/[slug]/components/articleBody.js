import Image from "next/image"

export default function ArticleBody({ body }) {
    console.log(body)

    return body.map((block, i) => {
        switch (block.style) {
            case 'normal':
                if (block.children[0].text) {
                    return <p key={i}>{block.children[0].text}</p>
                } else {
                    return <br/>
                }
            case 'h2':
                return <h2 key={i}>{block.children[0].text}</h2>
        }

        if (block.image) {
            return <h2 key={i}>{block.alt}</h2>
        }
    })
}
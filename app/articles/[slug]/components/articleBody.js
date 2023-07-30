import BlockChild from "./blockChild"

export default function ArticleBody({ body }) {
    return body.map((block, i) => {
        switch (block.style) {
            case 'normal':
                if (block.children.length && block.children[0].text != '') {
                    if (!block.listItem) {
                        return <p key={i}><BlockChild block={block}/></p>
                    } else {
                        return <li key={i}><BlockChild block={block}/></li>
                    }
                } else {
                    return <br/>
                }
            case 'h2':
                return <h2 key={i}><BlockChild block={block}/></h2>
        }

        if (block.image) {
            return <h2 key={i}>{block.alt}</h2>
        }
    })
}
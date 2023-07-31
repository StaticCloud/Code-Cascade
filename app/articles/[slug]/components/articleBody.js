import Image from "next/image"
import BlockChildren from "./blockChildren"

export default function ArticleBody({ body }) {
    console.log(body)
    return body.map((block, i) => {
        switch (block.type) {
            case "block":
                switch (block.style) {
                    case 'normal':
                        switch (block.children[0].text) {
                            case '':
                                return <br/>
                            default:
                                return <p>
                                    <BlockChildren block={block}/>
                                </p>;
                        } 
                    case 'h2':
                        return <h2>
                            <BlockChildren block={block}/>
                        </h2>
                }
        }
    })
}
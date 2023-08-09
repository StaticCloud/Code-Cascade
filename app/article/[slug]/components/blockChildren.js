export default function BlockChild({ block }) {
    return block.children.map((child, i) => {
            switch (child.mark) {
                case 'code':
                    return <span><code>{child.text}</code></span>
                case 'strong':
                    return <strong>{child.text}</strong>
                default:
                    return child.text
            }
        })
}